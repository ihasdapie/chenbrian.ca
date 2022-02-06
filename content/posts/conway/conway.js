import * as THREE from "./three.module.js"


const BUILTIN_INITIALS = {
    "growth": [[4,4,1], [4,5,2], [4,6,3], [5,6,1], [6, 5, 2]],

}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

class conway_cell {
    constructor(x, y, z, geometry, visible, scene) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.alive = false;
        this.visible = visible;
        this.neighbors = 0;
        this.mesh = new THREE.Mesh(geometry, 
            new THREE.MeshBasicMaterial({
                color: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
                transparent: true,
                opacity: 0.5,
            } ));
        this.mesh.position.set(x, y, z);
        scene.add(this.mesh);
        
        if (!this.visible) {
            this.mesh.visible = false;
        }
    }

    update() {
        // console.log("init: ", this.x, this.y, this.alive, this.neighbors);
        if (this.neighbors > 3) {
            this.alive = false;
        } else if (this.neighbors < 2) {
            this.alive = false;
        }
        else if (this.neighbors == 3) {
            this.alive = true;
        }
        // console.log(this.x, this.y, this.alive);
    }
    render () {
        this.mesh.visible = this.alive
    }

    toggle_cell () {
        this.alive = !this.alive;
        this.render();
    }
}

class conway_board {
    constructor (width, height, depth, geometry, scene, renderer, camera) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.cells = [];
        this.group = new THREE.Group();
        this.scene = scene
        this.renderer = renderer
        this.camera = camera
        for (let x = 0; x < width + 2; x++) {
            this.cells[x] = [];
            for (let y = 0; y < height + 2; y++) {
                this.cells[x][y] = [];
                for (let z = 0; z < depth +2; z++) {
                    var visible = !(x == 0 || y == 0 || z == 0 || x == width+1 || y == height+1 || z == depth + 1); // account for the border
                    this.cells[x][y].push(new conway_cell(x, y, z, geometry, visible, scene));
                    this.group.add(this.cells[x][y][z].mesh);
                }
            }
        }
        scene.add(this.group);

    }

    reset () {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                for (let z = 0; z < this.height; z++) {
                    this.get_cell(x, y, z).alive = false;
                    this.get_cell(x, y, z).set_visual();
                }
            }
        }
    }


    get_cell(x, y, z) {
        return this.cells[x+1][y+1][z+1];
    }

    set_neighbours () {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                for (let z = 0; z < this.height; z++) {
                    this.get_cell(x, y, z).neighbors = 0;
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            for (let k = -1; k <= 1; k++) {
                                if (i == 0 && j == 0 && k == 0) {
                                    continue;
                                }
                                if (x+i < 0 || x+i >= this.width || y+j < 0 || y+j >= this.height || z+k < 0 || z+k >= this.depth) {
                                    continue;
                                }
                                if (this.get_cell(x+i, y+j, z+k).alive) {
                                    this.get_cell(x, y, z).neighbors++;
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    render () {
        // TODO: Optimize to render only changed ones
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                for (let z = 0; z < this.height; z++) {
                    this.get_cell(x, y, z).render();
                }
            }
        }
        this.group.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.1);
        this.renderer.render(this.scene, this.camera);
    }

    update() {
        this.render();
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                for (let z = 0; z < this.height; z++) {
                    this.get_cell(x, y, z).update();
                }
            }
        }
    }

    async run_conway() {
        while (true) {
            this.render();
            this.set_neighbours();
            this.update();
            await sleep(400);
        }
    }

} 

class conway_widget {
    constructor (canvas_width, canvas_height, board_x, board_y, board_z) {
        this.div = document.createElement("div");
        // this.canvas = document.createElement("canvas");
        this.div.appendChild(document.createElement("canvas"));
        this.canvas = this.div.childNodes[0];
        this.div.childNodes[0].width = canvas_width;
        this.div.childNodes[0].height = canvas_height;

        this.div.setAttribute("id", "conway_widget");


        this.dimension_inputs = [this.make_input("Width (x)", "500") , this.make_input("Height (y)", "500"), this.make_input("Depth (z)", "500")];

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.canvas.width / this.canvas.height, 0.1, 1000 );


        this.camera.position.x = 5; // TODO: Remove
        this.camera.position.y = 5;
        this.camera.position.z = 30;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.div.childNodes[0]
        });
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.board = new conway_board(board_x, board_y, board_z, this.geometry, this.scene, this.renderer, this.camera);

        this.init_type = "growth"

        this.build_widget();
        this.seed();
        this.board.run_conway();
    }


    restart () {

    }

    seed (init_type) {
        for (const [x, y, z] of BUILTIN_INITIALS[this.init_type]) {
            this.board.get_cell(x, y, z).toggle_cell();
        }
    }

    build_widget () {
        /* for (const input of this.dimension_inputs) {
            this.div.appendChild(input);
        } */
        this.div.appendChild(this.renderer.domElement);
    }
    
    make_input (prompt, default_value) {
        var input = document.createElement("input");
        input.type = "text";
        input.onchange = function() { if (input.value == "") {
                input.value = default_value;
            }
        }
        var label = document.createElement("label");
        label.innerHTML = prompt;
        label.appendChild(input);
        return label;
    }
}



function make_conway (canvas_width, canvas_height, board_x, board_y, board_z) {
    var widget = new conway_widget(canvas_width, canvas_height, board_x, board_y, board_z);
    return widget.div;
}


var scripts = document.getElementsByTagName('script')
var current_pos = scripts[scripts.length-1]
current_pos.parentNode.insertBefore(make_conway(800, 800, 12, 12, 12), current_pos);









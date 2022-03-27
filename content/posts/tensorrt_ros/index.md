---
title: "Deploying ONNX Models onto ROS with TensorRT `cpp` API"
date: 2022-01-04T05:22:32-05:00
draft: true
katex: true
back_to_top: true
tags: ['robots', 'programming']
website_carbon: true
---








Download `TensorRT` from [here](https://developer.nvidia.com/tensorrt-getting-started). 
You do have to make an 'Nvidia Developers Program' account to download the `TensorRT` package, which I have mixed feelings about.
However this is easily bypassed if you are OK with building it from [source](https://github.com/NVIDIA/TensorRT)

- use the `.tar.gz` file; the debian installer gets upset if you have `cuda` that isn't the latest version


- Grab `https://github.com/onnx/onnx-tensorrt/`
  - Don't use `setup.py install`, just follow the build steps and then `cd` to the base repo directory and run `python3 -m pip install .`.
  - if it complains about `RuntimeError: module compiled against API version 0xe but this version of numpy is 0xd`
    - `run python3 -m pip install numpy --upgrade`



- Exporting and loading `onnx`
  - if facing errors regarding shapes, e.g.
    ```
    ERROR: ModelImporter.cpp:179 In function parseGraph:
[6] Invalid Node - Mul_522
[graphShapeAnalyzer.cpp::analyzeShapes::1285] Error Code 4: Miscellaneous (IElementWiseLayer Mul_522: broadcast dimensions must be conformable)
    ```
  - Inspect it with [netron](https://netron.app/)
  - Use `inplace=False` [reference](https://pytorch.org/tutorials/advanced/super_resolution_with_onnxruntime.html)
    - There are some issues with inplace operations and pytorch and exporting
























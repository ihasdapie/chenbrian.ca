update-notes:
  cp ~/Documents/School/EngSci_Notes/Y3S1-ECE/notes.pdf content/posts/engsci-year-3-fall/notes.pdf
  cp ~/Documents/School/EngSci_Notes/Y3S2-ECE/notes.pdf content/posts/engsci-year-3-winter/notes.pdf

newpost name:
  hugo new "content/posts/{{name}}/index.md"

update-resume:
  "cp" ~/Documents/Work/Resume\etc/resume/resume.pdf static/resume.pdf
  pdftopng -r 400 static/resume.pdf static/resume.png
  mv static/resume.png-000001.png static/resume.png
  

deploy:
  #!/usr/bin/env bash
  just update-resume
  just update-notes
  msg="rebuilding site $(date)"

  git add --a
  git commit -m  "$msg"
  git push


  set -e

  printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

  hugo 

  cd public

  git add .

  if [ -n "$*" ]; then
    msg="$*"
  fi
  git commit -m "$msg"

  git pull
  git push

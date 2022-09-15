update-notes:
  cp ~/Documents/School/EngSci_Notes/Y3S1-ECE/notes.pdf content/posts/engsci-year-3-fall/notes.pdf

newpost name:
  hugo new "content/posts/{{name}}/index.md"

deploy:
  #!/usr/bin/env bash
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


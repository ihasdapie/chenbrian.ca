update-notes:
  cp ~/Documents/School/EngSci_Notes/Y3S1-ECE/notes.pdf content/posts/engsci-year-3-fall/notes.pdf
  cp ~/Documents/School/EngSci_Notes/Y3S2-ECE/notes.pdf content/posts/engsci-year-3-winter/notes.pdf

newpost name:
  hugo new "content/posts/{{name}}/index.md"

update-resume:
  "cp" ~/Documents/Work/About/resume/resume-publish.pdf static/resume.pdf
  # convert -density 600 static/resume.pdf -resize 25%   -quality 100 -alpha remove static/resume.png
  

deploy:
  #!/usr/bin/env bash
  # just update-resume
  # just update-notes
  msg="rebuilding site $(date)"

  git add --a
  git commit -m  "$msg"
  git push


  set -e

  printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

  hugo build --cleanDestinationDir

  cd public

  git add .

  if [ -n "$*" ]; then
    msg="$*"
  fi
  git commit -m "$msg"

  git pull -X ours
  git push

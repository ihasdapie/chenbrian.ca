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
  set -euo pipefail
  # just update-resume
  # just update-notes
  msg="rebuilding site $(date)"

  printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

  # public/ is the ihasdapie.github.io submodule; make sure it's checked out on master
  # (shallow: the full Pages history is too large to clone reliably). public/ is regenerated
  # from scratch each build, so just reset to whatever is live.
  [ -e public/.git ] || git submodule update --init --depth 1 public
  git -C public fetch -q --depth 1 origin master
  git -C public checkout -q -B master origin/master

  # wipe old output but keep public/.git (hugo's --cleanDestinationDir deletes it)
  find public -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
  hugo build

  git -C public add -A
  git -C public diff --cached --quiet || git -C public commit -m "$msg"
  git -C public push

  git add -A
  git diff --cached --quiet || git commit -m "$msg"
  git push

# Git Command List

bash Working Directory: Local Direcory : Remote Directory

```bash 
git config --list 
```

# For User Config
```bash 
git config --global user.name "user" 
```

```bash 
git config --global user.email=sz@gmail.com 
```

# pwd- Present Directory

```bash 
touch readme.md  
```

```bash 
git status 
```

```bash 
git init 
```

```bash 
ls // list show  
```

```bash 
ls -a // hidden file show 
```

```bash 
git add --all / git add .(Present Directory, Not Sub folder add, But Root Directory is fine) / git add filename 
```

```bash 
git commit -m "New file readme and Git command handnote file created" 
```

```bash 
git log/ git log --oneline  // History for comment 
```

```bash 
vi readme.md // :q for close 
```

```bash 
touch help.md 
```

# Revert previous comment:

```bash 
git reset --hard a1f5460 // revert previous comment and Id head 
```

```bash 
 git reflog // show all comment ID 
```

```bash 
 git reset --hard 8c4adf9 // revert code with comment id 
```

```bash 
 git rm help.md // remove file 
```

# Branch
```bash 
 git branch 
 ``` 
 --list // show list

```bash 
 git branch dev/add-heading-text ``` // create branch as master sub branch
``` 
```bash 
 git branch -d dev/add-heading-text  
``` 
 // delete branch

```bash 
git switch dev/add-heading-text  
``` 
// switch another branch

```bash 
 git branch -m feature/add-heading-text 
``` 
 // rename branch 

```bash 
 git branch feature/fix-text 
```

```bash 
 git switch feature/fix-text 
```

# Merge Branch 
```bash 
 git switch master 
 ```

```bash 
 git merge feature/add-heading-text 
```

# conflict
show both branch code and edit 
```bash 
 git add . 
```

```bash 
 git commit 
 ```

```bash 
 :wq 
 ```

# Stash: switch another branch without committing
```bash 
git stash 
 ```

# Later show or add 
```bash 
 git stash list 
 ```

```bash 
 git stash show -p 
 ```

```bash 
 :q 
 ```

```bash 
 git stash pop 
 ```

```bash 
 git stash apply stashId 
 ```

```bash 
git add . 
```

```bash 
 git commit  
 ```

#  git ignore 
```bash 
 mkdir node_modules 
 ```

```bash 
 touch .gitignore 
 ```

# already commit file, need to ignore
```bash 
 git rm --cached abcd.md 
 ```

```bash 
 git rm --cached node_modules 
 ```

```bash 
git diff .gitignore 
```

# Git hub : create a new repository on the command line

```bash 
 git init 
 ```

```bash 
git add README.md 
```

```bash 
git commit -m "first commit" 
```

```bash 
git branch -M main 
```

```bash 
git remote add origin https://github.com/sajedul2022/Github-Lesson.git 
```

```bash 
git push -u origin main 
```

# push an existing repository from the command line

```bash 
 git remote add origin https://github.com/sajedul2022/Github-Lesson.git 
 ```

```bash 
git branch -M main 
```

```bash 
git push -u origin main 
 ```


# update data after push, merge pull request

```bash 
 git pull 
 ```


# Docker summary command : 
Dockerfile: 

```bash 
 FROM node:alpine
```

```bash 
 COPY . /app 
 ```

```bash 
 WORKDIR /app 
 ```

```bash 
 CMD node app.js 
 ```

# docker version check
```bash 
 docker version 
 ```

# build: 
```bash 
 docker build -t docter-test . 
 ```

# see images:

```bash 
 docker images 
 ```
```bash 
 docker image ls 
 ```

# docker run
```bash 
 docker run docter-test 
 ```   
 // Folder name [docter-test]

# docker hub Online Repo Local to Dockerhub push

```bash 
 docker login 
 ```
 
```bash 
 docker tag 7f51a5914209 sajedul2022/docter-test 
 ```

```bash 
 docker images
  ```
```bash 
 docker push sajedul2022/docter-test 
 ```

# pull Others computer/docker/pc/online play etc.

Like: https://labs.play-with-docker.com/

```bash 
 docker version 
 ```

```bash 
 docker images 
 ```

```bash 
 docker pull sajedul2022/docter-test:latest 
 ```

```bash 
 docker images 
 ```

```bash 
 docker run sajedul2022/docter-test 
 ```


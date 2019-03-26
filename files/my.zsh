APPDIR="$HOME/Application"
PROJECT="$HOME/Project"

# 自定义命令
alias webstorm="$APPDIR/WebStorm-183.5153.33/bin/webstorm.sh &"
alias datagrip="$APPDIR/DataGrip-2018.3.1/bin/datagrip.sh &"
alias clear-dockers="node $PROJECT/myfm/zlz/shell/clear-dockers.js"
alias shadowsocks-app="$APPDIR/Shadowsocks-app/Shadowsocks-Qt5-3.0.1-x86_64.AppImage &"

# git 命令相关的函数
_current_branch() {
    br=`git branch | grep "*"`
    echo ${br/* /}
}

_gac() {
    commit_info=$1
        if [ -z ${commit_info} ]
        then
            commit_info="add or update files"
        fi
    echo "${commit_info}"
    git add .
    git commit -m ${commit_info}
}

_gacp() {
    _gac $1
    git push origin `_current_branch`
}

_gp() {
    git push origin `_current_branch`
}

_gfp() {
    git fetch
    git pull origin `_current_branch`
}

# git 命令简写
alias gp=_gp
alias gac=_gac
alias gacp=_gacp
alias gfp=_gfp

alias gsta="git status"
alias gssh="git stash"
alias gsshp="git stash pop"
alias gsshls="git stash list"
alias gadd="git add ."

alias gr='git remote'
alias grv='git remote -v'

alias glola="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all"

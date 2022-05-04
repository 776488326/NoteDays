# Git命令速查表

## Git

### 特点

1. 分布式版本控制工具
2. 所有的文件都存在本地硬盘中
3. 由linus开发

### 安装

windows：https://gitforwindows.org/

macos：brew install git

### 命令

版本查看：git --version

** 用户签名设置 **

配置用户名：git config --global user.name "用户名"

配置邮箱：git config --global user.email "邮箱地址" 

** 以上两项主要用于形成签名来区分不同的操作用户，并非登录github时的账号密码 **



初始化本地库：git init

查看本地库的状态变化：git status ————》包括了当前分支，提交记录，文件变化情况

查看提交版本日志：git reflog 或 git log（详细日志）

版本切换：git reset --hard 版本号



添加到暂存区：git add 文件名

删除暂存区文件：git rm --cache 文件名

提交到本地库：git commit -m “版本信息” 文件名



查看分支：git branch -v

创建分支：git branch 分支名

切换分支：git checkout 分支名

合并分支：git merge  分支名 ————》会默认合并到当前的分支下

冲突合并：当不同分支修改了同一文件后，在合并时会发生冲突

创建gitignore：touch .gitignore

应用gitignore：



## GitHub

### 特点

1. 代码托管中心
2. 所有文件都存在云上
3. 由linus开发

### 使用

访问：https://github.com/

创建远程库：建议与本地同名

### git操作

查看远程库：git remote -v

设置远程库别名：git remote add 别名 远程库地址

推送到远程库：git push 远程库地址(别名)  本地分支 ————》推送本地的哪个分支到哪个远程库

第一次推送需要登录github

拉取远程库代码：git pull 远程库地址 远程分支

克隆远程代码：git clone 远程库地址————》自动初始化本地库，并创建远程库的别名为origin



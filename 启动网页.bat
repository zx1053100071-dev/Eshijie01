@echo off
set PATH=C:\Program Files\nodejs;%PATH%
echo 正在启动开发服务器...
start http://localhost:3000
npm run dev
pause
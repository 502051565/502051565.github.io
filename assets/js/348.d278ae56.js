(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1420:function(t,a,s){"use strict";s.r(a);var i=s(17),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-可视化管理-webmin和bt运维工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-可视化管理-webmin和bt运维工具"}},[t._v("#")]),t._v(" Linux 可视化管理-webmin和bt运维工具")]),t._v(" "),s("h2",{attrs:{id:"webmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webmin"}},[t._v("#")]),t._v(" webmin")]),t._v(" "),s("h3",{attrs:{id:"基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("p",[t._v("Webmin是功能强大的基于Web的Unix/linux系统管理工具。管理员通过浏览器访问Webmin的各种管理功能并完成相应的管理操作。除了各版本的linux以外还可用于: AIX、 HPUX、Solaris、 Unixware、Irix 和FreeBSD等系统")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/22/01.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"安装webmin-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装webmin-配置"}},[t._v("#")]),t._v(" 安装webmin&配置")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"http://download.webmin.com/download/yum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),s("OutboundLink")],1),t._v(",用下载工具下载即可")]),t._v(" "),s("p",[t._v("也可以使用wget http://download. webmin.com/download/yum/webmin-1.700-1.noarch.rpm")])]),t._v(" "),s("li",[s("p",[t._v("安装:"),s("strong",[t._v("rpm -ivh webmin-1.700-1.noarch.rpm")])])]),t._v(" "),s("li",[s("p",[t._v("重置密码 "),s("strong",[t._v("/usr/libexec/webmin/changepass.pl /etc/webmin root 123")])])]),t._v(" "),s("li",[s("p",[t._v("修改webmin服务的端口号(默认是10000出于安全目的)")]),t._v(" "),s("p",[s("strong",[t._v("vim /etc/webmin/miniserv .conf")]),t._v(" #修改端口")])]),t._v(" "),s("li",[s("p",[t._v("将port= 10000修改为其他端口号，如port=6666")])]),t._v(" "),s("li",[s("p",[t._v("重启webmin")]),t._v(" "),s("p",[s("strong",[t._v("/etc/webmin/restart")]),t._v("#重启")]),t._v(" "),s("p",[s("strong",[t._v("/etc/webmin/start")]),t._v("#启动")]),t._v(" "),s("p",[s("strong",[t._v("/etc/webmin/stop")]),t._v("#停止")])]),t._v(" "),s("li",[s("p",[t._v("防火墙打开端口6666端口")]),t._v(" "),s("p",[s("strong",[t._v("firewall-cmd --zone=public --add-port=6666/tcp --permanent")]),t._v(" #配置防火墙开放6666端口")]),t._v(" "),s("p",[s("strong",[t._v("firewall-cmd --reload")]),t._v(" #更新防火墙配置")]),t._v(" "),s("p",[s("strong",[t._v("firewall-cmd --zone=public --list-ports")]),t._v("#查看已经开放的端口号")])]),t._v(" "),s("li",[s("p",[t._v("登录webmin")]),t._v(" "),s("p",[t._v("http:ip:6666可以访问了")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/22/02.png",loading:"lazy"}})])])]),t._v(" "),s("h3",{attrs:{id:"简单使用演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用演示"}},[t._v("#")]),t._v(" 简单使用演示")]),t._v(" "),s("p",[t._v("修改语言设置，IP访问控制，查看进程，修改密码，任务调度，mysql等")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"03","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/22/03.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"bt-宝塔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bt-宝塔"}},[t._v("#")]),t._v(" bt(宝塔)")]),t._v(" "),s("h3",{attrs:{id:"基本介绍-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-2"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("p",[t._v("bt宝塔Linux面板是提升运维效率的服务器管理软件，支持一键 LAMP/LNMP/集群/监控/网站/FTP/数据库/JAVA等多项服务器管理功能。")]),t._v(" "),s("h3",{attrs:{id:"安装和使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[t._v("#")]),t._v(" 安装和使用")]),t._v(" "),s("ol",[s("li",[t._v("安装:"),s("strong",[t._v("yum install -y wget && wget -O install. sh http://download.bt. cn/install/install_6.0.sh && sh install.sh")])]),t._v(" "),s("li",[t._v("安装成功后控制台会显示登录地址，账户密码，复制浏览器打开登录")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"04","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/22/04.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"使用介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用介绍"}},[t._v("#")]),t._v(" 使用介绍")]),t._v(" "),s("p",[t._v("可以登录终端，配置，快捷安转运行环境和系统工具，添加计划任务脚本等")]),t._v(" "),s("h3",{attrs:{id:"如果bt的用户名-密码忘记了-使用bt-default-可以查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果bt的用户名-密码忘记了-使用bt-default-可以查看"}},[t._v("#")]),t._v(" 如果bt的用户名，密码忘记了，使用bt default 可以查看")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"05","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/22/05.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);
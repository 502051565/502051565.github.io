(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1404:function(t,a,s){"use strict";s.r(a);var i=s(17),n=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"idea-集成git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-集成git"}},[t._v("#")]),t._v(" IDEA 集成Git")]),t._v(" "),s("h2",{attrs:{id:"配置-git-忽略文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git-忽略文件"}},[t._v("#")]),t._v(" 配置 Git 忽略文件")]),t._v(" "),s("ol",[s("li",[t._v("Eclipse 特定文件")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/01.png",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("IDEA 特定文件")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/02.png",loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Maven 工程的 target 目录")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"03","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/03.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("问题 1:为什么要忽略他们？")]),t._v(" "),s("p",[t._v("答：与项目的实际功能无关，不参与服务器上部署运行。把它们忽略掉能够屏蔽 IDE 工具之间的差异。")]),t._v(" "),s("p",[t._v("问题 2：怎么忽略？")]),t._v(" "),s("p",[t._v("创建忽略规则文件 "),s("font",{attrs:{color:"##dd0000"}},[t._v("xxxx.ignore（前缀名随便起，建议是 git.ignore）")])],1),t._v(" "),s("p",[t._v("这个文件的存放位置原则上在哪里都可以，为了便于让~/.gitconfig 文件引用，建议也放在用户家目录下")]),t._v(" "),s("p",[t._v("git.ignore 文件模版内容如下：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compiled class file")]),t._v("\n*.class\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log file")]),t._v("\n*.log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BlueJ files")]),t._v("\n*.ctxt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mobile Tools for Java (J2ME)")]),t._v("\n.mtj.tmp/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Package Files #")]),t._v("\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# virtual machine crash logs, see ")]),t._v("\nhttp://www.java.com/en/download/help/error_hotspot.xml\nhs_err_pid*\n.classpath\n.project\n.settings\ntarget\n.idea\n*.iml\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在.gitconfig 文件中引用忽略配置文件（此文件在 Windows 的家目录中）")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Layne\nemail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Layne@atguigu.com\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nexcludesfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" C:/Users/asus/git.ignore\n注意：这里要使用“正斜线（/）”，不要使用“反斜线（"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"定位-git-程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位-git-程序"}},[t._v("#")]),t._v(" 定位 Git 程序")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"04","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/04.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"初始化本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地库"}},[t._v("#")]),t._v(" 初始化本地库")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"05","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/05.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("选择要创建 Git 本地仓库的工程。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"06","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/06.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"添加到暂存区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加到暂存区"}},[t._v("#")]),t._v(" 添加到暂存区")]),t._v(" "),s("p",[t._v("右键点击项目选择 Git -> Add 将项目添加到暂存区。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"07","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/07.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"提交到本地库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交到本地库"}},[t._v("#")]),t._v(" 提交到本地库")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"08","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/08.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"09","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/09.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"切换版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换版本"}},[t._v("#")]),t._v(" 切换版本")]),t._v(" "),s("p",[t._v("在 IDEA 的左下角，点击 Git，然后点击 Log 查看版本")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"10","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/10.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("右键选择要切换的版本，然后在菜单里点击 Checkout Revision。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"11","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/11.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),s("p",[t._v("选择 Git，点击 Branches 按钮。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"12","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/12.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"13","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/13.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("然后再 IDEA 的右下角看到 hot-fix，说明分支创建成功，并且当前已经切换成 hot-fix 分支")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"14","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/14.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[t._v("#")]),t._v(" 切换分支")]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，切换到 master 分支")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"15","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/15.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("然后在 IDEA 窗口的右下角看到了 master，说明 master 分支切换成功。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"16","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/16.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),s("p",[t._v("在 IDEA 窗口的右下角，将 hot-fix 分支合并到当前 master 分支。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"17","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/17.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("如果代码没有冲突，分支直接合并成功，分支合并成功以后，代码自动提交，无需手动提交本地库。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"18","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/18.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[t._v("#")]),t._v(" 解决冲突")]),t._v(" "),s("p",[t._v("如图所示，如果 master 分支和 hot-fix 分支都修改了代码，在合并分支的时候就会发生冲突。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"19","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/19.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"20","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/20.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("我们现在站在 master 分支上合并 hot-fix 分支，就会发生代码冲突。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"21","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/21.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("点击 Conflicts 框里的 Merge 按钮，进行手动合并代码。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"22","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/22.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("代码冲突解决，自动提交本地库。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"23","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/23.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"24","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/06/24.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
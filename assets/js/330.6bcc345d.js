(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1402:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-分支操作"}},[s._v("#")]),s._v(" Git 分支操作")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是分支"}},[s._v("什么是分支")])]),a("li",[a("a",{attrs:{href:"#分支的好处"}},[s._v("分支的好处")])]),a("li",[a("a",{attrs:{href:"#分支的操作"}},[s._v("分支的操作")]),a("ul",[a("li",[a("a",{attrs:{href:"#查看分支"}},[s._v("查看分支")])]),a("li",[a("a",{attrs:{href:"#创建分支"}},[s._v("创建分支")])]),a("li",[a("a",{attrs:{href:"#修改分支"}},[s._v("修改分支")])]),a("li",[a("a",{attrs:{href:"#切换分支"}},[s._v("切换分支")])]),a("li",[a("a",{attrs:{href:"#合并分支"}},[s._v("合并分支")])]),a("li",[a("a",{attrs:{href:"#产生冲突"}},[s._v("产生冲突")])]),a("li",[a("a",{attrs:{href:"#解决冲突"}},[s._v("解决冲突")])])])]),a("li",[a("a",{attrs:{href:"#创建分支和切换分支图解"}},[s._v("创建分支和切换分支图解")])])])]),a("p"),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/04/02.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"什么是分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是分支"}},[s._v("#")]),s._v(" 什么是分支")]),s._v(" "),a("p",[s._v("在版本控制过程中，同时推进多个任务，为每个任务，我们就可以创建每个任务的单独分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时候，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（"),a("strong",[s._v("分支底层其实也是指针的引用")]),s._v("）")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"03","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/04/03.png",loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"分支的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支的好处"}},[s._v("#")]),s._v(" 分支的好处")]),s._v(" "),a("p",[s._v("同时并行推进多个功能开发，提高开发效率。")]),s._v(" "),a("p",[s._v("各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。")]),s._v(" "),a("h2",{attrs:{id:"分支的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支的操作"}},[s._v("#")]),s._v(" 分支的操作")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令名称")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[s._v("git branch 分支名")])]),s._v(" "),a("td",[s._v("创建分支")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("git branch -v")])]),s._v(" "),a("td",[s._v("查看分支")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("git checkout 分支名")])]),s._v(" "),a("td",[s._v("切换分支")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("git merge 分支名")])]),s._v(" "),a("td",[s._v("把指定的分支合并到当前分支上")])])])]),s._v(" "),a("h3",{attrs:{id:"查看分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[s._v("#")]),s._v(" 查看分支")]),s._v(" "),a("ol",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[a("font",{attrs:{color:"##dd0000"}},[s._v("git branch -v")])],1),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("案例实操")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n* master 0765edd my second commit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"创建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[s._v("#")]),s._v(" 创建分支")]),s._v(" "),a("ol",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[a("font",{attrs:{color:"##dd0000"}},[s._v("git branch 分支名")])],1),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("案例实操")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch hot-fix\n\nDELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n  hot-fix 0765edd my second （刚创建的新的分支，并将主分支 master的内容复制了一份）\n* master  0765edd my second commit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"修改分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改分支"}},[s._v("#")]),s._v(" 修改分支")]),s._v(" "),a("ul",[a("li",[s._v("在master分支上做修改")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("添加暂存区")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("提交本地库")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my third commit"')]),s._v(" hello.txt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 019a8dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" my third commit\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查看分支")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v\n  hot-fix 0765edd my second commit（hot-fix 分支并未做任何改变）\n* master  019a8dd my third commit（当前 master 分支已更新为最新一次提交的版本）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查看master分支上的文件内容")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi master分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),a("ol",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[a("font",{attrs:{color:"##dd0000"}},[s._v("git checkout 分支名")])],1),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("案例实操")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout hot-fix\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hot-fix'")]),s._v("\nDELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("查看 hot-fix 分支上的文件内容发现与 master 分支上的内容不同")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("在 hot-fix 分支上做修改")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hello.txt\n\nDELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi hot-fix 分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("添加到暂存区")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("提交到本地库")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hot-fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hot-fix commit"')]),s._v(" hello.txt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hot-fix 4031a66"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" hot-fix commit\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),a("ol",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[a("font",{attrs:{color:"##dd0000"}},[s._v("git merge 分支名")])],1),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("案例实操")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge hot-fix\nAuto-merging hello.txt\nCONFLICT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Merge conflict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" hello.txt\nAutomatic merge failed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" commit the result.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"产生冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生冲突"}},[s._v("#")]),s._v(" 产生冲突")]),s._v(" "),a("p",[s._v("冲突产生的表现：后面状态为 "),a("strong",[s._v("MERGING")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HEAD\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi master分支\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi hot-fix 分支\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hot-fix\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[s._v("冲突产生的原因\n"),a("ul",[a("li",[s._v("合并分支时，两个分支在"),a("font",{attrs:{color:"##dd0000"}},[s._v("同一个文件的同一个位置")]),s._v("有两套完全不同的修改。Git 无法替我们决定使用哪一个。必须"),a("font",{attrs:{color:"#dd0000"}},[s._v("人为决定")]),s._v("新代码内容。")],1)])])]),s._v(" "),a("p",[s._v("查看状态（检测到有文件有两处修改）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nYou have unmerged paths.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fix conflicts and run "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git merge --abort"')]),s._v(" to abort the merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nUnmerged paths:\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to mark resolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        both modified:   hello.txt\n\nno changes added to commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[s._v("#")]),s._v(" 解决冲突")]),s._v(" "),a("ol",[a("li",[s._v("编辑有冲突的文件，删除特殊符号，决定要使用的内容")])]),s._v(" "),a("p",[s._v("特殊符号："),a("font",{attrs:{color:"##dd0000"}},[s._v("<<<<<<< HEAD")]),s._v(" 当前分支的代码 "),a("font",{attrs:{color:"##dd0000"}},[s._v("=======")]),s._v(" 合并过来的代码 "),a("font",{attrs:{color:"##dd0000"}},[s._v(">>>>>>> hot-fix")])],1),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" hello.txt\n\nDELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" hello.txt\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi master分支\nhello git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" hi hot-fix分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("合并分支会修改当前的分支(例如master)，不会修改hot-fix分支")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加到暂存区")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("执行提交（注意：此时使用 git commit 命令时"),a("font",{attrs:{color:"##dd0000"}},[s._v("不能带文件名")]),s._v("）")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("DELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("MERGING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge hot-fix"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 742c681"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" merge hot-fix\n\nDELL@FRXcomputer MINGW64 /d/git-Space "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("发现后面 MERGING 消失，变为正常")]),s._v(" "),a("h2",{attrs:{id:"创建分支和切换分支图解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支和切换分支图解"}},[s._v("#")]),s._v(" 创建分支和切换分支图解")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Git/images/04/01.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("master、hot-fix 其实都是指向具体版本记录的指针。当前所在的分支，其实是由 HEAD决定的。所以创建分支的本质就是多创建一个指针。")]),s._v(" "),a("p",[s._v("HEAD 如果指向 master，那么我们现在就在 master 分支上。")]),s._v(" "),a("p",[s._v("HEAD 如果执行 hotfix，那么我们现在就在 hotfix 分支上。")]),s._v(" "),a("p",[s._v("所以切换分支的本质就是移动 HEAD 指针。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
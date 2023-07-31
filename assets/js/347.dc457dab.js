(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1419:function(t,a,s){"use strict";s.r(a);var r=s(17),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-备份与恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-备份与恢复"}},[t._v("#")]),t._v(" Linux 备份与恢复")]),t._v(" "),s("h2",{attrs:{id:"基本介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("p",[t._v("实体机无法做快照，如果系统出现异常或者数据损坏，后果严重，要重做系统， 还会造成数据丢失。所以我们可以使用备份和恢复技术")]),t._v(" "),s("p",[t._v("linux的备份和恢复很简单，有两种方式:")]),t._v(" "),s("ol",[s("li",[t._v("把需要的文件(或者分区)用TAR打包就行，下次需要恢复的时候，再解压开覆盖即可")]),t._v(" "),s("li",[t._v("使用"),s("strong",[t._v("dump")]),t._v("和"),s("strong",[t._v("restore")]),t._v("命令")]),t._v(" "),s("li",[t._v("示意图")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"01","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/01.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"安装dump和restore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装dump和restore"}},[t._v("#")]),t._v(" 安装dump和restore")]),t._v(" "),s("p",[t._v("如果linux.上没有dump和restore指令，需要先按照")]),t._v(" "),s("p",[s("strong",[t._v("yum -y install dump")])]),t._v(" "),s("p",[s("strong",[t._v("yum -y install restore")])]),t._v(" "),s("h2",{attrs:{id:"使用dump完成备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用dump完成备份"}},[t._v("#")]),t._v(" 使用dump完成备份")]),t._v(" "),s("h3",{attrs:{id:"基本介绍-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-2"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("p",[t._v("dump支持分卷和增量备份(所谓增量备份是指备份上次备份后修改/增加过的文件，也称差异备份)")]),t._v(" "),s("h3",{attrs:{id:"dump语法说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dump语法说明"}},[t._v("#")]),t._v(" dump语法说明")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("dump [ -cu] [-123456789] [-f<备份后文件名>] [-T<日期>] [ 目录或文件系统]")]),t._v(" "),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("dump []-wW")])],1),t._v(" "),s("p",[s("strong",[t._v("-c")]),t._v(":创建新的归档文件，并将由-一个或多个文件参数所指定的内容写入归档文件的开头。")]),t._v(" "),s("p",[s("strong",[t._v("-0123456789")]),t._v(":备份的层级。0为最完整备份，会备份所有文件。若指定0以上的层级，则备份至上一次备份以来修改或新增的文件,到9后，可以再次轮替.")]),t._v(" "),s("p",[s("strong",[t._v("-f")]),t._v("<备份后文件名>:指定备份后文件名")]),t._v(" "),s("p",[s("strong",[t._v("-j")]),t._v(":调用bzlib 库压缩备份文件，也就是将备份后的文件压缩成bz2格式，让文件更小")]),t._v(" "),s("p",[s("strong",[t._v("-T<日期>")]),t._v(":指定开始备份的时间与日期")]),t._v(" "),s("p",[s("strong",[t._v("-u")]),t._v(":备份完毕后，在**/etc/dumpdares** 中记录备份的文件系统，层级，日期与时间等。")]),t._v(" "),s("p",[s("strong",[t._v("-t")]),t._v(":指定文件名，若该文件已存在备份文件中，则列出名称")]),t._v(" "),s("p",[s("strong",[t._v("-W")]),t._v(":显示需要备份的文件及其最后- .次备份的层级，时间，日期。")]),t._v(" "),s("p",[s("strong",[t._v("-w")]),t._v(":与-W类似，但仅显示需要备份的文件。")]),t._v(" "),s("h3",{attrs:{id:"dump-应用实例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dump-应用实例1"}},[t._v("#")]),t._v(" dump 应用实例1")]),t._v(" "),s("blockquote",[s("p",[t._v("将/boot分区所有内容备份到/opt/boot.bak0.bz2文件中，备份层级为“0”")]),t._v(" "),s("p",[t._v("dump -0uj -f /optboot.bak0.bz2  /boot")])]),t._v(" "),s("h3",{attrs:{id:"dump-应用实例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dump-应用实例2"}},[t._v("#")]),t._v(" dump 应用实例2")]),t._v(" "),s("blockquote",[s("p",[t._v("在/boot目录下增加新文件，备份层级为“1” (只备份上次使用层次“0”备份后发生过改变的数据)，注意比较看看这次生成的备份文件bootl.bak 有多大")]),t._v(" "),s("p",[t._v("dump -1uj -f /opt/boot.bak1.bz2 /boot")]),t._v(" "),s("p",[t._v("提醒:通过dump命令在配合crontab 可以实现无人值守备份")])]),t._v(" "),s("h3",{attrs:{id:"dump-w"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dump-w"}},[t._v("#")]),t._v(" dump -W")]),t._v(" "),s("p",[t._v("显示需要备份的文件及其最后一次备份的层级，时间，日期")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"02","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/02.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"查看备份时间文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看备份时间文件"}},[t._v("#")]),t._v(" 查看备份时间文件")]),t._v(" "),s("p",[s("strong",[t._v("cat /etc/dumpdates")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"03","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/03.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"dump备份文件或者目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dump备份文件或者目录"}},[t._v("#")]),t._v(" dump备份文件或者目录")]),t._v(" "),s("p",[t._v("前面我们在备份分区时，是可以支持增量备份的，如果备份文件或者目录，不再支持增量备份,即只能使用0级别备份")]),t._v(" "),s("blockquote",[s("p",[t._v("案例，使用 dump备份/etc 整个目录")]),t._v(" "),s("p",[t._v("dump -0j -f /opt/etc.bak.bz2 /etc/")]),t._v(" "),s("p",[t._v("#下面这条语句会报错，提示DUMP: Only level 0 dumps are allowed on a subdirectory")]),t._v(" "),s("p",[t._v("dump -1j -f /opt/etc.bak.bz2 /etc/")])]),t._v(" "),s("h3",{attrs:{id:"提醒"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提醒"}},[t._v("#")]),t._v(" 提醒")]),t._v(" "),s("p",[t._v("如果是重要的备份文件，比如数据区， 建议将文件上传到其它服务 器保存，"),s("strong",[t._v("不要将鸡蛋放在同在一个篮子")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"使用restore完成恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用restore完成恢复"}},[t._v("#")]),t._v(" 使用restore完成恢复")]),t._v(" "),s("h3",{attrs:{id:"基本介绍-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍-3"}},[t._v("#")]),t._v(" 基本介绍")]),t._v(" "),s("p",[t._v("restore命令用来恢复已备份的文件，可以从dump生成的备份文件中恢复原文件")]),t._v(" "),s("h3",{attrs:{id:"restore基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restore基本语法"}},[t._v("#")]),t._v(" restore基本语法")]),t._v(" "),s("p",[s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("restore [模式选项] [选项]")])],1),t._v(" "),s("p",[t._v("说明下面四个模式，不能混用， 在一次命令中，只 能指定一种。")]),t._v(" "),s("p",[s("strong",[t._v("-C")]),t._v(" :使用对比模式，将备份的文件与已存在的文件相互对比。\n"),s("strong",[t._v("-i")]),t._v(":使用交互模式，在进行还原操作时，restore指令将依序询问用户\n"),s("strong",[t._v("-r")]),t._v(":进行还原模式\n"),s("strong",[t._v("-t")]),t._v(":查看模式，看备份文件有哪些文件")]),t._v(" "),s("p",[t._v("选项")]),t._v(" "),s("p",[s("strong",[t._v("-f<备份设备>")]),t._v(":从指定的文件中读取备份数据，进行还原操作")]),t._v(" "),s("h3",{attrs:{id:"应用案例1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用案例1"}},[t._v("#")]),t._v(" 应用案例1")]),t._v(" "),s("p",[t._v("restore命令比较模式，比较备份文件和原文件的区别\n测试.")]),t._v(" "),s("blockquote",[s("p",[t._v("mv  /boot/hello.java  /boot/hello100.java")]),t._v(" "),s("p",[t._v("restore -C -f boot.bak1.bz2  //注意和最新的文件比较")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"04","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/04.png",loading:"lazy"}})]),t._v(" "),s("blockquote",[s("p",[t._v("mv /boot/hello100.java /boot/hello.java")]),t._v(" "),s("p",[t._v("restore -C -f boot.bak1.bz2")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"05","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/05.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"应用案例2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用案例2"}},[t._v("#")]),t._v(" 应用案例2")]),t._v(" "),s("p",[t._v("restore命令查看模式，看备份文件有哪些数据/文件")]),t._v(" "),s("blockquote",[s("p",[t._v("restore -t -f boot.bak0.bz2")])]),t._v(" "),s("h3",{attrs:{id:"应用案例3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用案例3"}},[t._v("#")]),t._v(" 应用案例3")]),t._v(" "),s("p",[t._v("restore命令还原模式，注意细节:如果你有增量备 份，需要把增量备份文件也进行恢复，有几个增量备 份文件，就要恢复几个，按顺序来恢复即可。.")]),t._v(" "),s("p",[t._v("测试")]),t._v(" "),s("blockquote",[s("p",[t._v("mkdir /opt/boottmp")]),t._v(" "),s("p",[t._v("cd /opt/boottmp")]),t._v(" "),s("p",[t._v("restore -r -f /opt/boot.bak0.bz2 //恢复到第1次完全备份状态")]),t._v(" "),s("p",[t._v("restore -r -f /opt/boot.bak1.bz2 //恢复到第2次增量备份状态")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"06","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/06.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"应用案例4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用案例4"}},[t._v("#")]),t._v(" 应用案例4")]),t._v(" "),s("p",[t._v("restore命令恢复备份的文件，或者整个目录的文件")]),t._v(" "),s("p",[t._v("基本语法:"),s("font",{attrs:{color:"#DC4040",size:"4",face:"黑体"}},[t._v("restore -r -f 备份好的文件")])],1),t._v(" "),s("p",[t._v("测试")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"07","data-src":"https://cdn.staticaly.com/gh/xustudyxu/image-hosting@master/studynotes/Linux/images/21/07.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1129:function(t,a,s){"use strict";s.r(a);var n=s(17),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-压力测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-压力测试"}},[t._v("#")]),t._v(" 1. 压力测试")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、jmeter"}},[t._v("1、Jmeter")])]),n("li",[n("a",{attrs:{href:"#_2-jconsole与jvisualvm"}},[t._v("2.jconsole与jvisualvm")])]),n("li",[n("a",{attrs:{href:"#_3-优化"}},[t._v("3.优化")])]),n("li",[n("a",{attrs:{href:"#_4-nginx动静分离"}},[t._v("4.Nginx动静分离")])]),n("li",[n("a",{attrs:{href:"#_5-优化三级分类"}},[t._v("5.优化三级分类")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"_1、jmeter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、jmeter"}},[t._v("#")]),t._v(" 1、Jmeter")]),t._v(" "),n("p",[t._v("1.下载解压")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("https://jmeter.apache.org/download_jmeter.cgi\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129101834273","data-src":s(783),loading:"lazy"}})]),t._v(" "),n("p",[t._v("2.启动")]),t._v(" "),n("p",[t._v("点击bin文件夹下的jmeter.bat")]),t._v(" "),n("p",[t._v("3.改成中文显示")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129102620938","data-src":s(784),loading:"lazy"}})]),t._v(" "),n("p",[t._v("4.添加线程组")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129102735541","data-src":s(785),loading:"lazy"}})]),t._v(" "),n("p",[t._v("5.添加取样器")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129102906556","data-src":s(786),loading:"lazy"}})]),t._v(" "),n("p",[t._v("6.添加监听器(可以选择不同的监听器，用来展示不同的结果，通常使用前三个)")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129103035915","data-src":s(787),loading:"lazy"}})]),t._v(" "),n("p",[t._v("7.保存")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129103356388","data-src":s(788),loading:"lazy"}})]),t._v(" "),n("p",[t._v("8.向baidu发送请求")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129103718456","data-src":s(789),loading:"lazy"}})]),t._v(" "),n("p",[t._v("9.分析请求结果，并且可以保存结果")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129103814996","data-src":s(790),loading:"lazy"}})]),t._v(" "),n("h2",{attrs:{id:"_2-jconsole与jvisualvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-jconsole与jvisualvm"}},[t._v("#")]),t._v(" 2.jconsole与jvisualvm")]),t._v(" "),n("p",[t._v("Jdk 的两个小工具 jconsole、jvisualvm（升级版的 jconsole）;通过命令行启动，可监控本地和")]),t._v(" "),n("p",[t._v("远程应用。远程应用需要配置")]),t._v(" "),n("h2",{attrs:{id:"_3-优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-优化"}},[t._v("#")]),t._v(" 3.优化")]),t._v(" "),n("p",[t._v("SQL耗时越小越好，")]),t._v(" "),n("p",[t._v("一般情况下微秒级别 命中率越高越好，")]),t._v(" "),n("p",[t._v("一般情况下不能低于95% 锁等待次数越低越好，")]),t._v(" "),n("p",[t._v("等待时间越短越好 中间件越多，")]),t._v(" "),n("p",[t._v("性能损失越大，大多都损失在网络交互了")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"image-20221129111920667","data-src":s(791),loading:"lazy"}})]),t._v(" "),n("h2",{attrs:{id:"_4-nginx动静分离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-nginx动静分离"}},[t._v("#")]),t._v(" 4.Nginx动静分离")]),t._v(" "),n("p",[t._v("由于动态资源和静态资源目前都处于服务端，所以为了减轻服务器压力，我们将\njs、css、img等静态资源放置在Nginx端，以减轻服务器压力")]),t._v(" "),n("p",[t._v("静态文件上传到 mydata/nginx/html/static/index/css，这种格式")]),t._v(" "),n("p",[t._v('修改index.html的静态资源路径，加上static前缀src="/static/index/img/img_09.png"')]),t._v(" "),n("p",[t._v("修改/mydata/nginx/conf/conf.d/gulimall.conf")]),t._v(" "),n("p",[t._v("如果遇到有/static为前缀的请求，转发至html文件夹")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("location /static "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里配置的是docker里面的nginx的路径")]),t._v("\n     root   /usr/share/nginx/html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     proxy_pass http://gulimall"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tproxy_set_header Host "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h2",{attrs:{id:"_5-优化三级分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-优化三级分类"}},[t._v("#")]),t._v(" 5.优化三级分类")]),t._v(" "),n("p",[t._v("优化前 对二级菜单的每次遍历都需要查询数据库，浪费大量资源")]),t._v(" "),n("p",[t._v("优化后 仅查询一次数据库，剩下的数据通过遍历得到并封装  //优化业务逻辑，仅查询一次数据库")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v(" List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CategoryEntity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" categoryEntities "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" this.list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        //查出所有一级分类\n        List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CategoryEntity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" level1Categories "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getCategoryByParentCid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("categoryEntities, 0L"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Map"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String, List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Catalog2Vo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" listMap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" level1Categories.stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".collect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collectors.toMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k-"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("k.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),t._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            //遍历查找出二级分类\n            List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CategoryEntity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" level2Categories "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getCategoryByParentCid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("categoryEntities, v.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Catalog2Vo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("catalog2Vos")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level2Categories"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                //封装二级分类到vo并且查出其中的三级分类\n                catalog2Vos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" level2Categories.stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cat -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    //遍历查出三级分类并封装\n                    List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CategoryEntity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" level3Catagories "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getCategoryByParentCid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("categoryEntities, cat.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Catalog2Vo.Catalog3Vo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" catalog3Vos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level3Catagories "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        catalog3Vos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" level3Catagories.stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                .map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level3 -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" new Catalog2Vo.Catalog3Vo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level3.getParentCid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", level3.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", level3.getName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                .collect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collectors.toList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    Catalog2Vo catalog2Vo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Catalog2Vo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cat.getCatId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".toString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", cat.getName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", catalog3Vos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" catalog2Vo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".collect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collectors.toList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" catalog2Vos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" listMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports},783:function(t,a,s){t.exports=s.p+"assets/img/image-20221129101834273.244f4f0a.png"},784:function(t,a,s){t.exports=s.p+"assets/img/image-20221129102620938.4c99792e.png"},785:function(t,a,s){t.exports=s.p+"assets/img/image-20221129102735541.a8642d76.png"},786:function(t,a,s){t.exports=s.p+"assets/img/image-20221129102906556.e7f97c6f.png"},787:function(t,a,s){t.exports=s.p+"assets/img/image-20221129103035915.473b9fb2.png"},788:function(t,a,s){t.exports=s.p+"assets/img/image-20221129103356388.3c518ac5.png"},789:function(t,a,s){t.exports=s.p+"assets/img/image-20221129103718456.cbc33b09.png"},790:function(t,a,s){t.exports=s.p+"assets/img/image-20221129103814996.a84f75ba.png"},791:function(t,a,s){t.exports=s.p+"assets/img/image-20221129111920667.7af64243.png"}}]);
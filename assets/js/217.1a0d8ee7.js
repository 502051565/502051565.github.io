(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1274:function(t,s,a){"use strict";a.r(s);var e=a(17),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hbase数据定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase数据定义"}},[t._v("#")]),t._v(" HBase数据定义")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#hbase-shell"}},[t._v("HBase Shell")])]),a("li",[a("a",{attrs:{href:"#数据定义"}},[t._v("数据定义")])]),a("li",[a("a",{attrs:{href:"#创建表"}},[t._v("创建表")])]),a("li",[a("a",{attrs:{href:"#表相关操作"}},[t._v("表相关操作")]),a("ul",[a("li",[a("a",{attrs:{href:"#查看某个表是否存在"}},[t._v("查看某个表是否存在")])]),a("li",[a("a",{attrs:{href:"#查看当前hbase所有的表名"}},[t._v("查看当前HBase所有的表名")])]),a("li",[a("a",{attrs:{href:"#查看选定表的列族及其参数"}},[t._v("查看选定表的列族及其参数")])]),a("li",[a("a",{attrs:{href:"#修改表结构"}},[t._v("修改表结构")])]),a("li",[a("a",{attrs:{href:"#删除表"}},[t._v("删除表")])]),a("li",[a("a",{attrs:{href:"#清空数据"}},[t._v("清空数据")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"hbase-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase-shell"}},[t._v("#")]),t._v(" HBase Shell")]),t._v(" "),a("p",[t._v("HBase Shell：HBase的命令行工具，最简单的接口，适合HBase管理使用；")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hbase shell")]),t._v("\nHBase Shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" enter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'help<RETURN>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" list of supported commands.\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exit<RETURN>"')]),t._v(" to leave the HBase Shell\nVersion "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(".6, rUnknown, Mon May "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" 02:25:32 CDT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v("\nhbase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":001:"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("语法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("help")]),t._v(" "),a("td",[t._v("查看命令的使用描述")]),t._v(" "),a("td",[t._v("help '命令名'")])]),t._v(" "),a("tr",[a("td",[t._v("whoami")]),t._v(" "),a("td",[t._v("我是谁")]),t._v(" "),a("td",[t._v("whoami")])]),t._v(" "),a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("返回hbase版本的信息")]),t._v(" "),a("td",[t._v("version")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("返回hbase集群的状态信息")]),t._v(" "),a("td",[t._v("status")])]),t._v(" "),a("tr",[a("td",[t._v("table_help")]),t._v(" "),a("td",[t._v("查看如何操作表")]),t._v(" "),a("td",[t._v("table_help")])]),t._v(" "),a("tr",[a("td",[t._v("shutdown")]),t._v(" "),a("td",[t._v("关闭hbase集群(与exit不同)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("tools")]),t._v(" "),a("td",[t._v("列出hbase所支持的工具")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("exit")]),t._v(" "),a("td",[t._v("推出hbase shell")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"数据定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据定义"}},[t._v("#")]),t._v(" 数据定义")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("create")]),t._v(" "),a("td",[t._v("创建指定模式的新表")])]),t._v(" "),a("tr",[a("td",[t._v("alter")]),t._v(" "),a("td",[t._v("修改表的结构，如添加新的列族")])]),t._v(" "),a("tr",[a("td",[t._v("describe")]),t._v(" "),a("td",[t._v("展示表结构的信息，包括列族的数量与属性")])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("列出HBase中已有的表")])]),t._v(" "),a("tr",[a("td",[t._v("disable/enable")]),t._v(" "),a("td",[t._v("删除或更改表时，需禁用表，更改完后需要解禁表")])]),t._v(" "),a("tr",[a("td",[t._v("disable_all")]),t._v(" "),a("td",[t._v("禁用所有的表")])]),t._v(" "),a("tr",[a("td",[t._v("is_disabled")]),t._v(" "),a("td",[t._v("判断一个表是否被禁用")])]),t._v(" "),a("tr",[a("td",[t._v("drop")]),t._v(" "),a("td",[t._v("删除表")])]),t._v(" "),a("tr",[a("td",[t._v("truncate")]),t._v(" "),a("td",[t._v("如果只是想删除数据而不是表结构，用truncate来禁用表、删除表并自动重建表结构")])])])]),t._v(" "),a("h2",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[t._v("#")]),t._v(" 创建表")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("create    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表名'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'列族名'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("描述")]),t._v(" "),a("ul",[a("li",[t._v("必须指定表名和列族；")]),t._v(" "),a("li",[t._v("可以创建多个列族")]),t._v(" "),a("li",[t._v("列可在插入数据时直接定义")]),t._v(" "),a("li",[t._v("可以对表和列族指明一些参数")]),t._v(" "),a("li",[t._v("参数大小写敏感")]),t._v(" "),a("li",[t._v("字符串参数需要包含在单引号中")])])]),t._v(" "),a("li",[a("p",[t._v("案例演示")])])]),t._v(" "),a("blockquote",[a("p",[t._v("例1：create 'teacher','f1','f2'")]),t._v(" "),a("p",[t._v("例2：create 'teacher','f1',f2',MAX_FILESIZE=>'134217718'")]),t._v(" "),a("p",[t._v("例3：create 'teacher'，{NAME=>‘f1’,VERSIONS=>5,BLOCKCACHE=>true}")]),t._v(" "),a("p",[t._v("例4：create 'teachEr','f1','f2'")]),t._v(" "),a("p",[t._v("例5：create 'teacher','F1','f2'")]),t._v(" "),a("p",[t._v("例6：create 'teacher',‘f1','f1'")])]),t._v(" "),a("h2",{attrs:{id:"表相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表相关操作"}},[t._v("#")]),t._v(" 表相关操作")]),t._v(" "),a("h3",{attrs:{id:"查看某个表是否存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看某个表是否存在"}},[t._v("#")]),t._v(" 查看某个表是否存在")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("exists\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("Hbase(main):005:0>exists  ’teacher’")]),t._v(" "),a("p",[t._v("Table teacher does exist")]),t._v(" "),a("p",[t._v("0 row(s) in 0.2080 seconds")])]),t._v(" "),a("h3",{attrs:{id:"查看当前hbase所有的表名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前hbase所有的表名"}},[t._v("#")]),t._v(" 查看当前HBase所有的表名")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("list\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("Hbase(main):006:0>list")]),t._v(" "),a("p",[t._v("TABLE")]),t._v(" "),a("p",[t._v("teacher")]),t._v(" "),a("p",[t._v("Hbase thrift")]),t._v(" "),a("p",[t._v("Student")]),t._v(" "),a("p",[t._v("Test")]),t._v(" "),a("p",[t._v("4 row(s) in 0.0560 seconds")])]),t._v(" "),a("h3",{attrs:{id:"查看选定表的列族及其参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看选定表的列族及其参数"}},[t._v("#")]),t._v(" 查看选定表的列族及其参数")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("describe\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("hbase(main):006:0>describe ‘teacher'")]),t._v(" "),a("p",[t._v("Table teacher is ENABLED")]),t._v(" "),a("p",[t._v("tercher")]),t._v(" "),a("p",[t._v("COLUMN FAMILIES DESCRIPTION")]),t._v(" "),a("p",[t._v("{NAME => ‘f1', BLOOMFILTER => 'ROW', VERSIONS => '1', IN_MEMORY => 'false', KEEP_DE\nLETED_CELLS => 'FALSE', DATA_BLOCK_ENCODING => 'NONE', TTL => 'FOREVER', COMPRESSION =>\n'NONE', MIN_VERSIONS => '0', BLOCKCACHE => 'true', BLOCKSIZE => '65536', REPLICATION_S\nCOPE => '0'}")]),t._v(" "),a("p",[t._v("{NAME => ‘f2', BLOOMFILTER => 'ROW', VERSIONS => ‘5', IN_MEMORY => 'false', KEEP_D\nELETED_CELLS => 'FALSE', DATA_BLOCK_ENCODING => 'NONE', TTL => 'FOREVER', COMPRESSION ='NONE', MIN_VERSIONS => '0', BLOCKCACHE => ‘false', BLOCKSIZE => '65536', REPLICATION_\nSCOPE => '0'}")]),t._v(" "),a("p",[t._v("2 row(s) in 0.0340 seconds")])]),t._v(" "),a("h3",{attrs:{id:"修改表结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改表结构"}},[t._v("#")]),t._v(" 修改表结构")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("功能")]),t._v(" "),a("ul",[a("li",[t._v("修改表中列族的参数信息")]),t._v(" "),a("li",[t._v("增加列族")]),t._v(" "),a("li",[t._v("移除或删除已有的列族")])])]),t._v(" "),a("li",[a("p",[t._v("语法")])]),t._v(" "),a("li",[a("p",[t._v("添加一个列族")])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("alter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表名'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'列族名'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("删除列族")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("alter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表名'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'列族名'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("例1：alter 'teacher', {NAME => 'f1', VERSIONS => 4}")]),t._v(" "),a("p",[t._v("例2：alter  'teacher', 'f3'")]),t._v(" "),a("p",[t._v("例3：alter  'teacher', {NAME=>'f3', METHOD=>'delete'}")]),t._v(" "),a("p",[t._v("例4：alter  'teacher', 'delete' => 'f3'")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("删除列族时，表中至少有两个列族；")])]),t._v(" "),a("h3",{attrs:{id:"删除表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[t._v("#")]),t._v(" 删除表")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("disable "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'teacher'")]),t._v("\ndrop "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' teacher '")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("注意:删除表之前需要先禁用表")])]),t._v(" "),a("h3",{attrs:{id:"清空数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清空数据"}},[t._v("#")]),t._v(" 清空数据")]),t._v(" "),a("ul",[a("li",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("truncate\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("truncate 'teacher'")])])])}),[],!1,null,null,null);s.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1103:function(a,s,t){"use strict";t.r(s);var e=t(17),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mybatis篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatis篇"}},[a._v("#")]),a._v(" mybatis篇")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-什么是-mybatis"}},[a._v("1.什么是MyBatis?")])]),e("li",[e("a",{attrs:{href:"#_2-说说mybatis的优点和缺点"}},[a._v("2.说说MyBatis的优点和缺点？")])]),e("li",[e("a",{attrs:{href:"#_3-和-的区别是什么"}},[a._v("3.#{}和${}的区别是什么？")])]),e("li",[e("a",{attrs:{href:"#_4-当实体类中的属性名和表中的字段名不一样-怎么办"}},[a._v("4.当实体类中的属性名和表中的字段名不一样 ，怎么办？")])]),e("li",[e("a",{attrs:{href:"#_5-mybatis是如何进行分页的-分页插件的原理是什么"}},[a._v("5.Mybatis是如何进行分页的？分页插件的原理是什么?")])]),e("li",[e("a",{attrs:{href:"#_6-mybatis是如何将sql执行结果封装为目标对象并返回的-都有哪些映射形式"}},[a._v("6.Mybatis是如何将sql执行结果封装为目标对象并返回的？都有哪些映射形式?")])]),e("li",[e("a",{attrs:{href:"#_7-如何执行批量插入"}},[a._v("7. 如何执行批量插入?")])]),e("li",[e("a",{attrs:{href:"#_8-xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签"}},[a._v("8.Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签?")])]),e("li",[e("a",{attrs:{href:"#_9-mybatis实现一对一有几种方式-具体怎么操作的"}},[a._v("9.MyBatis实现一对一有几种方式?具体怎么操作的？")])]),e("li",[e("a",{attrs:{href:"#_10-mybatis是否支持延迟加载-如果支持-它的实现原理是什么"}},[a._v("10.Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？")])]),e("li",[e("a",{attrs:{href:"#_11-说说mybatis的缓存机制"}},[a._v("11.说说Mybatis的缓存机制？")])]),e("li",[e("a",{attrs:{href:"#_12-jdbc-编程有哪些步骤"}},[a._v("12. JDBC 编程有哪些步骤？")])]),e("li",[e("a",{attrs:{href:"#_13-mybatis中见过什么设计模式"}},[a._v("13.MyBatis中见过什么设计模式？")])]),e("li",[e("a",{attrs:{href:"#_14-mybatis-中比如-usermapper-java-是接口-为什么没有实现类还能调用"}},[a._v("14. MyBatis 中比如 UserMapper.java 是接口，为什么没有实现类还能调用？")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"_1-什么是mybatis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是mybatis"}},[a._v("#")]),a._v(" 1."),e("strong",[a._v("什么是")]),a._v("MyBatis?")]),a._v(" "),e("p",[a._v("（1）Mybatis是一个半ORM（对象关系映射）框架，它内部封装了JDBC，开发时只需要关注SQL语句本身，不需要花费精力去处理加载驱动、创建连接、创建statement等繁杂的过程。程序员直接编写原生态sql，可以严格控制sql执行性能，灵活度高。")]),a._v(" "),e("p",[a._v("（2）MyBatis 可以使用 XML 或注解来配置和映射原生信息，将 POJO映射成数据库中的记录，避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。")]),a._v(" "),e("p",[a._v("（3）通过xml 文件或注解的方式将要执行的各种 statement 配置起来，并通过java对象和statement中sql的动态参数进行映射生成最终执行的sql语句，最后由mybatis框架执行sql并将结果映射为java对象并返回。（从执行sql到返回result的过程）。")]),a._v(" "),e("h2",{attrs:{id:"_2-说说mybatis的优点和缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-说说mybatis的优点和缺点"}},[a._v("#")]),a._v(" 2."),e("strong",[a._v("说说MyBatis的优点和缺点")]),a._v("？")]),a._v(" "),e("p",[e("strong",[a._v("优点：")])]),a._v(" "),e("p",[a._v("（1）基于SQL语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任何影响，SQL写在XML里，解除sql与程序代码的耦合，便于统一管理；提供XML标签，支持编写动态SQL语句，并可重用。")]),a._v(" "),e("p",[a._v("（2）与JDBC相比，减少了50%以上的代码量，消除了JDBC大量冗余的代码，不需要手动开关连接；")]),a._v(" "),e("p",[a._v("（3）很好的与各种数据库兼容（因为MyBatis使用JDBC来连接数据库，所以只要JDBC支持的数据库MyBatis都支持）。")]),a._v(" "),e("p",[a._v("（4）能够与Spring很好的集成；")]),a._v(" "),e("p",[a._v("（5）提供映射标签，支持对象与数据库的ORM字段关系映射；提供对象关系映射标签，支持对象关系组件维护。")]),a._v(" "),e("p",[e("strong",[a._v("缺点")])]),a._v(" "),e("p",[a._v("（1）SQL语句的编写工作量较大，尤其当字段多、关联表多时，对开发人员编写SQL语句的功底有一定要求。")]),a._v(" "),e("p",[a._v("（2）SQL语句依赖于数据库，导致数据库移植性差，不能随意更换数据库。")]),a._v(" "),e("h2",{attrs:{id:"_3-和-的区别是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-和-的区别是什么"}},[a._v("#")]),a._v(" 3.#{}和${}的区别是什么？")]),a._v(" "),e("p",[a._v("#{}是预编译处理，${}是字符串替换。")]),a._v(" "),e("p",[a._v("Mybatis在处理#{}时，会将sql中的#{}替换为?号，调用PreparedStatement的set方法来赋值；")]),a._v(" "),e("p",[a._v("Mybatis在处理${}时，就是把${}替换成变量的值。")]),a._v(" "),e("p",[a._v("使用#{}可以有效的防止SQL注入，提高系统安全性。")]),a._v(" "),e("h2",{attrs:{id:"_4-当实体类中的属性名和表中的字段名不一样-怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-当实体类中的属性名和表中的字段名不一样-怎么办"}},[a._v("#")]),a._v(" 4."),e("strong",[a._v("当实体类中的属性名和表中的字段名不一样 ，怎么办")]),a._v("？")]),a._v(" "),e("p",[a._v("第1种：")]),a._v(" "),e("p",[a._v("通过在查询的sql语句中定义字段名的别名，让字段名的别名和实体类的属性名一致。")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("select")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”selectorder”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("parametertype")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”int”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("resultetype")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”me.gacl.domain.order”")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n select order_id id, order_no orderno ,order_price price form orders where\norder_id=#{id};\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("第2种： 通过来映射字段名和实体类属性名的一一对应的关系。")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("select")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("getOrder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("parameterType")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("int"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("resultMap")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("orderresultmap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n select * from orders where order_id=#{id}\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("resultMap")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”me.gacl.domain.order”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”orderresultmap”")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("!–用id属性来映射主键字段–")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("property")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”id”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("column")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”order_id”")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("!–用result属性来映射非主键字段，property为实体类属性名，column为数据表中的属性–")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("result")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("property")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v(" “orderno”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("column")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”order_no”/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("result")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("property")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”price”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("column")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”order_price”")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("reslutMap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h2",{attrs:{id:"_5-mybatis是如何进行分页的-分页插件的原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-mybatis是如何进行分页的-分页插件的原理是什么"}},[a._v("#")]),a._v(" 5.Mybatis是如何进行分页的？分页插件的原理是什么?")]),a._v(" "),e("p",[a._v("Mybatis使用RowBounds对象进行分页，它是针对ResultSet结果集执行的内存分页，而非物理分页。可以在sql内直接拼写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页，比如：MySQL数据的时候，在原有SQL后面拼写limit。")]),a._v(" "),e("p",[a._v("分页插件的基本原理是使用Mybatis提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的sql，然后重写sql，根据dialect方言，添加对应的物理分页语句和物理分页参数。")]),a._v(" "),e("h2",{attrs:{id:"_6-mybatis是如何将sql执行结果封装为目标对象并返回的-都有哪些映射形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-mybatis是如何将sql执行结果封装为目标对象并返回的-都有哪些映射形式"}},[a._v("#")]),a._v(" 6.Mybatis是如何将sql执行结果封装为目标对象并返回的？都有哪些映射形式?")]),a._v(" "),e("p",[a._v("第一种是使用标签，逐一定义数据库列名和对象属性名之间的映射关系。")]),a._v(" "),e("p",[a._v("第二种是使用sql列的别名功能，将列的别名书写为对象属性名。")]),a._v(" "),e("p",[a._v("有了列名与属性名的映射关系后，Mybatis通过反射创建对象，同时使用反射给对象的属性逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。")]),a._v(" "),e("h2",{attrs:{id:"_7-如何执行批量插入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何执行批量插入"}},[a._v("#")]),a._v(" 7. 如何执行批量插入?")]),a._v(" "),e("p",[a._v("首先,创建一个简单的insert语句:")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("insert")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),a._v("”insertname”")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n insert into names (name) values (#{value})\n "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("insert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("然后在java代码中像下面这样执行批处理插入:")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v("list"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" names = new arraylist();\n names.add(“fred”);\n names.add(“barney”);\n names.add(“betty”);\n names.add(“wilma”);\n // 注意这里 executortype.batch\n sqlsession sqlsession = sqlsessionfactory.opensession(executortype.batch);\n try {\n namemapper mapper = sqlsession.getmapper(namemapper.class);\n for (string name : names) {\n mapper.insertname(name);\n }\n sqlsession.commit();\n }catch(Exception e){\n e.printStackTrace();\n sqlSession.rollback(); \n throw e; \n }\n finally {\n sqlsession.close();\n }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br")])]),e("h2",{attrs:{id:"_8-xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-xml映射文件中-除了常见的select-insert-updae-delete标签之外-还有哪些标签"}},[a._v("#")]),a._v(" 8.Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签?")]),a._v(" "),e("p",[a._v("加上动态sql的9个标签，其中为sql片段标签，通过标签引入sql片段，为不支持自增的主键生成策略标签。")]),a._v(" "),e("h2",{attrs:{id:"_9-mybatis实现一对一有几种方式-具体怎么操作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-mybatis实现一对一有几种方式-具体怎么操作的"}},[a._v("#")]),a._v(" 9.MyBatis实现一对一有几种方式?具体怎么操作的？")]),a._v(" "),e("p",[a._v("有联合查询和嵌套查询,联合查询是几个表联合查询,只查询一次, 通过在resultMap里面配置association节点配置一对一的类就可以完成；")]),a._v(" "),e("p",[a._v("嵌套查询是先查一个表，根据这个表里面的结果的 外键id，去再另外一个表里面查询数据,也是通过association配置，但另外一个表的查询通过select属性配置。")]),a._v(" "),e("h2",{attrs:{id:"_10-mybatis是否支持延迟加载-如果支持-它的实现原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-mybatis是否支持延迟加载-如果支持-它的实现原理是什么"}},[a._v("#")]),a._v(" 10.Mybatis是否支持延迟加载？如果支持，它的实现原理是什么？")]),a._v(" "),e("p",[a._v("Mybatis仅支持association关联对象和collection关联集合对象的延迟加载，association指的就是一对一，collection指的就是一对多查询。在Mybatis配置文件中，可以配置是否启用延迟加载lazyLoadingEnabled=true|false。")]),a._v(" "),e("p",[a._v("它的原理是，使用CGLIB创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用a.getB().getName()，拦截器invoke()方法发现a.getB()是null值，那么就会单独发送事先保存好的查询关联B对象的sql，把B查询上来，然后调用a.setB(b)，于是a的对象b属性就有值了，接着完成a.getB().getName()方法的调用。这就是延迟加载的基本原理。")]),a._v(" "),e("p",[a._v("当然了，不光是Mybatis，几乎所有的包括Hibernate，支持延迟加载的原理都是一样的。")]),a._v(" "),e("h2",{attrs:{id:"_11-说说mybatis的缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-说说mybatis的缓存机制"}},[a._v("#")]),a._v(" 11.说说Mybatis的缓存机制？")]),a._v(" "),e("p",[a._v("Mybatis整体：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"image-20230524171518831","data-src":t(523),loading:"lazy"}})]),a._v(" "),e("p",[e("strong",[a._v("一级缓存localCache")])]),a._v(" "),e("p",[a._v("在应用运行过程中，我们有可能在一次数据库会话中，执行多次查询条件完全相同的 SQL，MyBatis 提供了一级缓存的方案优化这部分场景，如果是相同的 SQL 语句，会优先命中一级缓存，避免直接对数据库进行查询，提高性能。每个 SqlSession 中持有了 Executor，每个 Executor 中有一个 LocalCache。当用户发起查询时，MyBatis 根据当前执行的语句生成 MappedStatement，在 Local Cache 进行查询，如果缓存命中的话，直接返回结果给用户，如果缓存没有命中的话，查询数据库，结果写入 Local Cache，最后返回结果给用户。具体实现类的类关系图如下图所示：")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"image-20230524171601113","data-src":t(524),loading:"lazy"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("MyBatis 一级缓存的生命周期和 SqlSession 一致。")])]),a._v(" "),e("li",[e("p",[a._v("MyBatis 一级缓存内部设计简单，只是一个没有容量限定的 HashMap，在缓存的功能性上有所欠缺。")])]),a._v(" "),e("li",[e("p",[a._v("MyBatis 的一级缓存最大范围是 SqlSession 内部，有多个 SqlSession 或者分布式的环境下，数据库写操作会引起脏数据，建议设定缓存级别为 Statement。")])])]),a._v(" "),e("p",[e("strong",[a._v("二级缓存")])]),a._v(" "),e("p",[a._v("在上文中提到的一级缓存中，其最大的共享范围就是一个 SqlSession 内部，如果多个 SqlSession之间需要共享缓存，则需要使用到二级缓存。开启二级缓存后，会使用 CachingExecutor 装饰Executor，进入一级缓存的查询流程前，先在 CachingExecutor 进行二级缓存的查询，具体的工作流程如下所示。")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"image-20230524171636296","data-src":t(525),loading:"lazy"}})]),a._v(" "),e("p",[a._v("二级缓存开启后，同一个 namespace 下的所有操作语句，都影响着同一个 Cache，即二级缓存被多个 SqlSession 共享，是一个全局的变量。")]),a._v(" "),e("p",[a._v("当开启缓存后，数据的查询执行的流程为：")]),a._v(" "),e("p",[a._v("二级缓存 -> 一级缓存 -> 数据库")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("MyBatis 的二级缓存相对于一级缓存来说，实现了 SqlSession 之间缓存数据的共享，同时粒度更加细，能够到 namespace 级别，通过 Cache 接口实现类不同的组合，对 Cache 的可控性也更强。")])]),a._v(" "),e("li",[e("p",[a._v("MyBatis 在多表查询时，极大可能会出现脏数据，有设计上的缺陷，安全使用二级缓存的条件比较苛刻。")])]),a._v(" "),e("li",[e("p",[a._v("在分布式环境下，由于默认的 MyBatis Cache 实现都是基于本地的，分布式环境下必然会出现读取到脏数据，需要使用集中式缓存将 MyBatis 的 Cache 接口实现，有一定的开发成本，直接使用 Redis、Memcached 等分布式缓存可能成本更低，安全性也更高。")])])]),a._v(" "),e("h2",{attrs:{id:"_12-jdbc-编程有哪些步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-jdbc-编程有哪些步骤"}},[a._v("#")]),a._v(" "),e("strong",[a._v("12.")]),a._v(" "),e("strong",[a._v("JDBC")]),a._v(" "),e("strong",[a._v("编程有哪些步骤")]),a._v("？")]),a._v(" "),e("p",[a._v("1.装载相应的数据库的 JDBC 驱动并进行初始化：")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v('Class.forName("com.mysql.jdbc.Driver");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("2.建立 JDBC 和数据库之间的 Connection 连接：")]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v('Connection c = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/test?\ncharacterEncoding=UTF-8", "root", "123456");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"_13-mybatis中见过什么设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-mybatis中见过什么设计模式"}},[a._v("#")]),a._v(" 13.MyBatis中见过什么设计模式？")]),a._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"image-20230530142238996","data-src":t(526),loading:"lazy"}})]),a._v(" "),e("h2",{attrs:{id:"_14-mybatis-中比如-usermapper-java-是接口-为什么没有实现类还能调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-mybatis-中比如-usermapper-java-是接口-为什么没有实现类还能调用"}},[a._v("#")]),a._v(" 14. MyBatis 中比如 "),e("strong",[a._v("UserMapper.java")]),a._v(" 是接口，为什么没有实现类还能调用？")]),a._v(" "),e("p",[a._v("使用JDK动态代理+MapperProxy。本质上调用的是MapperProxy的invoke方法。")])])}),[],!1,null,null,null);s.default=n.exports},523:function(a,s,t){a.exports=t.p+"assets/img/image-20230524171518831.a4ef3336.png"},524:function(a,s,t){a.exports=t.p+"assets/img/image-20230524171601113.83ecf98b.png"},525:function(a,s,t){a.exports=t.p+"assets/img/image-20230524171636296.88f4f4fc.png"},526:function(a,s,t){a.exports=t.p+"assets/img/image-20230530142238996.ab0c13c1.png"}}]);
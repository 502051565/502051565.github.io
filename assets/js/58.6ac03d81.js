(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1108:function(_,v,t){"use strict";t.r(v);var a=t(17),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"_1-设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设计模式"}},[_._v("#")]),_._v(" 1."),a("strong",[_._v("设计模式")])]),_._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-23种设计模式"}},[_._v("1.23种设计模式")])]),a("li",[a("a",{attrs:{href:"#_2-说说什么是单例模式"}},[_._v("2.说说什么是单例模式？")])]),a("li",[a("a",{attrs:{href:"#_3-说说你对代理模式的理解"}},[_._v("3.说说你对代理模式的理解？")])]),a("li",[a("a",{attrs:{href:"#_4-说说工厂模式"}},[_._v("4.说说工厂模式?")])]),a("li",[a("a",{attrs:{href:"#_5-抽象工厂模式"}},[_._v("5.抽象工厂模式?")])]),a("li",[a("a",{attrs:{href:"#_6-装饰器模式是什么"}},[_._v("6.装饰器模式是什么？")])]),a("li",[a("a",{attrs:{href:"#_7-代理模式和装饰器模式有什么区别"}},[_._v("7.代理模式和装饰器模式有什么区别？")])]),a("li",[a("a",{attrs:{href:"#_8-模板方法模式"}},[_._v("8.模板方法模式？")])]),a("li",[a("a",{attrs:{href:"#_9-知道享元模式吗"}},[_._v("9.知道享元模式吗？")])]),a("li",[a("a",{attrs:{href:"#_10-享元模式和单例模式的区别"}},[_._v("10.享元模式和单例模式的区别？")])]),a("li",[a("a",{attrs:{href:"#_11-说说策略模式在我们生活的场景"}},[_._v("11.说说策略模式在我们生活的场景？")])]),a("li",[a("a",{attrs:{href:"#_12-知道责任链模式吗"}},[_._v("12.知道责任链模式吗？")])]),a("li",[a("a",{attrs:{href:"#_13-了解过适配器模式么"}},[_._v("13.了解过适配器模式么？")])]),a("li",[a("a",{attrs:{href:"#_14-知道观察者模式吗"}},[_._v("14.知道观察者模式吗？")])])])]),a("p"),_._v(" "),a("h2",{attrs:{id:"_1-23种设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-23种设计模式"}},[_._v("#")]),_._v(" "),a("strong",[_._v("1.23种设计模式")])]),_._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image-20230516135845410","data-src":t(559),loading:"lazy"}})]),_._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image-20230516135928805","data-src":t(560),loading:"lazy"}})]),_._v(" "),a("p",[_._v("设计模式（Design Pattern）是前辈们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。 1995 年，GoF（Gang of Four，四人组/四人帮）合作出版了《设计模式：可复用面向对象软件的基础》一书，共收录了 23 种设计模式，从此树立了软件设计模式领域的里程碑，人称「GoF设计模式」。")]),_._v(" "),a("p",[_._v("通常面试中会问：")]),_._v(" "),a("p",[_._v("说一下你知道哪些设计模式？")]),_._v(" "),a("p",[_._v("这时候，就得需要平时积累下来的经验了，肯定回答自己会的，你只是知道名词是没用用的。从难易程度和常用情况来看可以这么回答：单例模式、代理模式、模板方法模式、装饰器模式、工厂模式、责任链模式、观察者模式、原型模式。")]),_._v(" "),a("p",[_._v("通常你能回答这么多就已经ok了。但是其他模式，可以适当的了解了解，不然面试官问你还有其他设计模式吗？")]),_._v(" "),a("p",[_._v("这时候，你就可以回答名词了，他再问，你就说这些设计模式只是了解过，在工作中用的不是很多")]),_._v(" "),a("h2",{attrs:{id:"_2-说说什么是单例模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-说说什么是单例模式"}},[_._v("#")]),_._v(" "),a("strong",[_._v("2."),a("strong",[_._v("说说什么是单例模式")]),_._v("？")])]),_._v(" "),a("p",[_._v("答：单例模式是一种常用的软件设计模式，在应用这个模式时，单例对象的类必须保证只有一个实例存在，整个系统只能使用一个对象实例。")]),_._v(" "),a("p",[_._v("优点：不会频繁地创建和销毁对象，浪费系统资源。")]),_._v(" "),a("p",[_._v("可能这会需要你手写一个单例模式，这就得自己去学了，因为单例模式有很多种写法，懒汉模式，饿汉模式，双重检查模式等。懒汉模式就是用的时候再去创建对象，饿汉模式就是提前就已经加载好的静态static对象，双重检查模式就是两次检查避免多线程造成创建了多个对象。")]),_._v(" "),a("p",[_._v("单例模式有很多种的写法，我总结一下：")]),_._v(" "),a("p",[_._v("（1）饿汉式单例模式的写法：线程安全")]),_._v(" "),a("p",[_._v("（2）懒汉式单例模式的写法：非线程安全")]),_._v(" "),a("p",[_._v("（3）双检锁单例模式的写法：线程安全")]),_._v(" "),a("h2",{attrs:{id:"_3-说说你对代理模式的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-说说你对代理模式的理解"}},[_._v("#")]),_._v(" "),a("strong",[_._v("3."),a("strong",[_._v("说说你对代理模式的理解")]),_._v("？")])]),_._v(" "),a("p",[_._v("代理模式是给某一个对象提供一个代理，并由代理对象控制对原对象的引用。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合度；")])]),_._v(" "),a("li",[a("p",[_._v("可以灵活地隐藏被代理对象的部分功能和服务，也增加额外的功能和服务。")])])]),_._v(" "),a("p",[a("strong",[_._v("缺点:")])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("由于使用了代理模式，因此程序的性能没有直接调用性能高；")])]),_._v(" "),a("li",[a("p",[_._v("使用代理模式提高了代码的复杂度。")])])]),_._v(" "),a("p",[_._v("黄牛卖火车票：没有流行网络购票的年代是很喜欢找黄牛买火车票的，因为工作忙的原因，没时间去买票，然后就托黄牛给你买张回家过年的火车票。这个过程中黄牛就是代理人，火车票就是被代理的对象。")]),_._v(" "),a("p",[_._v("婚姻介绍所：婚姻介绍所的工作人员，搜集单身人士信息，婚介所的工作人员为这个单身人士找对象，这个过程也是代理模式的生活案例。对象就是被代理的对象。")]),_._v(" "),a("p",[_._v("注意了，问代理模式的时候，很有可能会问：动态代理。在Spring篇中已经讲述过，如果你把动态代理讲了后，很有可能还会问什么是静态代理？一个洞一个是静，大致也能才出来，就是中间代理层使我们手动写的，通常说的代理模式就是静态代理。")]),_._v(" "),a("h2",{attrs:{id:"_4-说说工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-说说工厂模式"}},[_._v("#")]),_._v(" 4.说说工厂模式?")]),_._v(" "),a("p",[_._v("答：简单工厂模式又叫静态工厂方法模式，就是建立一个工厂类，对实现了同一接口的一些类进行实例的创建。比如，一台咖啡机就可以理解为一个工厂模式，你只需要按下想喝的咖啡品类的按钮（摩卡或拿铁），它就会给你生产一杯相应的咖啡，你不需要管它内部的具体实现，只要告诉它你的需求即可。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("工厂类含有必要的判断逻辑，可以决定在什么时候创建哪一个产品类的实例，客户端可以免除直接创建产品对象的责任，而仅仅“消费”产品；简单工厂模式通过这种做法实现了对责任的分割，它提供了专门的工厂类用于创建对象；")])]),_._v(" "),a("li",[a("p",[_._v("客户端无须知道所创建的具体产品类的类名，只需要知道具体产品类所对应的参数即可，对于一些复杂的类名，通过简单工厂模式可以减少使用者的记忆量；")])]),_._v(" "),a("li",[a("p",[_._v("通过引入配置文件，可以在不修改任何客户端代码的情况下更换和增加新的具体产品类，在一定程度上提高了系统的灵活性。")])])]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("不易拓展，一旦添加新的产品类型，就不得不修改工厂的创建逻辑；")])]),_._v(" "),a("li",[a("p",[_._v("产品类型较多时，工厂的创建逻辑可能过于复杂，一旦出错可能造成所有产品的创建失败，不利于系统的维护。")])])]),_._v(" "),a("h2",{attrs:{id:"_5-抽象工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-抽象工厂模式"}},[_._v("#")]),_._v(" 5."),a("strong",[_._v("抽象工厂模式")]),_._v("?")]),_._v(" "),a("p",[_._v("答：抽象工厂模式是在简单工厂的基础上将未来可能需要修改的代码抽象出来，通过继承的方式让子类去做决定。比如，以上面的咖啡工厂为例，某天我的口味突然变了，不想喝咖啡了想喝啤酒，这个时候如果直接修改简单工厂里面的代码，这种做法不但不够优雅，也不符合软件设计的“开闭原则”，因为每次新增品类都要修改原来的代码。这个时候就可以使用抽象工厂类了，抽象工厂里只声明方法，具体的实现交给子类（子工厂）去实现，这个时候再有新增品类的需求，只需要新创建代码即可。")]),_._v(" "),a("h2",{attrs:{id:"_6-装饰器模式是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-装饰器模式是什么"}},[_._v("#")]),_._v(" 6."),a("strong",[_._v("装饰器模式是什么")]),_._v("？")]),_._v(" "),a("p",[_._v("答：装饰器模式是指动态地给一个对象增加一些额外的功能，同时又不改变其结构。")]),_._v(" "),a("p",[_._v("优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。")]),_._v(" "),a("p",[_._v("装饰器模式的关键：装饰器中使用了被装饰的对象。")]),_._v(" "),a("p",[_._v("比如，创建一个对象“laowang”，给对象添加不同的装饰，穿上夹克、戴上帽子......，这个执行过程就是装饰者模式。")]),_._v(" "),a("p",[_._v("一句名言：人靠衣裳马靠鞍。都是装饰器模式的生活案列。")]),_._v(" "),a("h2",{attrs:{id:"_7-代理模式和装饰器模式有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-代理模式和装饰器模式有什么区别"}},[_._v("#")]),_._v(" "),a("strong",[_._v("7")]),_._v("."),a("strong",[_._v("代理模式和装饰器模式有什么区别？")])]),_._v(" "),a("p",[_._v("答：都是结构型模式，代理模式重在访问权限的控制，而装饰器模式重在功能的加强。")]),_._v(" "),a("h2",{attrs:{id:"_8-模板方法模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-模板方法模式"}},[_._v("#")]),_._v(" 8.模板方法模式？")]),_._v(" "),a("p",[_._v("答：模板方法模式是指定义一个算法骨架，将具体内容延迟到子类去实现。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：")]),_._v(" "),a("p",[_._v("提高代码复用性：将相同部分的代码放在抽象的父类中，而将不同的代码放入不同的子类中；")]),_._v(" "),a("p",[_._v("实现了反向控制：通过一个父类调用其子类的操作，通过对子类的具体实现扩展不同的行为，实现了反向控制并且符合开闭原则。")]),_._v(" "),a("p",[_._v("喝茶茶：烧水----放入茶叶---喝茶。放入的茶叶每个人自己的喜好不一样，有的是普洱、有的是铁观音等。")]),_._v(" "),a("p",[_._v("每日工作：上班打卡----工作---下班打卡。每个人工作的内容不一样，后端开发的、前端开发、测试、产品每个人的工作内容不一样。")]),_._v(" "),a("h2",{attrs:{id:"_9-知道享元模式吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-知道享元模式吗"}},[_._v("#")]),_._v(" 9.知道享元模式吗？")]),_._v(" "),a("p",[_._v("答：顾名思义就是被共享的单元。享元模式的意图是复用对象，节省内存，前提是享元对象是不可变对象。具体来讲，当一个系统中存在大量重复对象的时候，如果这些重复的对象是不可变对象，我们就可以利用享元模式将对象设计成享元，在内存中只保留一份实例，供多处代码引用。这样可以减少内存中对象的数量，起到节省内存的目的。")]),_._v(" "),a("p",[_._v("典型的使用场景：Integer中cache，就是享元模式很经典的实现。")]),_._v(" "),a("p",[_._v("怎么看起来享元模式和单例模式是一毛一样的？面试官很有可能会继续问：")]),_._v(" "),a("h2",{attrs:{id:"_10-享元模式和单例模式的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-享元模式和单例模式的区别"}},[_._v("#")]),_._v(" 10.享元模式和单例模式的区别？")]),_._v(" "),a("p",[_._v("答：单例模式是创建型模式，重在只能有一个对象。而享元模式是结构型模式，重在节约内存使用，提升程序性能。")]),_._v(" "),a("p",[_._v("享元模式：把一个或者多可对象霍村起来，用的时候，直接从缓存里获取。也就是说享元模式不一")]),_._v(" "),a("p",[_._v("定只有一个对象。")]),_._v(" "),a("h2",{attrs:{id:"_11-说说策略模式在我们生活的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-说说策略模式在我们生活的场景"}},[_._v("#")]),_._v(" "),a("strong",[_._v("11")]),_._v("."),a("strong",[_._v("说说策略模式在我们生活的场景？")])]),_._v(" "),a("p",[_._v("答：策略模式是指定义一系列算法，将每个算法都封装起来，并且使他们之间可以相互替换。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：遵循了开闭原则，扩展性良好。")]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：随着策略的增加，对外暴露越来越多。")]),_._v(" "),a("p",[_._v("条条大路通罗马，条条大路通北京。")]),_._v(" "),a("p",[_._v("我们去北京的交通方式（策略）很多，比如说坐飞机、坐高铁、自己开车等方式。每一种方式就可以理解为每一种策略。")]),_._v(" "),a("p",[_._v("这就是生活中的策略模式。")]),_._v(" "),a("h2",{attrs:{id:"_12-知道责任链模式吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-知道责任链模式吗"}},[_._v("#")]),_._v(" "),a("strong",[_._v("12")]),_._v("."),a("strong",[_._v("知道责任链模式吗？")])]),_._v(" "),a("p",[_._v("答：是行为型设计模式之一，其将链中每一个节点看作是一个对象，每个节点处理的请求均不同，且内部自动维护一个下一节点对象。当一个请求从链式的首端发出时，会沿着链的路径依次传递给每一个节点对象，直至有对象处理这个请求为止。")]),_._v(" "),a("p",[a("strong",[_._v("优点")])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("解耦了请求与处理；")])]),_._v(" "),a("li",[a("p",[_._v("请求处理者（节点对象）只需关注自己感兴趣的请求进行处理即可，对于不感兴趣的请求，直接转发给下一级节点对象；")])]),_._v(" "),a("li",[a("p",[_._v("具备链式传递处理请求功能，请求发送者无需知晓链路结构，只需等待请求处理结果；")])]),_._v(" "),a("li",[a("p",[_._v("链路结构灵活，可以通过改变链路结构动态地新增或删减责任；")])]),_._v(" "),a("li",[a("p",[_._v("易于扩展新的请求处理类（节点），符合 开闭原则；")])])]),_._v(" "),a("p",[a("strong",[_._v("缺点")])]),_._v(" "),a("ul",[a("li",[a("p",[_._v("责任链路过长时，可能对请求传递处理效率有影响；")])]),_._v(" "),a("li",[a("p",[_._v("如果节点对象存在循环引用时，会造成死循环，导致系统崩溃；")])])]),_._v(" "),a("p",[_._v("生活案列：我们在公司内部发起一个OA审批流程，项目经理审批、部门经理审批。老板审批、人力审批。这就是生活中的责任链模式，每个角色的责任是不同。")]),_._v(" "),a("p",[_._v("SpringMVC中的拦截器和Mybatis中的插件机制，都是拦截器经典实现。")]),_._v(" "),a("h2",{attrs:{id:"_13-了解过适配器模式么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-了解过适配器模式么"}},[_._v("#")]),_._v(" 13.了解过适配器模式么？")]),_._v(" "),a("p",[_._v("答：适配器模式是将一个类的接口变成客户端所期望的另一种接口，从而使原本因接口不匹配而无法一起工作的两个类能够在一起工作。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("可以让两个没有关联的类一起运行，起着中间转换的作用；")])]),_._v(" "),a("li",[a("p",[_._v("灵活性好，不会破坏原有的系统。")])])]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("过多地使用适配器，容易使代码结构混乱，如明明看到调用的是 A 接口，内部调用的却是 B接口的实现。")])]),_._v(" "),a("li",[a("p",[_._v("生活中的插座，为了适应各种插头，然后上面有两个孔的，三个空的，基本都能适应。还有万能充电器、USB接口等。这些都是生活中的适配器模式。")])])]),_._v(" "),a("h2",{attrs:{id:"_14-知道观察者模式吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-知道观察者模式吗"}},[_._v("#")]),_._v(" 14."),a("strong",[_._v("知道观察者模式吗？")])]),_._v(" "),a("p",[_._v("答：观察者模式是定义对象间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象皆得到通知并被自动更新。观察者模式又叫做发布-订阅（Publish/Subscribe）模式、模")]),_._v(" "),a("p",[_._v("型-视图（Model/View）模式、源-监听器（Source/Listener）模式或从属者（Dependents）模式。")]),_._v(" "),a("p",[a("strong",[_._v("优点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("观察者模式可以实现表示层和数据逻辑层的分离，并定义了稳定的消息更新传递机制，抽象了更新接口，使得可以有各种各样不同的表示层作为具体观察者角色；")])]),_._v(" "),a("li",[a("p",[_._v("观察者模式在观察目标和观察者之间建立一个抽象的耦合；")])]),_._v(" "),a("li",[a("p",[_._v("观察者模式支持广播通信；")])]),_._v(" "),a("li",[a("p",[_._v("观察者模式符合开闭原则（对拓展开放，对修改关闭）的要求。")])])]),_._v(" "),a("p",[a("strong",[_._v("缺点")]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("如果一个观察目标对象有很多直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间；")])]),_._v(" "),a("li",[a("p",[_._v("如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃；")])]),_._v(" "),a("li",[a("p",[_._v("观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。")]),_._v(" "),a("p",[_._v("在观察者模式中有如下角色：")])]),_._v(" "),a("li",[a("p",[_._v("Subject：抽象主题（抽象被观察者），抽象主题角色把所有观察者对象保存在一个集合里，每个主题都可以有任意数量的观察者，抽象主题提供一个接口，可以增加和删除观察者对象；")])]),_._v(" "),a("li",[a("p",[_._v("ConcreteSubject：具体主题（具体被观察者），该角色将有关状态存入具体观察者对象，在具体主题的内部状态发生改变时，给所有注册过的观察者发送通知；")])]),_._v(" "),a("li",[a("p",[_._v("Observer：抽象观察者，是观察者者的抽象类，它定义了一个更新接口，使得在得到主题更改通知时更新自己；")])]),_._v(" "),a("li",[a("p",[_._v("ConcrereObserver：具体观察者，实现抽象观察者定义的更新接口，以便在得到主题更改通知时更新自身的状态。")])])]),_._v(" "),a("p",[_._v("在Spring中大量的使用的观察者模式，只要看到是以Event结尾或者Publish开头的基本上都是观察者模式。")]),_._v(" "),a("p",[_._v("上面一共说了11种设计模式，这些设计模式能应对绝大多数人和面试场景来说。建议私下自己用代码实现一番，便于更好地理解。")])])}),[],!1,null,null,null);v.default=r.exports},559:function(_,v,t){_.exports=t.p+"assets/img/image-20230516135845410.5437eafd.png"},560:function(_,v,t){_.exports=t.p+"assets/img/image-20230516135928805.66a0a7c3.png"}}]);
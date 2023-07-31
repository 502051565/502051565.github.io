(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1110:function(a,_,s){"use strict";s.r(_);var t=s(17),v=Object(t.a)({},(function(){var a=this,_=a.$createElement,t=a._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-elasticsearch篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-elasticsearch篇"}},[a._v("#")]),a._v(" 1."),t("strong",[a._v("ElasticSearch")]),a._v("篇")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-谈谈分词与倒排索引的原理"}},[a._v("1.谈谈分词与倒排索引的原理？")])]),t("li",[t("a",{attrs:{href:"#_2-说说分段存储的思想"}},[a._v("2.说说分段存储的思想？")])]),t("li",[t("a",{attrs:{href:"#_3-谈谈你对段合并的策略思想的认识"}},[a._v("3.谈谈你对段合并的策略思想的认识？")])]),t("li",[t("a",{attrs:{href:"#_4-了解文本相似度tf-idf吗"}},[a._v("4.了解文本相似度TF-IDF吗？")])]),t("li",[t("a",{attrs:{href:"#_5-能说说elasticsearch-写索引的逻辑吗"}},[a._v("5.能说说ElasticSearch 写索引的逻辑吗？")])]),t("li",[t("a",{attrs:{href:"#_6-熟悉elasticsearch集群中搜索数据的过程吗"}},[a._v("6.熟悉ElasticSearch集群中搜索数据的过程吗？")])]),t("li",[t("a",{attrs:{href:"#_7-了解elasticsearch深翻页的问题及解决吗"}},[a._v("7.了解ElasticSearch深翻页的问题及解决吗？")])]),t("li",[t("a",{attrs:{href:"#_8-熟悉elasticsearch-性能优化"}},[a._v("8.熟悉ElasticSearch 性能优化？")])]),t("li",[t("a",{attrs:{href:"#_9-elasticsearch-查询优化手段有哪些"}},[a._v("9.ElasticSearch 查询优化手段有哪些？")])]),t("li",[t("a",{attrs:{href:"#_10-elasticsearch-是如何实现-master-选举的"}},[a._v("10.elasticsearch 是如何实现 master 选举的？")])]),t("li",[t("a",{attrs:{href:"#_11-elasticsearch-索引数据多了怎么办-如何调优-部署"}},[a._v("11.elasticsearch 索引数据多了怎么办，如何调优，部署？")])]),t("li",[t("a",{attrs:{href:"#_12-说说你们公司-es-的集群架构-索引数据大小-分片有多少"}},[a._v("12.说说你们公司 es 的集群架构，索引数据大小，分片有多少？")])]),t("li",[t("a",{attrs:{href:"#_13-什么是elasticsearch"}},[a._v("13.什么是ElasticSearch？")])]),t("li",[t("a",{attrs:{href:"#_14-elasticsearch中的集群、节点、索引、文档、类型是什么"}},[a._v("14.ElasticSearch中的集群、节点、索引、文档、类型是什么？")])]),t("li",[t("a",{attrs:{href:"#_15-elasticsearch中的分片是什么"}},[a._v("15.ElasticSearch中的分片是什么？")])]),t("li",[t("a",{attrs:{href:"#_16-elasticsearch中的副本是什么"}},[a._v("16.ElasticSearch中的副本是什么？")])]),t("li",[t("a",{attrs:{href:"#_17-elasticsearch中的分析器是什么"}},[a._v("17.ElasticSearch中的分析器是什么？")])]),t("li",[t("a",{attrs:{href:"#_18-什么是elasticsearch中的编译器"}},[a._v("18.什么是ElasticSearch中的编译器？")])]),t("li",[t("a",{attrs:{href:"#_19-什么是elasticsearch中的过滤器"}},[a._v("19.什么是ElasticSearch中的过滤器？")])]),t("li",[t("a",{attrs:{href:"#_20-启用属性-索引和存储的用途是什么"}},[a._v("20.启用属性，索引和存储的用途是什么？")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"_1-谈谈分词与倒排索引的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-谈谈分词与倒排索引的原理"}},[a._v("#")]),a._v(" 1.谈谈分词与倒排索引的原理？")]),a._v(" "),t("p",[a._v("首先说分词是给检索用的。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("英文：一个单词一个词，很简单。I am a student，词与词之间空格分隔。")])]),a._v(" "),t("li",[t("p",[a._v("中文：我是学生，就不能一个字一个字地分，我-是-学生。这是好分的。还有歧义的，使用户放心，使用-户，使-用户。人很容易看出，机器就难多了。所以市面上有各种各样的分词器，一个强调的效率一个强调的准确率。")])])]),a._v(" "),t("p",[t("strong",[a._v("倒排索引：倒排针对的是正排。")])]),a._v(" "),t("ol",[t("li",[a._v("正排就是我记得我电脑有个文档，讲了 ES 的常见问题总结。那么我就找到文档，从上往下翻")])]),a._v(" "),t("p",[a._v("页，找到 ES 的部分。通过文档找文档内容。")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("倒排：一个 txt 文件 ES 的常见问题 -> D:/分布式问题总结.doc。")])]),a._v(" "),t("p",[a._v("所以倒排就是文档内容找文档。当然内容不是全部的，否则也不需要找文档了，内容就是几个分词")]),a._v(" "),t("p",[a._v("而已。这里的 txt 就是搜索引擎。")]),a._v(" "),t("h2",{attrs:{id:"_2-说说分段存储的思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-说说分段存储的思想"}},[a._v("#")]),a._v(" 2.说说分段存储的思想？")]),a._v(" "),t("p",[a._v("Lucene 是著名的搜索开源软件，ElasticSearch 和 Solr 底层用的都是它。")]),a._v(" "),t("p",[a._v("分段存储是 Lucene 的思想。")]),a._v(" "),t("p",[a._v("早期，都是一个整个文档建立一个大的倒排索引。简单，快速，但是问题随之而来。")]),a._v(" "),t("p",[a._v("文档有个很小的改动，整个索引需要重新建立，速度慢，成本高，为了提高速度，定期更新那么时效性就差。")]),a._v(" "),t("p",[a._v("现在一个索引文件，拆分为多个子文件，每个子文件是段。修改的数据不影响的段不必做处理。")]),a._v(" "),t("h2",{attrs:{id:"_3-谈谈你对段合并的策略思想的认识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-谈谈你对段合并的策略思想的认识"}},[a._v("#")]),a._v(" 3.谈谈你对段合并的策略思想的认识？")]),a._v(" "),t("p",[a._v("分段的思想大大的提高了维护索引的效率。但是随之就有了新的问题。")]),a._v(" "),t("p",[a._v("每次新增数据就会新增加一个段，时间久了，一个文档对应的段非常多。段多了，也就影响检索性能了。")]),a._v(" "),t("p",[a._v("检索过程：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("查询所有短中满足条件的数据")])]),a._v(" "),t("li",[t("p",[a._v("对每个段的结果集合并")])])]),a._v(" "),t("p",[a._v("所以，定期的对段进行合理是很必要的。真是天下大势，分久必合合久必分。")]),a._v(" "),t("p",[a._v("策略：将段按大小排列分组，大到一定程度的不参与合并。小的组内合并。整体维持在一个合理的大小范围。当然这个大到底应该是多少，是用户可配置的。这也符合设计的思想。")]),a._v(" "),t("h2",{attrs:{id:"_4-了解文本相似度tf-idf吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-了解文本相似度tf-idf吗"}},[a._v("#")]),a._v(" 4.了解文本相似度TF-IDF吗？")]),a._v(" "),t("p",[a._v("简单地说，就是你检索一个词，匹配出来的文章，网页太多了。比如 1000 个，这些内容再该怎么")]),a._v(" "),t("p",[a._v("呈现，哪些在前面哪些在后面。这需要也有个对匹配度的评分。")]),a._v(" "),t("p",[a._v("TF-IDF 就是干这个的。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("TF = Term Frequency 词频，一个词在这个文档中出现的频率。值越大，说明这文档越匹配，正向指标。")])]),a._v(" "),t("li",[t("p",[a._v("IDF = Inverse Document Frequency 反向文档频率，简单点说就是一个词在所有文档中都出现，那么这个词不重要。比如“的、了、我、好”这些词所有文档都出现，对检索毫无帮助。反向指标。")]),a._v(" "),t("blockquote",[t("p",[a._v("TF-IDF = TF / IDF")])])])]),a._v(" "),t("p",[a._v("复杂的公式，就不写了，主要理解他的思想即可。")]),a._v(" "),t("h2",{attrs:{id:"_5-能说说elasticsearch-写索引的逻辑吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-能说说elasticsearch-写索引的逻辑吗"}},[a._v("#")]),a._v(" 5.能说说ElasticSearch 写索引的逻辑吗？")]),a._v(" "),t("p",[a._v("ElasticSearch 是集群的 = 主分片 + 副本分片。")]),a._v(" "),t("p",[a._v("写索引只能写主分片，然后主分片同步到副本分片上。但主分片不是固定的，可能网络原因，之前还是 Node1 是主分片，后来就变成了 Node2 经过选举成了主分片了。")]),a._v(" "),t("p",[a._v("客户端如何知道哪个是主分片呢？")]),a._v(" "),t("p",[a._v("看下面过程。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("客户端向某个节点 NodeX 发送写请求")])]),a._v(" "),t("li",[t("p",[a._v("NodeX 通过文档信息，请求会转发到主分片的节点上")])]),a._v(" "),t("li",[t("p",[a._v("主分片处理完，通知到副本分片同步数据，向 Nodex 发送成功信息。")])]),a._v(" "),t("li",[t("p",[a._v("Nodex 将处理结果返回给客户端。")])])]),a._v(" "),t("h2",{attrs:{id:"_6-熟悉elasticsearch集群中搜索数据的过程吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-熟悉elasticsearch集群中搜索数据的过程吗"}},[a._v("#")]),a._v(" 6.熟悉ElasticSearch集群中搜索数据的过程吗？")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("客户端向集群发送请求，集群随机选择一个 NodeX 处理这次请求。")])]),a._v(" "),t("li",[t("p",[a._v("Nodex 先计算文档在哪个主分片上，比如是主分片 A，它有三个副本 A1，A2，A3。那么请求会轮询三个副本中的一个完成请求。")])]),a._v(" "),t("li",[t("p",[a._v("如果无法确认分片，比如检索的不是一个文档，就遍历所有分片。")])])]),a._v(" "),t("p",[a._v("补充一点，一个节点的存储量是有限的，于是有了分片的概念。但是分片可能有丢失，于是有了副")]),a._v(" "),t("p",[a._v("本的概念。")]),a._v(" "),t("p",[a._v("比如：")]),a._v(" "),t("p",[a._v("ES 集群有 3 个分片，分片 A、分片 B、分片 C，那么分片 A + 分片 B + 分片 C = 所有数据，每个分片只有大概 1/3。分片 A 又有副本 A1 A2 A3，数据都是一样的。")]),a._v(" "),t("h2",{attrs:{id:"_7-了解elasticsearch深翻页的问题及解决吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-了解elasticsearch深翻页的问题及解决吗"}},[a._v("#")]),a._v(" "),t("strong",[a._v("7")]),a._v(".了解ElasticSearch深翻页的问题及解决吗？")]),a._v(" "),t("p",[a._v("深翻页：比如我们检索一次，轮询所有分片，汇集结果，根据 TF-IDF 等算法打分，排序后将前 10条数据返回。用户感觉不错，说我看看下一页。ES 依然是轮询所有分片，汇集结果，根据 TF-IDF等算法打分，排序后将前 11-20 条数据返回。")]),a._v(" "),t("p",[a._v("对用户来说，翻页应该很快啊，但是实际上，第一次检索多复杂，下一次检索就多复杂。")]),a._v(" "),t("p",[a._v("解决的话，可以把用户的检索结果，存入 Redis 中 10 分钟。这样分页就很快，超过 10 分钟，用户不翻页，也就不会翻页了，数据就可以清除了。")]),a._v(" "),t("h2",{attrs:{id:"_8-熟悉elasticsearch-性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-熟悉elasticsearch-性能优化"}},[a._v("#")]),a._v(" "),t("strong",[a._v("8")]),a._v("."),t("strong",[a._v("熟悉ElasticSearch 性能优化")]),a._v("？")]),a._v(" "),t("p",[t("strong",[a._v("1.")]),a._v(" "),t("strong",[a._v("批量提交")])]),a._v(" "),t("p",[a._v("背景是大量的写操作，每次提交都是一次网络开销。网络永久是优化要考虑的重点。")]),a._v(" "),t("p",[t("strong",[a._v("2.")]),a._v(" "),t("strong",[a._v("优化硬盘")])]),a._v(" "),t("p",[a._v("索引文件需要落地硬盘，段的思想又带来了更多的小文件，磁盘 IO 是 ES 的性能瓶颈。一个固态硬盘比普通硬盘好太多。")]),a._v(" "),t("p",[t("strong",[a._v("3.")]),a._v(" "),t("strong",[a._v("减少副本数量")])]),a._v(" "),t("p",[a._v("副本可以保证集群的可用性，但是严重影响了 写索引的效率。写索引时不只完成写入索引，还要完成索引到副本的同步。ES 不是存储引擎，不要考虑数据丢失，性能更重要。 如果是批量导入，建议就关闭副本。")]),a._v(" "),t("h2",{attrs:{id:"_9-elasticsearch-查询优化手段有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-elasticsearch-查询优化手段有哪些"}},[a._v("#")]),a._v(" "),t("strong",[a._v("9")]),a._v("."),t("strong",[a._v("ElasticSearch")]),a._v(" 查询优化手段有哪些？")]),a._v(" "),t("p",[t("strong",[a._v("设计阶段调优")])]),a._v(" "),t("p",[a._v("（1）根据业务增量需求，采取基于日期模板创建索引，通过 roll over API 滚动索引；")]),a._v(" "),t("p",[a._v("（2）使用别名进行索引管理；")]),a._v(" "),t("p",[a._v("（3）每天凌晨定时对索引做 force_merge 操作，以释放空间；")]),a._v(" "),t("p",[a._v("（4）采取冷热分离机制，热数据存储到 SSD，提高检索效率；冷数据定期进行 shrink操作，以缩减存储；")]),a._v(" "),t("p",[a._v("（5）采取 curator 进行索引的生命周期管理；")]),a._v(" "),t("p",[a._v("（6）仅针对需要分词的字段，合理的设置分词器；")]),a._v(" "),t("p",[a._v("（7）Mapping 阶段充分结合各个字段的属性，是否需要检索、是否需要存储等。……..")]),a._v(" "),t("p",[t("strong",[a._v("写入调优")])]),a._v(" "),t("p",[a._v("（1）写入前副本数设置为 0；")]),a._v(" "),t("p",[a._v("（2）写入前关闭 refresh_interval 设置为-1，禁用刷新机制；")]),a._v(" "),t("p",[a._v("（3）写入过程中：采取 bulk 批量写入；")]),a._v(" "),t("p",[a._v("（4）写入后恢复副本数和刷新间隔；")]),a._v(" "),t("p",[a._v("（5）尽量使用自动生成的 id。")]),a._v(" "),t("p",[t("strong",[a._v("查询调优")])]),a._v(" "),t("p",[a._v("（1）禁用 wildcard；")]),a._v(" "),t("p",[a._v("（2）禁用批量 terms（成百上千的场景）；（3）充分利用倒排索引机制，能 keyword 类型尽量 keyword；")]),a._v(" "),t("p",[a._v("（4）数据量大时候，可以先基于时间敲定索引再检索；")]),a._v(" "),t("p",[a._v("（5）设置合理的路由机制。")]),a._v(" "),t("p",[t("strong",[a._v("其他调优")])]),a._v(" "),t("p",[a._v("部署调优，业务调优等。")]),a._v(" "),t("p",[a._v("上面的提及一部分，面试者就基本对你之前的实践或者运维经验有所评估了。")]),a._v(" "),t("h2",{attrs:{id:"_10-elasticsearch-是如何实现-master-选举的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-elasticsearch-是如何实现-master-选举的"}},[a._v("#")]),a._v(" 10**.**elasticsearch "),t("strong",[a._v("是如何实现")]),a._v(" "),t("strong",[a._v("master")]),a._v(" 选举的？")]),a._v(" "),t("p",[a._v("面试官：想了解 ES 集群的底层原理，不再只关注业务层面了。")]),a._v(" "),t("p",[a._v("前置前提：")]),a._v(" "),t("p",[a._v("（1）只有候选主节点（master：true）的节点才能成为主节点。")]),a._v(" "),t("p",[a._v("（2）最小主节点数（min_master_nodes）的目的是防止脑裂。")]),a._v(" "),t("p",[a._v("核对了一下代码，核心入口为 fifindMaster，选择主节点成功返回对应 Master，否则返回 null。选")]),a._v(" "),t("p",[a._v("举流程大致描述如下：")]),a._v(" "),t("p",[a._v("第一步：确认候选主节点数达标，elasticsearch.yml 设置的值")]),a._v(" "),t("p",[a._v("discovery.zen.minimum_master_nodes；")]),a._v(" "),t("p",[a._v("第二步：比较：先判定是否具备 master 资格，具备候选主节点资格的优先返回；")]),a._v(" "),t("p",[a._v("若两节点都为候选主节点，则 id 小的值会主节点。注意这里的 id 为 string 类型。")]),a._v(" "),t("p",[a._v("题外话：获取节点 id 的方法。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("GET /_cat/nodes?v&h=ip,port,heapPercent,heapMax,id,name")])]),a._v(" "),t("li",[t("p",[a._v("ip port heapPercent heapMax id name")])])]),a._v(" "),t("h2",{attrs:{id:"_11-elasticsearch-索引数据多了怎么办-如何调优-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-elasticsearch-索引数据多了怎么办-如何调优-部署"}},[a._v("#")]),a._v(" "),t("strong",[a._v("11")]),a._v("."),t("strong",[a._v("elasticsearch")]),a._v(" 索引数据多了怎么办，如何调优，部署？")]),a._v(" "),t("p",[a._v("面试官：想了解大数据量的运维能力。")]),a._v(" "),t("p",[a._v("解答：索引数据的规划，应在前期做好规划，正所谓“设计先行，编码在后”，这样才能有效的避免")]),a._v(" "),t("p",[a._v("突如其来的数据激增导致集群处理能力不足引发的线上客户检索或者其他业务受到影响。")]),a._v(" "),t("p",[a._v("如何调优：")]),a._v(" "),t("p",[t("strong",[a._v("动态索引层面")])]),a._v(" "),t("p",[a._v("基于模板+时间+rollover api 滚动创建索引，举例：设计阶段定义：blog 索引的模板格式为：blog_index_时间戳的形式，每天递增数据。这样做的好处：不至于数据量激增导致单个索引数据量非常大，接近于上线 2 的32 次幂-1，索引存储达到了 TB+甚至更大。")]),a._v(" "),t("p",[a._v("一旦单个索引很大，存储等各种风险也随之而来，所以要提前考虑+及早避免。")]),a._v(" "),t("p",[t("strong",[a._v("存储层面")])]),a._v(" "),t("p",[a._v("冷热数据分离存储，热数据（比如最近 3 天或者一周的数据），其余为冷数据。")]),a._v(" "),t("p",[a._v("对于冷数据不会再写入新数据，可以考虑定期 force_merge 加 shrink 压缩操作，节省存储空间和")]),a._v(" "),t("p",[a._v("检索效率。")]),a._v(" "),t("p",[t("strong",[a._v("部署层面")])]),a._v(" "),t("p",[a._v("一旦之前没有规划，这里就属于应急策略。")]),a._v(" "),t("p",[a._v("结合 ES 自身的支持动态扩展的特点，动态新增机器的方式可以缓解集群压力，注意：如果之前主节点等规划合理，不需要重启集群也能完成动态新增的。")]),a._v(" "),t("h2",{attrs:{id:"_12-说说你们公司-es-的集群架构-索引数据大小-分片有多少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-说说你们公司-es-的集群架构-索引数据大小-分片有多少"}},[a._v("#")]),a._v(" "),t("strong",[a._v("12.说说你们公司 es 的集群架构，索引数据大小，分片有多少？")])]),a._v(" "),t("p",[a._v("面试官：想了解应聘者之前公司接触的 ES 使用场景、规模，有没有做过比较大规模的索引设计、规划、调优。")]),a._v(" "),t("p",[a._v("解答：如实结合自己的实践场景回答即可。")]),a._v(" "),t("p",[a._v("比如：ES 集群架构 13 个节点，索引根据通道不同共 20+索引，根据日期，每日递增 20+，索引：10 分片，每日递增 1 亿+数据，每个通道每天索引大小控制：150GB 之内。")]),a._v(" "),t("h2",{attrs:{id:"_13-什么是elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-什么是elasticsearch"}},[a._v("#")]),a._v(" 13.什么是ElasticSearch？")]),a._v(" "),t("p",[a._v("Elasticsearch是一个基于Lucene的搜索引擎。它提供了具有HTTP Web和无架构JSON文档的分布式，多租户能力的全文搜索引擎。Elasticsearch是用Java开发的，根据[Apache]许可条款作为开源发布。")]),a._v(" "),t("h2",{attrs:{id:"_14-elasticsearch中的集群、节点、索引、文档、类型是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-elasticsearch中的集群、节点、索引、文档、类型是什么"}},[a._v("#")]),a._v(" 14.ElasticSearch中的集群、节点、索引、文档、类型是什么？")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("群集是一个或多个节点（服务器）的集合，它们共同保存您的整个数据，并提供跨所有节点的联合索引和搜索功能。群集由唯一名称标识，默认情况下为“elasticsearch”。此名称很重要，因为如果节点设置为按名称加入群集，则该节点只能是群集的一部分。")])]),a._v(" "),t("li",[t("p",[a._v("节点是属于集群一部分的单个服务器。它存储数据并参与群集索引和搜索功能。")])]),a._v(" "),t("li",[t("p",[a._v("索引就像关系数据库中的“数据库”。它有一个定义多种类型的映射。索引是逻辑名称空间，映射到一个或多个主分片，并且可以有零个或多个副本分片。 MySQL =>数据库 ElasticSearch=>索引")])]),a._v(" "),t("li",[t("p",[a._v("文档类似于关系数据库中的一行。不同之处在于索引中的每个文档可以具有不同的结构（字段），但是对于通用字段应该具有相同的数据类型。 MySQL => Databases => Tables =>Columns / Rows ElasticSearch => Indices => Types =>具有属性的文档")])]),a._v(" "),t("li",[t("p",[a._v("类型是索引的逻辑类别/分区，其语义完全取决于用户。")])])]),a._v(" "),t("h2",{attrs:{id:"_15-elasticsearch中的分片是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-elasticsearch中的分片是什么"}},[a._v("#")]),a._v(" 15.ElasticSearch中的分片是什么？")]),a._v(" "),t("p",[a._v("在大多数环境中，每个节点都在单独的盒子或虚拟机上运行。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("索引 - 在Elasticsearch中，索引是文档的集合。")])]),a._v(" "),t("li",[t("p",[a._v("分片 -因为Elasticsearch是一个分布式搜索引擎，所以索引通常被分割成分布在多个节点上的被称为分片的元素。")])]),a._v(" "),t("li",[t("p",[t("img",{staticClass:"lazy",attrs:{alt:"./image-20230605162649154","data-src":"5.es_introduce.assets/image-20230605162649154.png",loading:"lazy"}})])])]),a._v(" "),t("h2",{attrs:{id:"_16-elasticsearch中的副本是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-elasticsearch中的副本是什么"}},[a._v("#")]),a._v(" 16.ElasticSearch中的副本是什么？")]),a._v(" "),t("p",[a._v("一个索引被分解成碎片以便于分发和扩展。副本是分片的副本。一个节点是一个属于一个集群的ElasticSearch的运行实例。一个集群由一个或多个共享相同集群名称的节点组成。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"./image-20230605162722372","data-src":"5.es_introduce.assets/image-20230605162722372.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"_17-elasticsearch中的分析器是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-elasticsearch中的分析器是什么"}},[a._v("#")]),a._v(" 17.ElasticSearch中的分析器是什么？")]),a._v(" "),t("p",[a._v("在ElasticSearch中索引数据时，数据由为索引定义的Analyzer在内部进行转换。 分析器由一个Tokenizer和零个或多个TokenFilter组成。编译器可以在一个或多个CharFilter之前。分析模块允许您在逻辑名称下注册分析器，然后可以在映射定义或某些API中引用它们。")]),a._v(" "),t("p",[a._v("Elasticsearch附带了许多可以随时使用的预建分析器。或者，您可以组合内置的字符过滤器，编译器和过滤器器来创建自定义分析器。")]),a._v(" "),t("h2",{attrs:{id:"_18-什么是elasticsearch中的编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-什么是elasticsearch中的编译器"}},[a._v("#")]),a._v(" "),t("strong",[a._v("18.什么是ElasticSearch中的编译器？")])]),a._v(" "),t("p",[a._v("编译器用于将字符串分解为术语或标记流。一个简单的编译器可能会将字符串拆分为任何遇到空格")]),a._v(" "),t("p",[a._v("或标点的地方。Elasticsearch有许多内置标记器，可用于构建自定义分析器。")]),a._v(" "),t("h2",{attrs:{id:"_19-什么是elasticsearch中的过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-什么是elasticsearch中的过滤器"}},[a._v("#")]),a._v(" "),t("strong",[a._v("19.什么是ElasticSearch中的过滤器？")])]),a._v(" "),t("p",[a._v("数据由Tokenizer处理后，在编制索引之前，过滤器会对其进行处理。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"image-20230516151144054","data-src":s(563),loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"_20-启用属性-索引和存储的用途是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-启用属性-索引和存储的用途是什么"}},[a._v("#")]),a._v(" 20.启用属性，索引和存储的用途是什么？")]),a._v(" "),t("p",[a._v("enabled属性适用于各类ElasticSearch特定/创建领域，如index和size。用户提供的字段没有“已启用”属性。 存储意味着数据由Lucene存储，如果询问，将返回这些数据。")]),a._v(" "),t("p",[a._v("存储字段不一定是可搜索的。默认情况下，字段不存储，但源文件是完整的。因为您希望使用默认值(这是有意义的)，所以不要设置store属性 该指数属性用于搜索。")]),a._v(" "),t("p",[a._v("索引属性只能用于搜索。只有索引域可以进行搜索。差异的原因是在分析期间对索引字段进行了转换，因此如果需要的话，您不能检索原始数据。")])])}),[],!1,null,null,null);_.default=v.exports},563:function(a,_,s){a.exports=s.p+"assets/img/image-20230516151144054.3c55aa83.png"}}]);
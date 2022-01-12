<script>
const title = "卢山的个人简历";
const images = {
  avatar:
      "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/avatar.jpg",
  profile: "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/profile.svg",
  coding:
      "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/coding.svg",
  working:
      "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/working.svg",
  education:
      "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/education.svg",
  ideas:
      "https://cdn.jsdelivr.net/gh/LuShan123888/Resume@gh-pages//static/images/ideas.svg",
};
const info = [
  {
    title: "姓名",
    value: "卢山",
  },
  {
    title: "年龄",
    value: "21",
  },
  {
    title: "性别",
    value: "男",
  },
  {
    title: "学历",
    value: "2022届本科毕业生",
  },
  {
    title: "应聘岗位",
    value: "后端开发工程师",
  },
  {
    title: "个人邮箱",
    value: "lushan123888@163.com",
  },
  {
    title: "个人网站",
    value:
        "<a href='https://lushan.tk' target='_blank' style='text-decoration:none;'>https://lushan.tk</a>",
  },
];
const skills = [
  "熟悉 Java 基础知识，对多线程，JVM 有一定的了解。",
  "熟悉 MySQL 索引、事务等。了解 Redis，Kafka 等中间件。",
  "熟悉 MyBatis，Spring Boot，Spring Security 框架的使用和基本原理。",
  "熟悉 HTML、CSS、JavaScript 基本语法，有 Vue 框架的使用经验。",
  "了解 Linux 基本命令，会使用 Docker 打包和部署项目。",
];
const projects = [
  {
    name: "京东（北京）- 后端开发工程师",
    content: [
      {
        title: "项目描述",
        subtitle:
            "本人参与了 JWMS 项目的研发任务。该项目是以京东自研物流管理软件为核心，结合京东自营仓储物流管理经验，为企业提供的全方位电商物流仓储解决方案。该项目由包括运营端，管理端和操作端，其中操作端模块包括基础数据，入库业务，出库业务，在库业务，异常中心，报表管理等。"
            + "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JWMS 基于 SSM 框架，使用 JSF 实现微服务架构，数据层为 MySQL 集群，整合 JMQ，JIMDB 等自研中间件，以及使用 JDOS 实现项目的部署和监控。",
        list: [],
      },
      {
        title: "主要工作内容",
        subtitle: "",
        list: [
          "管理端数据隔离：管理员通过管理端各模块的查询接口可以获取不属于其管辖仓库的相关配置数据，所以需要根据管理员的操作权限实现基于仓库级别的数据隔离。我通过 Redis，Spring AOP 以及 MyBatis 拦截器实现该需求，也自定义注解以简化后续的开发任务。",
          "订单预组波处理：为提高拣货效率，需要将订单合并处理，所以需要对大量订单根据指定的筛选条件和分组维度进行汇总。我通过 SQL 语句和集合运算，查询和过滤订单信息，使用 Stream 流汇总并生成树状结构。最终实现预组波功能，提高组波的效率。"
        ],
      },
    ],
  },
  {
    name: "“光光爱“微信小程序后台管理系统（Spring Boot）",
    content: [
      {
        title: "项目描述",
        subtitle:
            "“光光爱”是利用互联网平台优势解决用餐浪费和小额捐赠的微信小程序。该项目包含光盘打卡，公益宣传，排行榜，爱心捐赠，商城兑换等功能。于2020年9月上线，现有团队成员30余人，用户1000+，入驻商家10+。",
        list: [],
      },
      {
        title: "职责描述",
        subtitle:
            "本人负责“光光爱“微信小程序的后台管理系统的开发任务，主要的工作成果包括整合 Spring Security 框架实现用户登录与鉴权功能，建立 RBAC 模型完成权限管理模块，以及使用 Spring AOP 与反射新增了风险操作记录模块。",
        list: [],
      },
    ],
  },
];
const education = [
  {
    title: "所在院校",
    value: "华东交通大学",
  },
  {
    title: "主修专业",
    value: "软件工程",
  },
  {
    title: "在读时间",
    value: "2018年09月 - 2022年06月",
  },
  {
    title: "绩点",
    value: "3.19",
  },
  {
    title: "相关课程",
    value:
        "Java语言程序设计、离散数学、数据库原理、数据结构、算法设计与分析、计算机网络、操作系统、编译原理、软件工程",
  },
  {
    title: "英语水平",
    value: " CET4",
  },
  {
    title: "荣誉奖项",
    value:
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 计算机软件著作权登记证书。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 第一届5G“短视频+“创新创业大赛三等奖<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 华东交通大学ACM“双基”程序设计竞赛三等奖",
  },
];
const others = [
  "拥有大型互联网公司的实习经历，具有良好的表达与沟通能力，积极主动，对工作尽心尽责。",
  "一名编程爱好者，自学能力强，会定期记录学习笔记并发布于<a href='https://softwaremagic.lushan.tech' target='_blank' style='text-decoration:none;'>个人网站</a>中。",
];

export default {
  title,
  images,
  info,
  skills,
  projects,
  education,
  others,
};
</script>
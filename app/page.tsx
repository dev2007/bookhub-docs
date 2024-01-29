"use client";
import {
  Layout,
  Carousel,
  Typography,
  Space,
  Card,
  CardGroup,
  Image as SemiImage,
  Avatar,
  Popover,
  Empty,
  Tooltip,
} from "@douyinfe/semi-ui";

import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./diy.css"

const { Header, Content, Footer } = Layout;

const { Title, Paragraph, Text } = Typography;

const imgList = ["/bg1.jpg", "/bg2.jpg", "/bg3.jpg"];

const textList = [
  [
    "ElasticSearch",
    "一个分布式、RESTful 风格的搜索和数据分析引擎，能够解决不断涌现出的各种用例。",
    "Elasticsearch 中文文档，助力你更好的学习",
    "/logo/elasticsearch.ico",
  ],
  [
    "Micronaut",
    "基于 JVM 的现代全栈框架，用于构建模块化、易于测试的微服务和无服务器应用程序",
    "Micronaut 中文文档，助力你更好的掌握云原生",
    "/logo/micronaut.ico",
  ],
  [
    "Azeroth",
    "艾泽拉斯魔兽世界服务端",
    "Azeroth 中文文档，帮助你快速搭建自己的魔兽世界服务器",
    "/logo/azeroth.ico",
  ],
];

const cardList = [
  {
    title: "Elasticsearch",
    hot: true,
    logo: "/logo/elasticsearch.ico",
    link: { href: "https://elasticsearch.bookhub.tech" },
    cover: "/c8.jpg",
    star: "https://img.shields.io/github/stars/dev2007/elasticsearch-doc?color=%2321BAB5&label=Stars&logo=github",
    fork: "https://img.shields.io/github/forks/dev2007/elasticsearch-doc?color=%2321BAB5&label=Forks&logo=github",
    desc: "分布式、RESTful 风格的搜索和数据分析引擎—— Elasticsearch 中文文档",
  },
  {
    title: "Micronaut",
    hot: true,
    logo: "/logo/micronaut.ico",
    link: { href: "https://micronaut.bookhub.tech/" },
    cover: "/c2.jpg",
    star: "https://img.shields.io/github/stars/dev2007/micronaut-doc?label=Stars&logo=github&color=black",
    fork: "https://img.shields.io/github/forks/dev2007/micronaut-doc?label=Forks&logo=github&color=black",
    desc: "基于 JVM 的现代全栈框架—— Micronaut 中文文档",
  },
  {
    title: "MySQL",
    hot: false,
    logo: "/logo/mysql.ico",
    link: { href: "https://mysql.bookhub.tech/" },
    cover: "/c3.jpg",
    star: "https://img.shields.io/github/stars/dev2007/mysql8-manual?label=Stars&logo=github&color=%23396D94",
    fork: "https://img.shields.io/github/forks/dev2007/mysql8-manual?label=Forks&logo=github&color=%23396D94",
    desc: "最流行的关系型数据库管理系统之一—— MySQL 中文文档",
  },
  {
    title: "PAC4j",
    hot: false,
    logo: "/logo/pac4j.ico",
    link: { href: "https://pac4j.bookhub.tech/" },
    cover: "/c4.jpg",
    star: "https://img.shields.io/github/stars/dev2007/pac4j-docs?label=Stars&logo=github&color=black",
    fork: "https://img.shields.io/github/forks/dev2007/pac4j-docs?label=Forks&logo=github&color=black",
    desc: "支持多种协议多种框架的权限引擎—— PAC4j 中文文档",
  },
  {
    title: "Azeroth",
    hot: true,
    logo: "/logo/azeroth.ico",
    link: { href: "https://azeroth.bookhub.tech/" },
    cover: "/c5.jpg",
    star: "https://img.shields.io/github/stars/dev2007/azerothcore-doc?label=Stars&logo=github&color=black",
    fork: "https://img.shields.io/github/forks/dev2007/azerothcore-doc?label=Forks&logo=github&color=black",
    desc: "Azeroth 魔兽世界服务端部署中文文档",
  },
  {
    title: "Tesla",
    hot: false,
    logo: "/logo/tesla.ico",
    link: { href: "https://tesla.bookhub.tech/" },
    cover: "/c6.jpg",
    star: "https://img.shields.io/github/stars/dongfangzan/tesla-java-sdk?style=social",
    fork: "https://img.shields.io/github/forks/dongfangzan/tesla-java-sdk?label=Forks&style=social",
    desc: "Tesla API 中文文档",
  },
  {
    title: "CPA",
    hot: false,
    logo: "/logo/cpa.png",
    link: { href: "https://cpa.dongfangzan.cn/" },
    cover: "/c7.jpg",
    star: "",
    fork: "",
    desc: "CPA 学习之旅",
  },
];

export default function Home() {
  const router = useRouter();
  const githubOnClick = () => {
    router.push("https://github.com/mortise-and-tenon");
  };

  const giteeOnClick = () => {
    router.push("https://gitee.com/mortise-and-tenon");
  };

  const blogOnClick = () => {
    router.push("https://www.luansheng.fun");
  };

  return (
    <Layout className={styles.fullscreen}>
      <Header className={styles.header}>
        <div className={styles.nav}>
          <a href="https://www.bookhub.tech" className={styles.navLink}>
            <div className={styles.navHeader}>
              <Image src="/favicon.ico" alt="logo" width={36} height={36} />
              <div className={styles.menu}>
                <p className={styles.first}>Book</p>
                <p className={styles.second}>Hub</p>
                <p className={styles.title}>中文文档库</p>
              </div>
            </div>
          </a>
          <div className={styles.navHeader}>
            <Tooltip
              style={{
                backgroundColor: "white",
              }}
              content={<Text>Gitee开源项目</Text>}
              arrowPointAtCenter={false}
              position="bottom"
            >
              <Avatar
                alt="gitee"
                size="small"
                src="/gitee.png"
                className={styles.navGitee}
                onClick={giteeOnClick}
              />
            </Tooltip>
            <Tooltip
              style={{
                backgroundColor: "white",
              }}
              content={<Text>GitHub开源项目</Text>}
              arrowPointAtCenter={false}
              position="bottom"
            >
              <Avatar
                alt="github"
                size="small"
                src="/github.png"
                className={styles.navGitHub}
                onClick={githubOnClick}
              />
            </Tooltip>
            {/* <Tooltip
              style={{
                backgroundColor: "white",
              }}
              content={<Text>博客</Text>}
              arrowPointAtCenter={false}
              position="bottom"
            >
              <Avatar
                alt="blog"
                size="small"
                src="/blog.png"
                className={styles.navBlog}
                onClick={blogOnClick}
              />
            </Tooltip> */}

            <Popover
              content={
                <Empty
                  title={"公众号：程序员爱读书"}
                  image={
                    <SemiImage
                      src="https://images.bookhub.tech/mp/mp.png"
                      alt="公众号"
                      width={200}
                      height={200}
                    />
                  }
                  darkModeImage={
                    <SemiImage
                      src="https://images.bookhub.tech/mp/mp.png"
                      alt="公众号"
                      width={200}
                      height={200}
                    />
                  }
                  description="关注公众号，阅读更多的技术文章"
                  style={{
                    width: 240,
                    margin: "0 auto",
                    display: "flex",
                    padding: 20,
                  }}
                />
              }
            >
              <Avatar
                alt="wechat"
                size="small"
                src="/wechat_logo.png"
                className={styles.navWechat}
              />
            </Popover>
          </div>
        </div>
      </Header>
      <Content className={styles.content}>
        <Carousel className={styles.carousel} theme="dark">
          {imgList.map((src, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${src})`,
                }}
              >
                <Space
                  vertical
                  align="start"
                  spacing="medium"
                  className={styles.titleStyle}
                >
                  <Image
                    src={textList[index][3]}
                    alt="logo"
                    width={36}
                    height={36}
                  />
                  <Title heading={2} className={styles.colorStyle}>
                    {textList[index][0]}
                  </Title>
                  <Space vertical align="start">
                    <Paragraph className={styles.colorStyle}>
                      {textList[index][1]}
                    </Paragraph>
                    <Paragraph className={styles.colorStyle}>
                      {textList[index][2]}
                    </Paragraph>
                  </Space>
                </Space>
              </div>
            );
          })}
        </Carousel>
        <CardGroup className={styles.booklist}>
          {cardList.map((v, idx) => (
            <Card
              key={idx}
              shadows="hover"
              cover={
                <Image src={v.cover} alt="cover" width={150} height={250} />
              }
              title={
                <Text
                  icon={<SemiImage src={v.logo} width={24} height={24} />}
                  type={v.hot ? "danger" : undefined}
                  strong={v.hot}
                >
                  <a style={v.hot ? { color: "red" } : {}} href={v.link.href}>
                    {v.title}
                  </a>
                </Text>
              }
              headerLine={false}
              className={styles.card}
              headerExtraContent={
                <Text link={v.link}>👉立即阅读 {v.hot ? "🔥" : ""}</Text>
              }
            >
              <div>
                <div>
                  <SemiImage
                    className={styles.githubImg}
                    src={v.star}
                    alt="star"
                  />
                  <SemiImage
                    className={styles.githubImg}
                    src={v.fork}
                    alt="fork"
                  />
                </div>
                <Text>
                <a href={v.link.href}>{v.desc}</a>
                </Text>
              </div>
            </Card>
          ))}
        </CardGroup>
      </Content>
      <Footer className={styles.footer}>
        <a href="https://luansheng.fun" className={styles.copyright}>
          ©2023 Mortnon.
        </a>
      </Footer>
    </Layout>
  );
}

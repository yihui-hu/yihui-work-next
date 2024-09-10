interface WorkData {
  img_url: string;
  id: string;
  external: boolean;
  year: string;
  category: string;
  width: number;
  height: number;
  url: string;
}

const works: WorkData[] = [
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/cards/arena-card.webp",
    id: "are:na",
    external: false,
    year: "2023–",
    category: "code design",
    width: 1180 / 3,
    height: 800 / 3,
    url: "/works/arena"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/figma_plugin.webp",
    id: "competitive design",
    external: true,
    year: "2023–",
    category: "code design",
    width: 412 / 1.5,
    height: 583 / 1.5,
    url: "/works/figma-competitive-design-plugin"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/typo_super_bubble.png",
    id: "super bubble",
    external: true,
    year: "2024",
    category: "code design",
    width: 411 / 1.8,
    height: 665 / 1.8,
    url: "https://superbubble.vercel.app"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/yihuihu.webp",
    id: "yihuihu.com",
    external: true,
    year: "2024",
    category: "code design",
    width: 1512 / 3.3,
    height: 944 / 3.3,
    url: "https://yihuihu.com"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/personas_work_image.png",
    id: "personas",
    external: true,
    year: "2024",
    category: "design",
    width: 412,
    height: 249,
    url: "https://yihui.work/personas"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/henesys_tags.webp",
    id: "henesys",
    external: false,
    year: "2022–23",
    category: "code design",
    width: 412,
    height: 254,
    url: "/works/henesys"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/y0p_veiled.webp",
    id: "y0p",
    external: false,
    year: "2023",
    category: "code",
    width: 412,
    height: 254,
    url: "/works/y0p"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/pidgin.webp",
    id: "pidgin",
    external: false,
    year: "2023",
    category: "code",
    width: 412 / 1.4,
    height: 367 / 1.4,
    url: "/works/pidgin"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/arith_desktop.webp",
    id: "arith.js",
    external: false,
    year: "2022",
    category: "code",
    width: 412,
    height: 254,
    url: "/works/arith"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/famicase.webp",
    id: "famicase",
    external: false,
    year: "2022",
    category: "art design",
    width: 412,
    height: 287,
    url: "/works/famicase"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/pokesearch_duo.webp",
    id: "pokéSearch",
    external: false,
    year: "2022",
    category: "code",
    width: 412 / 1.2,
    height: 412 / 1.2,
    url: "/works/pokesearch"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/s-i-l_grid.webp",
    id: "sites-i-like",
    external: false,
    year: "2022",
    category: "code",
    width: 412,
    height: 254,
    url: "/works/s-i-l"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/cards/yhhu-xyz-card.webp",
    id: "yhhu.xyz",
    external: false,
    year: "2021–22",
    category: "code design art",
    width: 2632 / 6,
    height: 1704 / 6,
    url: "/works/yhhu-xyz"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/goodreads_overview.webp",
    id: "goodreads exercise",
    external: false,
    year: "2021",
    category: "design",
    width: 412,
    height: 257,
    url: "/works/goodreads"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/20XX_poster.webp",
    id: "20XX flora & fauna",
    external: false,
    year: "2020",
    category: "art design",
    width: 412 / 1.4,
    height: 412 / 1.4,
    url: "/works/20XX"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/cards/zinedef-card.webp",
    id: "ZINEDEF",
    external: false,
    year: "2019–21",
    category: "art design",
    width: 1219 / 3,
    height: 889 / 3,
    url: "/works/ZINEDEF"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/everyday_trash.webp",
    id: "everyday____",
    external: false,
    year: "2017–18",
    category: "art",
    width: 412,
    height: 274,
    url: "/works/everyday__"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/graphite_allegory.webp",
    id: "graphite repros",
    external: false,
    year: "2017–",
    category: "art",
    width: 412 / 1.5,
    height: 586 / 1.5,
    url: "/works/g-r"
  },
  {
    img_url: "https://yihui-work.s3.us-east-2.amazonaws.com/misc_water.webp",
    id: "misc.",
    external: false,
    year: "2017–",
    category: "design art",
    width: 412 / 1.5,
    height: 412 / 1.5,
    url: "/works/misc"
  },
];

let worksReversed = works.toReversed();

export { works, worksReversed };

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompanyInfo, Milestone, PortfolioItem, ContactDetails } from './types';

const goodFieldsImages = [
  '/good-fields/g1.png',
  '/good-fields/g2.png',
  '/good-fields/g3.png',
  '/good-fields/g4.png',
  '/good-fields/g5.png',
  '/good-fields/g6.png',
  '/good-fields/g7.png',
  '/good-fields/g8.png',
  '/good-fields/g9.png',
  '/good-fields/g10.png'
];

export const companyInfo: CompanyInfo = {
  name: "益世界",
  englishName: "Eworld",
  founded: "2012年",
  slogan: "用好游戏创造快乐",
  quote: "设计不仅仅是视觉的表面呈现，更是用视觉构建快乐的一座桥梁。",
  quoteAuthor: "益世界设计中心总监",
  introParagraphs: [
    "益世界（Eworld）成立于2012年，是中国领先的移动游戏发行商与研发商之一。作为精品数字文创的笃行者，我们始终秉承「用好游戏创造快乐」的理念，深耕模拟经营、角色扮演、策略等多元赛道，成功打造和发行了多款风靡全球 of 移动游戏大作。",
    "益世界设计中心（Eworld Design Center）作为公司创意的核心引擎，汇聚了百余位业内资深的设计艺术家、视觉包装专家以及产品体验设计师。我们致力于打磨出极具艺术与商业双重价值的游戏视觉设计体系，并制定了严苛的界面、平面及多媒体商业包装标准。多年来，我们先后以《商道高手》、《我是大东家》、《这城有良田》等千万级名作，惊艳了无数玩家的心灵，用视觉美学赋能好游戏的无限可能。"
  ],
  features: [
    {
      title: "卓越视觉美学",
      description: "从交互UI到平面大KV，用极致匠心打磨每一张画作",
      icon: "Palette"
    },
    {
      title: "精品出海与多元化",
      description: "海外多点开花，建立全球多元视觉设计与多端匹配管线",
      icon: "Globe"
    },
    {
      title: "数字文创创新",
      description: "整合三维、AI、交互等前沿技术，赋能好游戏的无限未来",
      icon: "Sparkles"
    }
  ]
};

export const milestones: Milestone[] = [
  {
    id: "m1",
    year: "2012",
    title: "公司创立",
    description: "",
    expandDetails: []
  },
  {
    id: "m2",
    year: "2013 - 2015",
    title: "首创联运分发",
    description: "行业首创超级SDK分发技术和服务体系，打通游戏产业链的“毛细血管”。",
    expandDetails: []
  },
  {
    id: "m3",
    year: "2016 - 2017",
    title: "构建独代发行",
    description: "开拓独代发行业务，产品布局回合、MMO、卡牌等游戏类型。为玩家打造的手游精选平台——1号玩家APP上线。",
    expandDetails: []
  },
  {
    id: "m4",
    year: "2018 - 2019",
    title: "开创模拟经商赛道",
    description: "从独代发行到孵化CP，赛道差异化破局，并成功孵化《金币大富翁》、《商道高手》，两款产品均实现月流水破亿；同步搭建自研团队，成为集研发孵化、发行运营一体化的综合型游戏公司。",
    expandDetails: []
  },
  {
    id: "m5",
    year: "2020 - 2022",
    title: "品牌升级，进军海外",
    description: "从“益玩游戏”升级为“益世界”，以东南亚及日韩为起点，战略进军海外市场；\n以原生产品开拓全球化，《拜托了社长》荣登日本IOS免费榜TOP3，畅销榜TOP10；\n2021年成功孵化古风题材模拟经商标杆产品《我是大东家》。",
    expandDetails: []
  },
  {
    id: "m6",
    year: "2023 - 2024",
    title: "双端发行，领跑小游戏",
    description: "业内率先践行“APP+小游戏”的双端发行模式，并卓有成效，多款标杆产品长年位列小游戏畅销排行榜前列；\n2023年成功孵化模拟经营+SLG融合玩法产品《这城有良田》，核心赛道产品矩阵形成，成为模拟经营品类头部厂商。",
    expandDetails: []
  },
  {
    id: "m7",
    year: "2025 - 2026",
    title: "品类突破，孵化升级",
    description: "夯实赛道优势，追求品类突破，扩大区域推进全球，孵化模式持续升级，《Lands of Jail》《异世界慢生活》《疯狂水世界》等多款创新品类产品，在全球多点开花。",
    expandDetails: []
  }
];

export const portfolioItems: PortfolioItem[] = [
  // ================= 品牌作品集 (brand) =================
  {
    id: "b1",
    title: "益世界品牌主KV「用创意重塑无限」",
    subtitle: "益世界集团年度主视觉推广海报",
    category: "brand",
    tags: ["品牌视觉", "3D渲染", "字形设计"],
    description: "本案围绕企业理念「用好游戏创造快乐」，运用折射水晶、动感蓝紫光斑与三维极简立体字相互穿插，营造神秘、包容、向上折叠的视觉意境。整体文字排版高度提炼，富有律动力与深邃空间感。",
    details: {
      role: "主视觉主设计师 · 视觉指导",
      team: "益世界品牌设计中心 - 创意二组",
      software: "Photoshop, Cinema 4D, Illustrator",
      date: "2026.03"
    },
    imageType: "vector",
    colors: { primary: "#4f46e5", secondary: "#3b82f6", accent: "#a855f7", gradient: "from-[#4f46e5] via-[#a855f7] to-[#3b82f6]" },
    aspectRatio: "portrait"
  },
  {
    id: "b2",
    title: "「小益小梦」12款职业版潮流表情包",
    subtitle: "品牌吉祥物 IP 全方位升级设计",
    category: "brand",
    tags: ["IP设计", "三维建模", "表情设计"],
    description: "将益世界吉祥物「小益小梦」融合现代职场职业特征，设计出黑客、策划、产品经理等12生动款三维渲染表情。用Q弹圆润的体态与炫彩高光的流延材质完美调配，打造富有沟通温度的衍生爆款。",
    details: {
      role: "IP设计师",
      team: "IP与潮玩开发实验室",
      software: "Blender, Substance Painter, ZBrush",
      date: "2025.11"
    },
    imageType: "abstract",
    colors: { primary: "#6366f1", secondary: "#8b5cf6", accent: "#ec4899", gradient: "from-[#6366f1] to-[#ec4899]" },
    aspectRatio: "square"
  },
  {
    id: "b3",
    title: "益世界 10周年盛典品牌视觉规范",
    subtitle: "盛典现场宣发与艺术装置大视觉",
    category: "brand",
    tags: ["活动KV", "版式研究", "包装规范"],
    description: "以「益路同行，拾光绽放」为创作导向，创造由金银色调、高饱和度渐变炫光与「10」重叠而生的几何流线艺术。版面融合极简瑞士国际主义风格，粗体无衬线中英文撞色排版极具视觉冲击力。",
    details: {
      role: "创意总监",
      team: "益世界公关视觉部门",
      software: "Illustrator, After Effects",
      date: "2025.07"
    },
    imageType: "geometry",
    colors: { primary: "#312e81", secondary: "#4338ca", accent: "#e0f2fe", gradient: "from-[#312e81] via-[#4338ca] to-[#1e1b4b]" },
    aspectRatio: "landscape"
  },
  {
    id: "b4",
    title: "「小益小梦」3D赛博潮玩盲盒概念",
    subtitle: "限定机甲潮玩潮流玩具设定",
    category: "brand",
    tags: ["潮玩开发", "3D工业渲染", "包装设计"],
    description: "将中国傳統生肖元素注入赛博机械外骨骼，设计了全系列「小益小梦」潮玩玩具三维草案。结合磨砂哑光ABS材料与透明发光树脂，完美展示出硬核机械美学与圆润小巧身躯的极致反差萌。",
    details: {
      role: "主潮流玩具师",
      team: "IP衍生部",
      software: "Cinema 4D, KeyShot, Photoshop",
      date: "2026.01"
    },
    imageType: "abstract",
    colors: { primary: "#1e1b4b", secondary: "#312e81", accent: "#f43f5e", gradient: "from-[#1e1b4b] to-[#f43f5e]" },
    aspectRatio: "portrait"
  },
  {
    id: "b5",
    title: "益世界 品牌VI规范使用手册指南",
    subtitle: "品牌视觉系统再定义与重塑",
    category: "brand",
    tags: ["VI系统", "平面画册", "排版网格"],
    description: "为了适应多元化、多终端和高清数字端展现，益世界重制了VI系统。本规范囊括了黄金比例网格下的Logo再绘制，规定了以星空紫、极速蓝为主色调的代码规范，并开创了一套全面的中英文标志混排模板。",
    details: {
      role: "资深平面设计师",
      team: "品牌管理与品牌中心",
      software: "InDesign, Illustrator",
      date: "2025.02"
    },
    imageType: "geometry",
    colors: { primary: "#0b0f19", secondary: "#1e1b4b", accent: "#4f46e5", gradient: "from-[#0b0f19] to-[#4f46e5]" },
    aspectRatio: "landscape"
  },
  {
    id: "b6",
    title: "「小益小梦」异时空奇幻换装周历插画",
    subtitle: "12个月的主题情境概念海报",
    category: "brand",
    tags: ["精细插画", "角色设计", "日历周边"],
    description: "设计融合西方朋克、和风山水和极简黑白线条，展现「小益小梦」在12个充满奇妙幻想异世界中探险的绘卷故事。整体色系对比极度强烈，以精妙的插画细部来吸引观者的探索欲望。",
    details: {
      role: "美术主笔",
      team: "插画原画组",
      software: "Photoshop, iPad Procreate",
      date: "2025.10"
    },
    imageType: "vector",
    colors: { primary: "#db2777", secondary: "#9333ea", accent: "#fdf2f8", gradient: "from-[#db2777] to-[#9333ea]" },
    aspectRatio: "portrait"
  },
  {
    id: "b7",
    title: "益世界设计部校招「创无界」视觉海报",
    subtitle: "2026高校美术英才招揽主视觉",
    category: "brand",
    tags: ["海报设计", "拼贴硬核", "文字排版"],
    description: "采用超现实主义拼贴手法、手写涂鸦字体、大胆的液态金属元素与三维线稿相互堆叠撕裂，彰显年轻一代设计师天马行空、不循常规的态度。撞色排版具有强烈的国际先锋极简主义印记。",
    details: {
      role: "主视觉设计师",
      team: "设计中心 - 平面创意组",
      software: "Photoshop, Illustrator",
      date: "2026.04"
    },
    imageType: "abstract",
    colors: { primary: "#090d16", secondary: "#10b981", accent: "#f59e0b", gradient: "from-[#10b981] via-[#090d16] to-[#f59e0b]" },
    aspectRatio: "portrait"
  },
  {
    id: "b8",
    title: "益世界 环保国风杜邦纸周边袋",
    subtitle: "限定手提包潮流穿搭周边",
    category: "brand",
    tags: ["实物打样", "周边设计", "材质探索"],
    description: "精选轻盈而坚韧防撕裂的环保面料「杜邦纸」，将公司Logo与国漫山海祥云以暗纹浮雕加鎏金工艺形式跃然其上。水洗磨砂感的褶皱配以粗黑工业风编织手柄，打造先锋机能时尚单品。",
    details: {
      role: "产品物料设计师",
      team: "周边礼品制作部",
      software: "Photoshop, Rhino, Illustrator",
      date: "2025.04"
    },
    imageType: "vector",
    colors: { primary: "#d97706", secondary: "#b45309", accent: "#fef3c7", gradient: "from-[#d97706] to-[#fef3c7]" },
    aspectRatio: "square"
  },
  {
    id: "b9",
    title: "「小益小梦」极速飞跃滑板周边设计",
    subtitle: "益世界极限运动艺术联名滑板",
    category: "brand",
    tags: ["运动单品", "街头艺术", "色彩碰撞"],
    description: "融合街头涂鸦与赛博蓝紫色荧光线条，以巨大的俯冲「小益小梦」半透光影作为板底主画，高张力的喷漆质感 and 滴墨印记。专为品牌年轻化宣发拍摄与潮流青年群体定制。",
    details: {
      role: "潮流美学指导",
      team: "先锋视觉实验室",
      software: "Photoshop, Illustrator, Keyshot",
      date: "2025.08"
    },
    imageType: "abstract",
    colors: { primary: "#8b5cf6", secondary: "#ec4899", accent: "#06b6d4", gradient: "from-[#8b5cf6] via-[#ec4899] to-[#06b6d4]" },
    aspectRatio: "portrait"
  },
  {
    id: "b10",
    title: "益世界 品牌专属字形「益世黑体」",
    subtitle: "专有品牌美术字体开发案",
    category: "brand",
    tags: ["字体设计", "品牌识别", "字模排版"],
    description: "由设计中心主导，为品牌特制的中英文常用字库。字形整体收紧中宫、抬高横画重心，其折笔处采用流畅的微斜圆弧倒角。保留黑体庄严挺拔感的同时，赋予字体科技感与人文温度。",
    details: {
      role: "字形主设计师",
      team: "字体研究所 x 设计中心",
      software: "FontLab, Glyphs, Illustrator",
      date: "2026.02"
    },
    imageType: "geometry",
    colors: { primary: "#111827", secondary: "#374151", accent: "#ffffff", gradient: "from-[#111827] to-[#1f2937]" },
    aspectRatio: "landscape"
  },
  {
    id: "b11",
    title: "益世界 精英开发者沙龙主KV",
    subtitle: "面向全球开发者的设计峰会KV",
    category: "brand",
    tags: ["大会KV", "抽象极简", "發光渐变"],
    description: "提取「连接、绽放、共生」概念，用数万个微型晶莹3D光粒子聚合构成璀璨流动的蓝色星河，文字部分采用极其端正的高逼格无衬线字体，字间距刻意拉宽，传递严谨前沿的数字学术氛围。",
    details: {
      role: "主场景概念师",
      team: "益世界公关传播组",
      software: "Photoshop, Houdini",
      date: "2025.09"
    },
    imageType: "geometry",
    colors: { primary: "#051126", secondary: "#0284c7", accent: "#38bdf8", gradient: "from-[#051126] to-[#02c2e8]" },
    aspectRatio: "landscape"
  },
  {
    id: "b12",
    title: "「小益小梦」太空探险概念银漆海报",
    subtitle: "宇航探索主题的创意衍生插画",
    category: "brand",
    tags: ["科幻质感", "金属喷涂", "IP衍生"],
    description: "为响应科技科普项目，我们创作了穿着厚重银色宇航服的太空人「小益小梦」。作品高度关注金属涂层的反光逻辑、镜面玻璃所反射的绚丽星云。采用高阶哑光特殊银墨进行物理排版，具有浓郁未来感。",
    details: {
      role: "数字绘景师",
      team: "IP与潮玩开发实验室",
      software: "Photoshop, Blender",
      date: "2025.12"
    },
    imageType: "abstract",
    colors: { primary: "#404040", secondary: "#737373", accent: "#f3f4f6", gradient: "from-[#404040] via-[#d4d4d8] to-[#171717]" },
    aspectRatio: "portrait"
  },
  {
    id: "b13",
    title: "益世界2026春季时尚工装刺绣款",
    subtitle: "员工专属限量创意春服体系",
    category: "brand",
    tags: ["服装裁剪", "刺绣质感", "周边设计"],
    description: "本期高定工装采用洗水厚实黑色帆布，剪裁干净干练。衣袖两侧采用多达三万针的高精密彩色五金刺绣，浮雕式描绘「小益小梦」在太空中傲立的坚毅神貌。兼具日常实用性和前沿街头潮流质感。",
    details: {
      role: "新服饰设计师",
      team: "企业文化运营组",
      software: "Marvelous Designer, Illustrator",
      date: "2026.04"
    },
    imageType: "vector",
    colors: { primary: "#0f172a", secondary: "#1e293b", accent: "#cbd5e1", gradient: "from-[#0f172a] to-[#334155]" },
    aspectRatio: "square"
  },
  {
    id: "b14",
    title: "益世界 集团数字展示巨幕背景墙",
    subtitle: "集团总部大堂多媒体互动背景",
    category: "brand",
    tags: ["多媒体", "流体粒子", "UI导向"],
    description: "设计的一款在总部大厅超宽多点触控拼接大屏上展演的流体互动画面。提取蓝紫色系的重力流动机制，指尖滑过会幻化为飘扬的折纸彩带与漫天群星，在自然静止时极度雅致且不夺主视觉。",
    details: {
      role: "动态媒介总监",
      team: "多媒体技术开发组",
      software: "After Effects, WebGL, Cinema 4D",
      date: "2026.01"
    },
    imageType: "abstract",
    colors: { primary: "#18004c", secondary: "#420075", accent: "#c084fc", gradient: "from-[#18004c] via-[#420075] to-[#c084fc]" },
    aspectRatio: "landscape"
  },
  {
    id: "b15",
    title: "端午节定制茶礼盒「山海益游」外包装",
    subtitle: "限量版中国风员工福利礼盒",
    category: "brand",
    tags: ["包装设计", "国风插画", "烫金工艺"],
    description: "外箱选用深木色环保硬纸压合，盒盖将古籍《山海经》内的玄黄神兽与龙舟文化相融合，手绘出波澜壮阔的流云波涛。使用先进的激光流光烫金工艺、烫红金封印，细节华贵、开箱体验仪式感拉满。",
    details: {
      role: "国风包装美学总监",
      team: "集团礼品定制设计组",
      software: "Photoshop, Illustrator, CAD",
      date: "2025.04"
    },
    imageType: "vector",
    colors: { primary: "#047857", secondary: "#065f46", accent: "#fdefc3", gradient: "from-[#047857] via-[#fdefc3] to-[#065f46]" },
    aspectRatio: "square"
  },
  {
    id: "b16",
    title: "益世界 环保创意咖啡杯套系列",
    subtitle: "「益咖生活」内部咖啡专属杯套",
    category: "brand",
    tags: ["平面媒介", "极极简字母", "牛皮纸色"],
    description: "打破传统插图杯套繁杂感，本案仅采用极高对比度的超大现代黑体排版字母「E」与「W」。大面积保留本色无漂白牛皮纸的纯粹纹理与微小木屑纤维，契合国际绿色减碳的极高环保标准。",
    details: {
      role: "包装主设计师",
      team: "平面创新研究课",
      software: "Illustrator, Mockup Studio",
      date: "2025.03"
    },
    imageType: "geometry",
    colors: { primary: "#78350f", secondary: "#451a03", accent: "#fef3c7", gradient: "from-[#78350f] to-[#f59e0b]" },
    aspectRatio: "square"
  },
  {
    id: "b17",
    title: "益世界 绿色生活低碳倡议海报",
    subtitle: "办公园区公共空间环保宣导海报",
    category: "brand",
    tags: ["排版艺术", "矢量插画", "公益海报"],
    description: "设计上强调留白与呼吸感，利用纤细高脚的字体在画面一角优雅竖排。配以微距树叶脉络的翠绿线描，以冷静、富有诗意和克制的分栏网格，提醒员工低碳办公、绿色生活。",
    details: {
      role: "主设计师",
      team: "平面创意一组",
      software: "Illustrator, InDesign",
      date: "2025.06"
    },
    imageType: "vector",
    colors: { primary: "#064e3b", secondary: "#047857", accent: "#a7f3d0", gradient: "from-[#064e3b] to-[#10b981]" },
    aspectRatio: "portrait"
  },
  {
    id: "b18",
    title: "「小益小梦」金属机甲限定款手办设定",
    subtitle: "品牌潮玩艺术旗舰级别限定手办",
    category: "brand",
    tags: ["3D概念", "科幻炫彩", "手办开发"],
    description: "针对收藏家设计的高端限量款手办。将「小益小梦」的主体结构重新拆解定义，覆以黑曜石冷光机甲外壳与纯金阳极氧化轴承，打造出超越传统软胶玩具质感的工业微雕艺术珍品。",
    details: {
      role: "主潮玩数字雕刻师",
      team: "IP衍生與潮玩开发实验室",
      software: "ZBrush, Maya, Arnold",
      date: "2026.02"
    },
    imageType: "abstract",
    colors: { primary: "#171717", secondary: "#262626", accent: "#fbbf24", gradient: "from-[#171717] via-[#fbbf24] to-[#404040]" },
    aspectRatio: "portrait"
  },
  {
    id: "b19",
    title: "《益世界社会责任报告》精美版式",
    subtitle: "集团2025年社会价值白皮书",
    category: "brand",
    tags: ["排版工程", "数据可视化", "书籍装帧"],
    description: "摆脱传统报告的刻板、冗长，设计组结合了多维矩阵式扁平图表。大字距的无衬线标题和宽阔的无障碍阅读视距，使环保、教育公益等数据以通俗、愉悦、高级的杂志排版样式生动呈现。",
    details: {
      role: "排版主理设计师",
      team: "平面视觉设计一组",
      software: "InDesign, Photoshop",
      date: "2025.12"
    },
    imageType: "geometry",
    colors: { primary: "#1e1b4b", secondary: "#4338ca", accent: "#e0f2fe", gradient: "from-[#1e1b4b] to-[#4f46e5]" },
    aspectRatio: "portrait"
  },
  {
    id: "b20",
    title: "益世界 极简工业风格展会艺术墙",
    subtitle: "精品文创出海展览会特色视觉墙",
    category: "brand",
    tags: ["空间美学", "导视设计", "亚克力雕刻"],
    description: "在主通道位置设立的半遮蔽式亚克力折射打光艺术墙。由益世界品牌像素块重构而生，微弱的多角度蓝紫霓虹折射出的交错偏振光，呈现迷幻而又高度纯美极简的意涵。",
    details: {
      role: "环境展示设计师",
      team: "创意三维应用组",
      software: "Rhino, AutoCAD, KeyShot",
      date: "2025.07"
    },
    imageType: "geometry",
    colors: { primary: "#1e293b", secondary: "#0f172a", accent: "#c084fc", gradient: "from-[#0f172a] via-[#c084fc] to-[#1e293b]" },
    aspectRatio: "landscape"
  },

  // ================= 这城有良田作品集 (good-fields) =================
  {
    id: "g1",
    title: "「这城有良田」上线一周年庆典主KV",
    subtitle: "一周年庆典线上大主图视觉公案",
    category: "good-fields",
    tags: ["古风插画", "角色合集", "欢庆海报"],
    description: "本季主视觉围绕「良田共绘，万家灯火」主题，在古意盎然的宣纸肌理上，描摹县令与全牌核心武将共执酒盏，身后一城繁华升仙灯影的精细大长画。极具细节力与大唐古风美感。",
    details: {
      role: "美术设计指导",
      team: "《这城有良田》视觉组",
      software: "Photoshop, Pen Tablet",
      date: "2024.07"
    },
    imageType: "chinese-ink",
    colors: { primary: "#78350f", secondary: "#b45309", accent: "#fef3c7", gradient: "from-[#78350f] via-[#fef3c7] to-[#b45309]" },
    aspectRatio: "landscape",
    image: goodFieldsImages[0]
  },
  {
    id: "g2",
    title: "武将「薛涛」专属古雅概念插画设计",
    subtitle: "全新传奇名士卡牌角色首发海报",
    category: "good-fields",
    tags: ["国风立绘", "水墨山水", "色彩渐层"],
    description: "薛涛，大唐一代诗家。本画以温润的绯红色调为主干，薛涛身姿倚立于重重晕染的水墨红梅与娟秀楷书诗词之中，衣褶随风流转。将水墨留白之美与女性名仕的哀宛典雅表现得入木三分。",
    details: {
      role: "高级游戏插画师",
      team: "《这城有良田》重火力原画组",
      software: "Photoshop, Procreate",
      date: "2024.09"
    },
    imageType: "chinese-ink",
    colors: { primary: "#9d174d", secondary: "#db2777", accent: "#fbcfe8", gradient: "from-[#9d174d] to-[#db2777]" },
    aspectRatio: "portrait",
    image: goodFieldsImages[1]
  },
  {
    id: "g3",
    title: "「大唐盛世」城池全景透视 isometric 设定",
    subtitle: "核心城池升级过程细节规划图",
    category: "good-fields",
    tags: ["三维还原", "建筑白模", "概念线稿"],
    description: "将中国傳統砖瓦、飞檐结合现代对称工程美学。本案以极其精致的极细纯线稿展示了城池、县衙、茶歇大堂的高、低配升级效果线图，对每瓦一槽、雕梁画栋都进行了严丝合缝的高清三维复位。",
    details: {
      role: "建筑概念概念师",
      team: "《这城有良田》研发中心美术组",
      software: "Cinema 4D, Photoshop, Illustrator",
      date: "2023.11"
    },
    imageType: "geometry",
    colors: { primary: "#1e3a8a", secondary: "#3b82f6", accent: "#bfdbfe", gradient: "from-[#1e3a8a] to-[#bfdbfe]" },
    aspectRatio: "landscape",
    image: goodFieldsImages[2]
  },
  {
    id: "g4",
    title: "「狄仁杰」神捕莅临高精度宣发插画",
    subtitle: "王牌SSR武将公测宣推主画",
    category: "good-fields",
    tags: ["霸道立绘", "硬核硬朗", "光影构图"],
    description: "描绘狄仁杰在惊雷破空之夜、屋宇飞檐之巅正气审视的主场画面。极富戏剧色彩的逆光排布、飘荡的藏蓝神捕披风与闪着凛冽寒光的亢龙锏相互交融，极具破空之力的戏剧张力。",
    details: {
      role: "特约首席插画主笔",
      team: "《这城有良田》原画专家组",
      software: "Photoshop",
      date: "2023.08"
    },
    imageType: "chinese-ink",
    colors: { primary: "#172554", secondary: "#14532d", accent: "#e2e8f0", gradient: "from-[#172554] via-[#14532d] to-[#0f172a]" },
    aspectRatio: "portrait",
    image: goodFieldsImages[3]
  },
  {
    id: "g5",
    title: "「水墨江南」限时地图概念宣介长卷",
    subtitle: "全新微风国风美术版本发布设计",
    category: "good-fields",
    tags: ["江南烟雨", "青绿山水", "横向卷轴"],
    description: "融合了中国著名的「青绿山水」与「浅绛山水」敷色原则，以柔润的艾绿、黛蓝，画出了一卷波光粼粼、茶肆隐隐、画桥扁舟的梦幻江南。让观者体味克制的传统国画治愈精髓。",
    details: {
      role: "美术总监",
      team: "《这城有良田》媒介与视觉组",
      software: "Photoshop, Sai",
      date: "2024.03"
    },
    imageType: "chinese-ink",
    colors: { primary: "#064e3b", secondary: "#115e59", accent: "#ccfbf1", gradient: "from-[#064e3b] via-[#ccfbf1] to-[#115e59]" },
    aspectRatio: "landscape",
    image: goodFieldsImages[4]
  },
  {
    id: "g20",
    title: "「良田春日记」全景折叠立体玩具画册",
    subtitle: "一周年限量珍藏版周边书本创意",
    category: "good-fields",
    tags: ["立体书", "周边设计", "结构模切"],
    description: "这是一套实物折叠画册的手工渲染设定。当翻开硬质书壳时，多层重叠切模的唐代集市、金黄麦田、古木拱桥会自动竖起，犹如微缩的古代舞台，呈现高水准的纸艺工程设计手法。",
    details: {
      role: "纸艺包装师 x 三维构筑师",
      team: "益物衍生精品设计小组",
      software: "Rhino, Illustrator, AutoCad",
      date: "2024.08"
    },
    imageType: "chinese-ink",
    colors: { primary: "#78350f", secondary: "#92400e", accent: "#fef3c7", gradient: "from-[#78350f] via-[#fef3c7] to-[#d97706]" },
    aspectRatio: "square",
    image: goodFieldsImages[5]
  },
  // 以下为填充这城有良田20张的后续项 (g6-g19)
  {
    id: "g6",
    title: "「春耕大典」品牌中国传统节气视觉",
    subtitle: "谷雨节气限量款官方海报",
    category: "good-fields",
    tags: ["节气中国", "插画排版", "泥土芬芳"],
    description: "古雅高贵的人像配以青团、麦穗的生机绿色。将传统的骨牌格排版融合大面积纯色留白，以最地道的视觉语言歌颂中国悠久的农耕生活，在节气发布会引发刷屏级反响。",
    details: { role: "核心创意平面", team: "《这城有良田》公关美术", software: "Illustrator, Sai", date: "2024.04" },
    imageType: "chinese-ink",
    colors: { primary: "#14532d", secondary: "#166534", accent: "#f0fdf4", gradient: "from-[#14532d] to-[#f0fdf4]" }, aspectRatio: "portrait",
    image: goodFieldsImages[6]
  },
  {
    id: "g7",
    title: "「良田画卷」官网长视频展示首绘",
    subtitle: "全武将极细微Q版动画大合照官宣",
    category: "good-fields",
    tags: ["原画人物", "长条绘卷", "Q版神情"],
    description: "设计的一款在网页上做无缝平滑滑动的大长图。所有NPC武将以独创的软糯、灵动Q版形式重绘，在错落有致的大唐农舍前或抓鸡、或耕作，具有浓郁的人情味和诙谐色彩。",
    details: { role: "Q版首席画师", team: "《这城有良田》闪光原画组", software: "Photoshop", date: "2024.01" },
    imageType: "chinese-ink",
    colors: { primary: "#7c2d12", secondary: "#c2410c", accent: "#ffedd5", gradient: "from-[#7c2d12] to-[#ffedd5]" }, aspectRatio: "landscape",
    image: goodFieldsImages[7]
  },
  {
    id: "g8",
    title: "「秦叔宝」勇冠三军破阵战役插画",
    subtitle: "传奇双戟猛将全特效大招视觉包装",
    category: "good-fields",
    tags: ["战将插画", "书法笔触", "重金属红"],
    description: "本画特为展示秦叔宝的无敌之姿。用大写粗犷的中国狂草书法「破阵」作为大背景，飞溅的水墨极速线条和闪烁金属光泽的玄色甲胄，创造出极其沉重、极具金属压迫感的暴力古美学。",
    details: { role: "核心画师", team: "游戏特效原图中心", software: "Photoshop, PaintTool SAI", date: "2023.10" },
    imageType: "chinese-ink",
    colors: { primary: "#7f1d1d", secondary: "#991b1b", accent: "#fee2e2", gradient: "from-[#7f1d1d] via-[#991b1b] to-[#fee2e2]" }, aspectRatio: "portrait",
    image: goodFieldsImages[8]
  },
  {
    id: "g9",
    title: "「这城好去处」特色大城池微缩大绘景",
    subtitle: "全新核心休闲活动海报",
    category: "good-fields",
    tags: ["大景深", "微缩场景", "治愈古风"],
    description: "本案设计极其克制，采用低纯度、高明度的茶绿组合。画出了云山雾绕下掩映的雅洁市集与客栈，用柔和的扁平插图线条打造大面积无压力空间，治愈长期生活在钢筋水泥水泥森林的当代白领客户。",
    details: { role: "场景主笔", team: "研发美术中心二组", software: "Photoshop, Procreate", date: "2024.02" },
    imageType: "chinese-ink",
    colors: { primary: "#0f4c3a", secondary: "#14532d", accent: "#f0fdf4", gradient: "from-[#14532d] to-[#d1fae5]" }, aspectRatio: "portrait",
    image: goodFieldsImages[9]
  },
  {
    id: "g10",
    title: "「金牌县令」高品质多媒体宣发海报",
    subtitle: "创意古风排版系列海报首期",
    category: "good-fields",
    tags: ["汉字排版", "粗砺肌理", "古风拼贴"],
    description: "全海报大胆选取极淡淡黄作为打底宣纸，将粗墨大字「明镜高悬」置于视觉正中，把可爱的卡通县令头像与朱红印章进行斜视、倒置的不规则排版碰撞，富有新国潮平面设计先锋品格。",
    details: { role: "平面大师", team: "《这城有良田》公关美术", software: "Illustrator, Photoshop", date: "2023.12" },
    imageType: "geometry",
    colors: { primary: "#312e81", secondary: "#1e1b4b", accent: "#ef4444", gradient: "from-[#1e1b4b] to-[#ef4444]" }, aspectRatio: "portrait",
    image: goodFieldsImages[0]
  },
  {
    id: "g11",
    title: "「良田商街」古代店铺玉色UI概念",
    subtitle: "全局升级版商贩系统视觉包",
    category: "good-fields",
    tags: ["UI界面", "玉石质感", "中国结纹理"],
    description: "颠覆行业常用的古板木纹UI，设计组自创「春水翠玉」拟真质感。在面板主框采用通透翠润的玉石环扣，配以极为工整、呼吸自如的细长魏碑标题字，呈现极富温润文雅的书卷香气。",
    details: { role: "UI/UX首席设计师", team: "游戏交互中心二组", software: "Photoshop, Figma", date: "2024.03" },
    imageType: "geometry",
    colors: { primary: "#064e1b", secondary: "#115e2e", accent: "#ccfbda", gradient: "from-[#064e1b] via-[#ccfbda] to-[#115e2e]" }, aspectRatio: "landscape",
    image: goodFieldsImages[1]
  },
  {
    id: "g12",
    title: "「烟火人间系列插画 · 晨曦蒸市集」",
    subtitle: "大唐市井人文画卷收藏专篇",
    category: "good-fields",
    tags: ["世俗国画", "空气透视", "光斑晕染"],
    description: "着重刻画晨曦微亮，刚开张的包子摊蒸腾而上的袅袅白雾。利用光影极度细腻的衍射与折射，画出了熙熙攘攘的小商贩、嬉笑的幼童，散发出古代尘世生活的质朴幸福气息。",
    details: { role: "高级插画师", team: "人文原画课", software: "Photoshop, Procreate", date: "2023.09" },
    imageType: "chinese-ink",
    colors: { primary: "#78350f", secondary: "#d97706", accent: "#fef3c7", gradient: "from-[#78350f] to-[#f59e0b]" }, aspectRatio: "landscape",
    image: goodFieldsImages[2]
  },
  {
    id: "g13",
    title: "「烟火人间系列插画 · 阡陌春耕早」",
    subtitle: "自然农耕生态设计海报",
    category: "good-fields",
    tags: ["青绿水粉", "生态质朴", "写意泼墨"],
    description: "画面采用深厚的墨色表现山岩，与之相对则是翠生发亮、波光粼粼的无垠梯田。清爽的水彩质感将春雨连绵下的唐代乡村，描绘成一方令人无限神往的桃花源仙境。",
    details: { role: "原画主笔", team: "人文原画课", software: "Photoshop", date: "2023.10" },
    imageType: "chinese-ink",
    colors: { primary: "#134e4a", secondary: "#0d9488", accent: "#f0fdfa", gradient: "from-[#134e4a] via-[#f0fdfa] to-[#0d9488]" }, aspectRatio: "landscape",
    image: goodFieldsImages[3]
  },
  {
    id: "g14",
    title: "「烟火人间系列插画 · 闲敲竹茶馆」",
    subtitle: "休闲客栈玩法推广海报设计",
    category: "good-fields",
    tags: ["市井插画", "暖意色调", "古典留白"],
    description: "本案在焦糖茶色中注入典雅米白。表现说书人讲到精彩处，全堂满座、茶气氤氲。通过生动细腻的五官刻画与光效运用，令观者甚至能透过静止画布，听到大唐茶舍里脆响的铜锣惊堂声。",
    details: { role: "高级插画师", team: "人文原画课", software: "Photoshop, Painter", date: "2023.11" },
    imageType: "chinese-ink",
    colors: { primary: "#451a03", secondary: "#7c2d12", accent: "#ffedd5", gradient: "from-[#451a03] to-[#ffedd5]" }, aspectRatio: "landscape",
    image: goodFieldsImages[4]
  },
  {
    id: "g15",
    title: "「中国非遗：良田 x 传统剪纸」联动海报",
    subtitle: "非物质文化遗产跨界大作",
    category: "good-fields",
    tags: ["非遗传承", "纯红剪影", "工艺打孔"],
    description: "正统朱砂红配以磨砂象牙黄。设计组严格遵循陕北窗花剔刻纹理，在电脑中以多层浮雕阴阳刻出威武武将与连田秋收，大红配以大面积留白极具新国风民俗典尊风采。",
    details: { role: "非遗美学大使", team: "益创意跨界工作组", software: "Illustrator, Photoshop", date: "2024.02" },
    imageType: "vector",
    colors: { primary: "#991b1b", secondary: "#dc2626", accent: "#fff5f5", gradient: "from-[#dc2626] to-[#fff5f5]" }, aspectRatio: "portrait",
    image: goodFieldsImages[5]
  },
  {
    id: "g16",
    title: "「冬日瑞雪丰」限时降雪活动主版KV",
    subtitle: "暖炉融雪节气推广大KV",
    category: "good-fields",
    tags: ["银装素裹", "冷光流体", "宋体排版"],
    description: "利用大面积留白铺写漫天飞雪中的大唐县衙一角，一树朱砂红梅开得极为傲立。粗体古典宋体大重叠排版一侧，完美平衡了中国画中经典极冷与极暖的色彩对抗天性。",
    details: { role: "平面主理", team: "《这城有良田》项目视觉组", software: "Photoshop, InDesign", date: "2024.12" },
    imageType: "chinese-ink",
    colors: { primary: "#1e293b", secondary: "#334155", accent: "#f1f5f9", gradient: "from-[#1e293b] via-[#f1f5f9] to-[#334155]" }, aspectRatio: "landscape",
    image: goodFieldsImages[6]
  },
  {
    id: "g17",
    title: "「大唐儒仙」文人墨客系列卡片精拆包装",
    subtitle: "名士卡牌收藏封面工艺图纸",
    category: "good-fields",
    tags: ["收藏卡排版", "几何边封", "复古印刷"],
    description: "针对高级实体卡进行的设计。引入了精雕唐草浮雕边框与几何烫金暗轨。字体排布极富先锋设计风格，在中式狂野中展现西方极简格律框架的规训之美。",
    details: { role: "主工业平面师", team: "益物创意研发中心", software: "Illustrator, CAD", date: "2024.10" },
    imageType: "geometry",
    colors: { primary: "#111827", secondary: "#4f46e5", accent: "#f59e0b", gradient: "from-[#111827] via-[#f59e0b] to-[#4f46e5]" }, aspectRatio: "portrait",
    image: goodFieldsImages[7]
  },
  {
    id: "g18",
    title: "「李白 · 剑舞长空」诗歌主题原画海报",
    subtitle: "全新巨剑将首发宣发插画",
    category: "good-fields",
    tags: ["李白剑仙", "水墨劈砍", "冷冽青色"],
    description: "画卷捕捉了谪仙人李白在瀑布巨流之下踏浪起舞、大写意白茫剑气几乎要撕裂屏幕的一瞬。利用高能的水墨撕裂刷子展现剑气的物理厚重感，狂放而不失古典诗人的浪漫气息。",
    details: { role: "高级特约原画", team: "原画大师组", software: "Photoshop, Painter", date: "2024.05" },
    imageType: "chinese-ink",
    colors: { primary: "#042f2e", secondary: "#0d9488", accent: "#e0f2fe", gradient: "from-[#042f2e] via-[#e1f5fe] to-[#0f172a]" }, aspectRatio: "portrait",
    image: goodFieldsImages[8]
  },
  {
    id: "g19",
    title: "「这城有良田」限定古风原声OST封套",
    subtitle: "官方黑胶唱片大套装设计",
    category: "good-fields",
    tags: ["唱片设计", "暗纹鎏金", "装帧艺术"],
    description: "专为黑胶唱片包装设计。封面上一个巨大的手写青墨汉字「城」贯穿始终，背后则铺陈有唐代都城县城的激光微型暗线轨线。整副套盒雅致高标，极具顶级文化学术收藏级别格调。",
    details: { role: "平面装帧专家", team: "周边与文宣核心课", software: "Illustrator, KeyShot", date: "2024.06" },
    imageType: "chinese-ink",
    colors: { primary: "#0c0a09", secondary: "#44403c", accent: "#ca8a04", gradient: "from-[#0c0a09] to-[#78350f]" }, aspectRatio: "square",
    image: goodFieldsImages[9]
  },

  // ================= 我是大东家作品集 (big-boss) =================
  {
    id: "ea1",
    title: "「我是大东家」全球首发公测大视觉海报",
    subtitle: "大满月大财神主海报KV设计",
    category: "big-boss",
    tags: ["漫画大集合", "喜庆动漫", "黄金粒子"],
    description: "以「财源广进，东家威武」为创意切入点，本画利用高密度的透视排铺技术，将游戏三十余款活泼角色层层叠起。头顶财神洒下大蓬灿烂鎏金大铜钱和祥云，具有极强的商业吸睛度，一经推出便引爆公测热度。",
    details: {
      role: "核心跨界海报师",
      team: "先锋视觉跨界项目组",
      software: "Photoshop, Retrographer",
      date: "2023.10"
    },
    imageType: "merchant-comic",
    colors: { primary: "#1e3a8a", secondary: "#d97706", accent: "#ffedd5", gradient: "from-[#1e3a8a] via-[#ffedd5] to-[#d97706]" },
    aspectRatio: "portrait"
  },
  {
    id: "ea3",
    title: "「丝绸之路」跨服贸易限定史诗视觉海报",
    subtitle: "全新西域远洋大版本宣章大图设计",
    category: "big-boss",
    tags: ["大漠奇景", "炫光紫金", "历史厚感"],
    description: "夕阳下的茫茫沙漠中，一支浩荡驼队负载丝绸、唐三彩、茶叶漫步于连绵沙丘。画面色彩极其瑰丽动容，巧妙地引入炫目迷人的紫金渐层天空与流光溢彩的万千繁星，凸显东家走出国门的豪迈。",
    details: {
      role: "场景气氛艺术组长",
      team: "模拟运营美术研发室",
      software: "Photoshop, Corel Painter",
      date: "2024.05"
    },
    imageType: "merchant-comic",
    colors: { primary: "#4c1d95", secondary: "#ca8a04", accent: "#fef3c7", gradient: "from-[#4c1d95] via-[#fef3c7] to-[#ca8a04]" },
    aspectRatio: "landscape"
  },
  {
    id: "ea4",
    title: "「大食国西域商贾」全套角色服装精细设定",
    subtitle: "新系列主角及跟班立绘工艺草案",
    category: "big-boss",
    tags: ["服装拆解", "角色设定", "金银配饰"],
    description: "针对西域商贾的衣履纹理开发的设计白皮书。精心刻画了阿拉伯花草刺绣花边、镶嵌绿松石的弯刀纽扣。整体风格Q版且比例精确，极大推进了三维高精模具的快速工业化成型落地。",
    details: {
      role: "资深人设主笔",
      team: "《我是大东家》角色研发室",
      software: "Photoshop, Clip Studio Paint",
      date: "2024.01"
    },
    imageType: "geometry",
    colors: { primary: "#047857", secondary: "#b45309", accent: "#f0fdf4", gradient: "from-[#047857] to-[#b45309]" },
    aspectRatio: "portrait"
  },
  {
    id: "ea5",
    title: "「财神驾到 · 恭贺新春」全套年节设计海报",
    subtitle: "新春限定福袋、红包与主推KV打包",
    category: "big-boss",
    tags: ["中国红", "烫金压纹", "民俗潮玩"],
    description: "本期盛宴包选取最为霸道的中国漆红色。财神骑着萌虎从画卷中喜气翻滚，红底中印满大唐聚宝盆、招财进宝等富贵吉祥暗纹。在春节活动期狂揽数十万下载，深获用户广泛好评。",
    details: {
      role: "新春创意视觉主理",
      team: "平面视觉二组",
      software: "Illustrator, Photoshop",
      date: "2025.02"
    },
    imageType: "merchant-comic",
    colors: { primary: "#991b1b", secondary: "#dc2626", accent: "#feeed5", gradient: "from-[#991b1b] via-[#feeed5] to-[#dc2626]" },
    aspectRatio: "square"
  },
  {
    id: "ea20",
    title: "「富临千商大常态」首度超大型典藏级精装画册",
    subtitle: "大发行中心两周年纪念限量版巨作",
    category: "big-boss",
    tags: ["画册美术", "黄铜磁铁装配", "奢华烫工艺"],
    description: "将产品研发历程草底原画、多国经典联动KV汇编集成册。外壳包裹厚重的深朱红粗织棉布，中央则手工拼贴雕刻了黄铜「东家大金锁」，让翻开画页的过程犹如一次打开传家商道秘宝的惊喜之旅。",
    details: {
      role: "装帧艺术专家",
      team: "礼品周研发科",
      software: "illustrator, CAD, SolidWorks",
      date: "2025.04"
    },
    imageType: "merchant-comic",
    colors: { primary: "#7c2d12", secondary: "#1e1b4b", accent: "#fbbf24", gradient: "from-[#7c2d12] via-[#fbbf24] to-[#1e1b4b]" },
    aspectRatio: "square"
  },
  // 以下为填充我是大东家20张的后续项 (ea6-ea19)
  {
    id: "ea6",
    title: "「我是大东家」官方搞怪微信条漫（四格）",
    subtitle: "网络自媒体高流量漫画案例",
    category: "big-boss",
    tags: ["新媒体插图", "爆笑剧场", "Q萌线条"],
    description: "针对两名爆萌商人斗智斗法、为了抢揽布偶庄而互相搞怪的故事。纯扁平高能亮黄底，线条狂野幽默，是年轻一代网民深爱的自媒体神曲、具有惊人的社交分享能量。",
    details: { role: "爆笑动漫主笔", team: "新媒体内容运营组", software: "Procreate, Photoshop", date: "2023.11" },
    imageType: "merchant-comic",
    colors: { primary: "#ea580c", secondary: "#facc15", accent: "#fff7ed", gradient: "from-[#ea580c] to-[#facc15]" }, aspectRatio: "portrait"
  },
  {
    id: "ea7",
    title: "「东家大院 · 席开百桌」宴会活动推广KV",
    subtitle: "核心公会社交玩法宣传海报",
    category: "big-boss",
    tags: ["饕餮大餐", "透视铺垫", "金黄亮色"],
    description: "画面中心是一个香气喷喷、巨大的古代金铜大火锅。无数可爱的武将和商贾正抢夺红亮肥牛肉、香菇，其极具动漫式的喜气神情极大地传达出公会玩法的合群欢快气氛。",
    details: { role: "高级插画师", team: "《我是大东家》研发中心", software: "Photoshop", date: "2023.09" },
    imageType: "merchant-comic",
    colors: { primary: "#9a3412", secondary: "#f97316", accent: "#ffedd5", gradient: "from-[#9a3412] to-[#ffedd5]" }, aspectRatio: "landscape"
  },
  {
    id: "ea8",
    title: "「江南茶社」限时国风优雅跨界活动KV",
    subtitle: "古城清香大戏院更新推介主VI",
    category: "big-boss",
    tags: ["薄荷青绿", "古典拼贴", "新颖极简"],
    description: "本插图一改往日喧闹，融入了冷翠的竹叶和清新雅致的淡茶青色。将中国古代传统白描手势与慵懒伸懒腰的店小二相呼应，开辟模拟经营游戏文青、克制高雅视觉之先例。",
    details: { role: "平面美学总监", team: "《我是大东家》视觉一组", software: "Photoshop, PaintTool SAI", date: "2024.03" },
    imageType: "chinese-ink",
    colors: { primary: "#115e59", secondary: "#0d9488", accent: "#f0fdfa", gradient: "from-[#115e59] to-[#f0fdfa]" }, aspectRatio: "landscape"
  },
  {
    id: "ea9",
    title: "「绝代双骄」武侠名作重联动官方大主KV",
    subtitle: "全新传奇古侠卡牌降临宣推主视觉",
    category: "big-boss",
    tags: ["小鱼儿花无缺", "硬朗格调", "水墨劈裂"],
    description: "小鱼儿手持折扇、玩世不恭，与高贵清冷、白褂飘飘的花无缺并肩而立。画风将浓艳美漫分色与大块传统中国黑白大泼墨奇妙糅合，为国剧联名大立绘指明了全新方向。",
    details: { role: "首席宣发平面师", team: "爆款联名专项组", software: "Photoshop, InDesign", date: "2024.08" },
    imageType: "merchant-comic",
    colors: { primary: "#1e1b4b", secondary: "#9333ea", accent: "#faf5ff", gradient: "from-[#1e1b4b] via-[#9333ea] to-[#faf5ff]" }, aspectRatio: "portrait"
  },
  {
    id: "ea10",
    title: "「东家十店连锁」Q版逗趣商铺拟人设定",
    subtitle: "经典药铺、杂货、布庄商铺新视觉模组",
    category: "big-boss",
    tags: ["卡通屋檐", "商铺拟人", "欢快红黄"],
    description: "将中式药铺重绘成一个抱着粗大百年老参、呼呼大睡的的可爱木屋；杂货铺则拥有巨大转来转去的大风车。极力满足玩家升级商铺时的极度新奇快慰心理，大大提升了玩家转化率。",
    details: { role: "主建筑原画师", team: "研发规划中心美术组", software: "Photoshop, Clip Studio Paint", date: "2023.07" },
    imageType: "merchant-comic",
    colors: { primary: "#7c2d12", secondary: "#9a3412", accent: "#fef3c7", gradient: "from-[#7c2d12] via-[#fef3c7] to-[#9a3412]" }, aspectRatio: "landscape"
  },
  {
    id: "ea11",
    title: "「东家好运锦鲤」节日特别抽奖高保海报",
    subtitle: "幸运玩家狂欢系列活动平面视觉",
    category: "big-boss",
    tags: ["国红鲜艳", "锦鲤漩涡", "烫金字体"],
    description: "画面展示一双肥美的红鲤围绕大太极圆滑游动。设计中心结合了现代高对比三维渐层色阶、以及极其豪横的大黑体字排版，在活动官宣期一秒抓住眼球。视觉活力让人倍感发财之喜意。",
    details: { role: "运营美术组长", team: "平面设计二组", software: "Photoshop, Keyshot", date: "2024.02" },
    imageType: "merchant-comic",
    colors: { primary: "#991b1b", secondary: "#ea580c", accent: "#fff7ed", gradient: "from-[#991b1b] to-[#ea580c]" }, aspectRatio: "portrait"
  },
  {
    id: "ea12",
    title: "「东家名楼乔迁大喜」豪宅进阶概念图",
    subtitle: "升级古典红砖琉璃飞檐大殿全景设定",
    category: "big-boss",
    tags: ["巨型中式阁楼", "大红色调", "欢声笑语"],
    description: "展示一个高达六层、层层铺满大红绣球、喜字的大富贵府邸。周围漫天烟花飞升、飞舞的祥云勾勒边缘，文字排版极其大气克制，在大开大阖之中尽显古典中国府宅的宏伟格调。",
    details: { role: "三维建筑指导", team: "美术研发中心一组", software: "Cinema 4D, VRay", date: "2023.08" },
    imageType: "geometry",
    colors: { primary: "#450a0a", secondary: "#b91c1c", accent: "#fcd34d", gradient: "from-[#450a0a] via-[#fcd34d] to-[#b91c1c]" }, aspectRatio: "landscape"
  },
  {
    id: "ea13",
    title: "「Q萌微信表情包之一：富甲天下」",
    subtitle: "玩家高频日常使用社交动图",
    category: "big-boss",
    tags: ["微信动态贴纸", "Q版巨萌", "爆款表情"],
    description: "绘制表情：圆滚肥硕的金牌掌柜抱住一个比头还大、闪闪发光的巨大金元宝、乐得口水直流。本系列表情已狂揽上百万使用率，成为玩家群聊天斗图的镇群法宝。",
    details: { role: "IP衍生插画师", team: "IP与潮玩开发实验室", software: "Animate, Procreate", date: "2023.06" },
    imageType: "merchant-comic",
    colors: { primary: "#d97706", secondary: "#eab308", accent: "#fef3c7", gradient: "from-[#d97706] to-[#eab308]" }, aspectRatio: "square"
  },
  {
    id: "ea14",
    title: "「Q萌微信表情包之二：东家威武」",
    subtitle: "爆爆款表情包案例",
    category: "big-boss",
    tags: ["微信表情包", "魔性姿态", "Q萌动态"],
    description: "表情为身披貂绒大斗篷、戴着漆黑超大酷眼镜的大东家，正缓缓拿出两个纯金的大元宝，摆出豪横又滑稽的中式神豪搞笑动作，深受玩家大叔及年轻白领群体的欢心。",
    details: { role: "IP衍生插画师", team: "IP与潮玩开发实验室", software: "Photoshop, Adobe Animate", date: "2023.06" },
    imageType: "merchant-comic",
    colors: { primary: "#1e1b4b", secondary: "#4f46e5", accent: "#ffffff", gradient: "from-[#1e1b4b] to-[#4f46e5]" }, aspectRatio: "square"
  },
  {
    id: "drag_drop",
    title: "「龙凤呈祥：端午竞拼大龙舟」限定海报",
    subtitle: "端午佳节限时大型竞技主KV",
    category: "big-boss",
    tags: ["龙纹重彩", "波涛怒海", "节日限定"],
    description: "画面捕捉到在滔滔苍色波浪之中、一尊鎏金大龙头腾跃出水的一瞬。配有金莹闪着光彩的端午艾绿粽子和古篆书法大标题「神龙破风」，极具中国传统风雅文化宣发高度。",
    details: { role: "平面海报资深", team: "《我是大东家》项目视觉组", software: "Photoshop, Illustrator", date: "2024.06" },
    imageType: "merchant-comic",
    colors: { primary: "#0f172a", secondary: "#047857", accent: "#fde047", gradient: "from-[#0f172a] via-[#047857] to-[#fde047]" }, aspectRatio: "landscape"
  },
  {
    id: "ea16",
    title: "「大漠古铃响，千商行四海」概念大宣插画",
    subtitle: "核心海派贸易地图发布原件",
    category: "big-boss",
    tags: ["奇幻星空", "大漠丝绸", "浪漫国漫"],
    description: "大片深蓝深靛的无垠星空下，驼队正从一扇高耸入云的残破古西域拱门中缓步走来。本画作非常讲究极致的寂静感和孤独的大场景透视，文字选用极度精巧小号中宋体，气场尊贵。",
    details: { role: "首席绘景师", team: "研发原美部二组", software: "Photoshop, Cinema 4D", date: "2024.04" },
    imageType: "merchant-comic",
    colors: { primary: "#1e1b4b", secondary: "#312e81", accent: "#fed7aa", gradient: "from-[#1e1b4b] via-[#312e81] to-[#fed7aa]" }, aspectRatio: "landscape"
  },
  {
    id: "ea17",
    title: "「超级名捕联动 · 暗影追踪」新卡限时KV",
    subtitle: "高人气捉贼玩法推广海报设计",
    category: "big-boss",
    tags: ["冷酷逆光", "暗黑剪影", "名捕捉刀"],
    description: "本案设计极其酷炫冷硬，采用夜暮漆黑基调，配以大门缝照入的一缕猩红极光。帅气的神捕带着黑皮眼罩、拔刀欲出，将极简排版美学与古典刺客氛围完美演绎到极致高度。",
    details: { role: "平面主设计师", team: "《我是大东家》视觉一组", software: "Photoshop, Clip Studio", date: "2024.09" },
    imageType: "geometry",
    colors: { primary: "#0b0f19", secondary: "#18181b", accent: "#ef4444", gradient: "from-[#0b0f19] to-[#ef4444]" }, aspectRatio: "portrait"
  },
  {
    id: "ea18",
    title: "「我是大东家」限定Q版积木拼图公仔设定",
    subtitle: "旗舰款积木潮流衍生公仔外观原彩",
    category: "big-boss",
    tags: ["像素化拼装", "潮玩周边", "实体设定"],
    description: "这是一套潮流拼装塑料像素小人的3D草图展示。利用高漫反射的马卡龙彩色塑料块重新堆垒出游戏多位古灵名气角色，在潮流展馆、玩具实体店首发即被全系列抢购一空。",
    details: { role: "玩具结构平面师", team: "IP衍生与潮玩开发实验室", software: "Rhino, MagicaVoxel, Photoshop", date: "2025.01" },
    imageType: "abstract",
    colors: { primary: "#0284c7", secondary: "#0369a1", accent: "#bae6fd", gradient: "from-[#0284c7] to-[#bae6fd]" }, aspectRatio: "square"
  },
  {
    id: "ea19",
    title: "「多金摇钱树」全屏动态金色发光CG",
    subtitle: "金币爆屏加载极速游戏特效背景",
    category: "big-boss",
    tags: ["加载CG", "金币雨", "高能动感"],
    description: "一尊巨大的黄金摇钱树在屏幕中央微微随风抖动、漫天金灿闪耀的大铜钱和耀眼小气泡螺旋式爆屏飘洒。文字用特细、端正的「富甲一方，敬请期待」极速加载，营造尊贵暴富神话感。",
    details: { role: "三维特效专家", team: "移动特效研发部", software: "After Effects, WebGL, C4D", date: "2023.12" },
    imageType: "merchant-comic",
    colors: { primary: "#7c2f12", secondary: "#eab308", accent: "#fffbeb", gradient: "from-[#7c2f12] via-[#eab308] to-[#ffbeb]" }, aspectRatio: "landscape"
  }
];

export const contactDetails: ContactDetails = {
  address: "广州市天河区科韵路广州信息港益世界大厦7层设计中心",
  phone: "020-8888-9999",
  email: "design-hr@yishijie.cn",
  wechat: "益世界设计中心（Eworld_Design）",
  mapEmbed: "广州市天河区科韵路广州信息港"
};

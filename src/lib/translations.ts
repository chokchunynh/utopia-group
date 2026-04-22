export type Locale = "en" | "zh";

export const translations = {
  // Hero
  "hero.pill": { en: "BOSS OS", zh: "BOSS OS" },
  "hero.tagline": {
    en: "Your entire business. One screen. Every morning.",
    zh: "你的整盘生意。一个画面。每天早上。",
  },
  "hero.subtitle": {
    en: "Sales, cash flow, staff, customers — all in one command center built for YOUR industry. No IT team needed. Works on your phone.",
    zh: "销售、现金流、员工、客户——全部在一个为你的行业量身打造的指挥中心。不需要IT团队。手机就能操作。",
  },
  "hero.roi": {
    en: "Most clients save RM8,000–15,000/month within 90 days.",
    zh: "大部分客户在90天内每月省下 RM8,000–15,000。",
  },
  "hero.cta.whatsapp": {
    en: "WhatsApp Us — Free Consultation",
    zh: "WhatsApp 我们 — 免费咨询",
  },
  "hero.cta.see": { en: "See It Working", zh: "看看效果" },
  "hero.trust.companies": { en: "35+ companies", zh: "35+ 家公司" },
  "hero.trust.staff": { en: "400+ staff managed", zh: "管理 400+ 员工" },
  "hero.trust.setup": { en: "Setup from RM5K", zh: "RM5K 起" },

  // ROI Calculator
  "roi.title": {
    en: "How much is manual work costing you?",
    zh: "手工作业每个月让你亏多少？",
  },
  "roi.subtitle": {
    en: "Slide to match your business. See what you could save.",
    zh: "拉动滑块匹配你的公司。看看你能省多少。",
  },
  "roi.staff": { en: "Staff count", zh: "员工人数" },
  "roi.hours": { en: "Hours/day on admin", zh: "每天花在行政上的时间" },
  "roi.losing": {
    en: "You're losing approximately",
    zh: "你每个月大约亏",
  },
  "roi.perMonth": { en: "/month", zh: "/月" },
  "roi.toManual": { en: "to manual admin work", zh: "在手工行政工作上" },

  // Core Features
  "features.title": {
    en: "5 things Boss OS handles from Day 1",
    zh: "Boss OS 第一天就帮你搞定的5件事",
  },
  "features.subtitle": {
    en: "Every feature below is live in your system within 2 weeks.",
    zh: "以下每项功能在2周内就会在你的系统里上线。",
  },

  // Feature names
  "feature.sales": { en: "Sales Command", zh: "销售总览" },
  "feature.sales.desc": {
    en: "Today's revenue, trends, top products — one screen. Know your numbers before 9am.",
    zh: "今天的收入、趋势、最畅销产品——一个画面。9点前就知道你的数字。",
  },
  "feature.whatsapp": { en: "WhatsApp AI", zh: "WhatsApp AI" },
  "feature.whatsapp.desc": {
    en: "Auto-reply customers 24/7. Takes bookings, sends quotes, answers pricing. In BM, EN, or Chinese.",
    zh: "24/7 自动回复客户。接单、报价、回答价格。支持马来文、英文和中文。",
  },
  "feature.insights": { en: "AI Insights", zh: "AI 智能提醒" },
  "feature.insights.desc": {
    en: '"Sales dropped 23% on Tuesdays." "Customer X hasn\'t ordered in 30 days." AI watches so you don\'t have to.',
    zh: '"星期二销售跌了23%。" "客户X已经30天没下单了。" AI帮你盯着，你不用自己看。',
  },
  "feature.cashflow": { en: "Cash Flow View", zh: "现金流一览" },
  "feature.cashflow.desc": {
    en: "Money in, money out, who owes you. Pulls from your accounting software. No more guessing.",
    zh: "进了多少、出了多少、谁还欠你。直接从你的会计软件拉数据。不用再猜了。",
  },
  "feature.staff": { en: "Staff & Ops", zh: "员工与运营" },
  "feature.staff.desc": {
    en: "Who's working, what's assigned, what's overdue. Replaces the WhatsApp group you use to chase staff.",
    zh: "谁在上班、分配了什么、什么过期了。取代你用来追员工的WhatsApp群组。",
  },

  // Data Readiness
  "data.title": {
    en: "You don't need perfect data. You need 30%.",
    zh: "你不需要完美的数据。只要30%就够了。",
  },
  "data.subtitle": {
    en: "If you have ANY of these, we can build your Boss OS:",
    zh: "只要你有以下任何一项，我们就能帮你建 Boss OS：",
  },
  "data.sales": { en: "Sales Records", zh: "销售记录" },
  "data.sales.desc": {
    en: "Excel, POS system, receipts, invoices — even handwritten",
    zh: "Excel、POS系统、收据、发票——手写的也可以",
  },
  "data.hr": { en: "HR / Payroll", zh: "人事 / 薪资" },
  "data.hr.desc": {
    en: "Staff list, salary, attendance — even in a WhatsApp group",
    zh: "员工名单、薪水、出勤——就算在WhatsApp群里也行",
  },
  "data.accounting": { en: "Accounting Software", zh: "会计软件" },
  "data.accounting.desc": {
    en: "SQL, AutoCount, UBS, Xero — we connect to all of them",
    zh: "SQL、AutoCount、UBS、Xero——我们全都能对接",
  },
  "data.enough": {
    en: "Have at least one? That's enough. We handle the rest during setup.",
    zh: "至少有一样？那就够了。剩下的我们帮你搞定。",
  },

  // Industry
  "industry.title": {
    en: "Boss OS works across industries",
    zh: "Boss OS 适用各行各业",
  },
  "industry.subtitle": {
    en: "Click your industry to see exactly what we built.",
    zh: "点你的行业，看看我们做了什么。",
  },

  // Pricing
  "pricing.title": {
    en: "Cheaper than one admin staff.",
    zh: "比请一个行政人员还便宜。",
  },
  "pricing.subtitle": {
    en: "Boss OS works 24/7, never takes MC, manages 5 departments at once.",
    zh: "Boss OS 全天候运作，从不拿MC，同时管5个部门。",
  },
  "pricing.setup": { en: "one-time setup", zh: "一次性设置费" },
  "pricing.grant": {
    en: "Eligible for MDEC / SME Corp Digitalization Grant (RM5,000–RM100,000)",
    zh: "符合 MDEC / SME Corp 数字化津贴资格 (RM5,000–RM100,000)",
  },
  "pricing.cancel": { en: "No lock-in. Cancel anytime.", zh: "不绑约。随时可以取消。" },

  // Case Studies
  "cases.title": { en: "Real results from real bosses", zh: "真实老板的真实成果" },
  "cases.subtitle": {
    en: "Before and after Boss OS. Numbers don't lie.",
    zh: "用 Boss OS 前后对比。数据不会骗人。",
  },
  "cases.before": { en: "Before", zh: "之前" },
  "cases.after": { en: "After", zh: "之后" },

  // Privacy
  "privacy.title": {
    en: "Your data stays yours. Always.",
    zh: "你的数据永远是你的。",
  },
  "privacy.body": {
    en: "We access your data to build Boss OS, but it's protected under PDPA. Our team signs NDAs. You can revoke access anytime. We don't sell or share your data — ever.",
    zh: "我们会用你的数据来建 Boss OS，但数据受 PDPA 保护。我们的团队签署保密协议。你随时可以撤回权限。我们绝对不会卖或分享你的数据。",
  },
  "privacy.pdpa": { en: "PDPA Compliant", zh: "符合PDPA" },
  "privacy.nda": { en: "NDA Signed", zh: "已签保密协议" },
  "privacy.revoke": { en: "Revoke Anytime", zh: "随时撤回" },

  // Misc UI
  "ui.seeExamples": { en: "See examples", zh: "查看例子" },
  "ui.hideExamples": { en: "Hide examples", zh: "收起" },
  "roi.savings": { en: "Boss OS costs RM{cost}/month. You save RM{savings}.", zh: "Boss OS 每月 RM{cost}。你省下 RM{savings}。" },
  "pricing.saves": { en: "→ saves", zh: "→ 省下" },

  // Final CTA
  "cta.title": {
    en: "Your competitor already started.",
    zh: "你的竞争对手已经开始了。",
  },
  "cta.subtitle": {
    en: "35+ companies run on Boss OS. One WhatsApp message to join them.",
    zh: "35+家公司在用 Boss OS。一条WhatsApp信息就能加入。",
  },
  "cta.button": {
    en: "WhatsApp Us — Free Consultation",
    zh: "WhatsApp 我们 — 免费咨询",
  },
  "cta.note": {
    en: "No commitment. No hard sell. Just a 15-minute chat about your business.",
    zh: "不需要承诺。不会硬销。只是聊15分钟关于你的生意。",
  },

  // ─── NEW: Boss OS Revamp ─────────────────────────────────────

  // Hero (new)
  "boss.hero.headline": {
    en: "Your whole business.\nOne screen. Every morning.",
    zh: "你的整盘生意。\n一个画面。每天早上。",
  },
  "boss.hero.subhead": {
    en: "Sales, staff, cash, customers — all connected. AI tells you what to fix before you sit down.",
    zh: "销售、员工、现金、客户——全部连接。AI 在你坐下之前就告诉你该处理什么。",
  },
  "boss.hero.cta.primary": { en: "See How It Works", zh: "看看怎么运作" },
  "boss.hero.cta.secondary": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  "boss.hero.trust": {
    en: "35+ companies · 400+ staff · First system live in 5 days",
    zh: "35+ 家公司 · 400+ 员工 · 5天内系统上线",
  },

  // Proof Strip
  "boss.proof.saved": { en: "saved per month", zh: "每月节省" },
  "boss.proof.ontime": { en: "on-time delivery", zh: "准时交付" },
  "boss.proof.admin": { en: "daily admin — down from 4 hours", zh: "每日行政——从4小时降至" },

  // Timeline — Your First Week
  "boss.timeline.title": { en: "Your First Week", zh: "你的第一周" },
  "boss.timeline.subtitle": {
    en: "From zero to a working command center in 5 days.",
    zh: "从零到运作的指挥中心，只需5天。",
  },
  "boss.timeline.day1.title": { en: "We Map Your Business", zh: "我们梳理你的生意" },
  "boss.timeline.day1.copy": {
    en: "2-hour sit-down. We review every touchpoint — sales, WhatsApp, invoices, staff handoffs. Most bosses find 3–5 blind spots they didn't know existed.",
    zh: "2小时面谈。我们审查每一个接触点——销售、WhatsApp、发票、员工交接。大多数老板发现3-5个他们不知道的盲点。",
  },
  "boss.timeline.day2.title": { en: "You Tell Us Your Goal", zh: "你告诉我们目标" },
  "boss.timeline.day2.copy": {
    en: "Increase sales? Cut waste? Replace manual follow-up? We pick one first win and build toward it.",
    zh: "增加销售？减少浪费？取代手动跟进？我们选一个最快见效的目标来做。",
  },
  "boss.timeline.day3.title": { en: "We Build", zh: "我们开工" },
  "boss.timeline.day3.copy": {
    en: "Your command center takes shape. Connected to your actual data — POS, WhatsApp, Excel, accounting software, whatever you have.",
    zh: "你的指挥中心成型。连接你的实际数据——POS、WhatsApp、Excel、会计软件，你有什么我们就接什么。",
  },
  "boss.timeline.day5.title": { en: "First Drop", zh: "第一版交付" },
  "boss.timeline.day5.copy": {
    en: "Your first working system. Real numbers. Your business on one screen.",
    zh: "你的第一个可运作系统。真实数据。你的生意在一个画面上。",
  },
  "boss.timeline.week2.title": { en: "Ultra Mode Begins", zh: "Ultra 模式启动" },
  "boss.timeline.week2.copy": {
    en: "AI starts doing more. Decision alerts. Anomaly detection. Insights you never thought to ask for.",
    zh: "AI 开始做更多。决策警报。异常检测。你从没想过要问的洞察。",
  },
  "boss.timeline.speed": {
    en: "Most competitors quote 3–6 months. We deliver working software in 5 days.",
    zh: "大多数竞争对手报价3-6个月。我们5天交付可运作的系统。",
  },

  // Showcase
  "boss.showcase.title": { en: "See It Working", zh: "看看实际效果" },
  "boss.showcase.dking.copy": {
    en: "39 durian varieties. 139 suppliers. AI tells you which ones cost money before you know it.",
    zh: "39种榴莲品种。139个供应商。AI 在你察觉之前就告诉你哪些在亏钱。",
  },
  "boss.showcase.scaffolding.copy": {
    en: "Drivers skipping trips? Late deliveries? Boss OS flags it. On-time jumped 23 points in 6 weeks.",
    zh: "司机跳过行程？延迟交付？Boss OS 标记出来。准时率在6周内提升了23个百分点。",
  },
  "boss.showcase.kakkenduri.copy": {
    en: "Trips, debtors, bookings — all on one screen. AI flags double-booked dates before your team even notices.",
    zh: "行程、欠款、预订——全在一个画面。AI 在你的团队察觉之前就标记出重复预订的日期。",
  },
  "boss.showcase.ibnusina.copy": {
    en: "Patient scheduling, staff rostering, inventory tracking. AI cuts wait times by optimizing appointment slots automatically.",
    zh: "患者排期、员工排班、库存追踪。AI 自动优化预约时段，缩短等候时间。",
  },
  "boss.showcase.tv.headline": {
    en: "Every Boss OS client gets this.",
    zh: "每个 Boss OS 客户都有这个。",
  },
  "boss.showcase.tv.subhead": {
    en: "A live wall display for your office. Your operation, running 24/7.",
    zh: "办公室的实时大屏幕。你的运营，全天候运作。",
  },
  "boss.showcase.tv.detail": {
    en: "Works on any TV. Auto-refreshes. Even works offline.",
    zh: "任何电视都能用。自动刷新。断网也能运作。",
  },
  "boss.showcase.before": { en: "Before", zh: "之前" },
  "boss.showcase.after": { en: "After", zh: "之后" },
  "boss.showcase.saved": { en: "Saved", zh: "节省" },

  // Pricing (new 3-tier)
  "boss.pricing.title": {
    en: "Cheaper than one admin staff. Smarter than five.",
    zh: "比一个行政人员便宜。比五个还聪明。",
  },
  "boss.pricing.subtitle": {
    en: "Pick your starting point. Upgrade anytime.",
    zh: "选择你的起点。随时可以升级。",
  },
  "boss.pricing.setup": { en: "one-time setup", zh: "一次性设置费" },
  "boss.pricing.perMonth": { en: "/mo", zh: "/月" },
  "boss.pricing.derisk": {
    en: "Setup pays for itself in month 3. No lock-in, cancel anytime.",
    zh: "设置费在第3个月回本。不绑约，随时取消。",
  },
  "boss.pricing.grant": {
    en: "Eligible for MDEC / SME Corp Digitalization Grant (RM5,000–RM100,000)",
    zh: "符合 MDEC / SME Corp 数字化津贴资格 (RM5,000–RM100,000)",
  },
  "boss.pricing.conversion": {
    en: "Clients who move to Command Center see an average 40% margin improvement in 90 days.",
    zh: "升级到 Command Center 的客户在90天内平均利润率提升40%。",
  },

  // Quiz
  "boss.quiz.title": {
    en: "Which Boss OS is right for your business?",
    zh: "哪个 Boss OS 适合你的生意？",
  },
  "boss.quiz.subtitle": {
    en: "3 questions. 30 seconds. No signup.",
    zh: "3个问题。30秒。不用注册。",
  },
  "boss.quiz.q1.title": {
    en: "How does your business track sales today?",
    zh: "你的生意现在怎么记录销售？",
  },
  "boss.quiz.q1.a": { en: "Paper, WhatsApp, or memory", zh: "纸张、WhatsApp 或记忆" },
  "boss.quiz.q1.b": { en: "Excel or basic POS", zh: "Excel 或基本 POS" },
  "boss.quiz.q1.c": { en: "Accounting software + POS integrated", zh: "会计软件 + POS 已整合" },
  "boss.quiz.q2.title": {
    en: "What do you want AI to do first?",
    zh: "你想让 AI 先做什么？",
  },
  "boss.quiz.q2.a": {
    en: "Show me my numbers — I'm flying blind",
    zh: "让我看到数字——我现在完全摸黑",
  },
  "boss.quiz.q2.b": {
    en: "Connect my systems and give me weekly insights",
    zh: "连接我的系统，给我每周洞察",
  },
  "boss.quiz.q2.c": {
    en: "Tell me what I'm missing and help me decide",
    zh: "告诉我我错过了什么，帮我做决定",
  },
  "boss.quiz.q3.title": { en: "How many staff do you manage?", zh: "你管多少员工？" },
  "boss.quiz.q3.a": { en: "1–10", zh: "1–10" },
  "boss.quiz.q3.b": { en: "10–50", zh: "10–50" },
  "boss.quiz.q3.c": { en: "50+", zh: "50+" },
  "boss.quiz.result.starter": {
    en: "Based on your answers, Starter is the best starting point.",
    zh: "根据你的回答，Starter 是最佳起步方案。",
  },
  "boss.quiz.result.command": {
    en: "Based on your answers, Command Center is the best starting point.",
    zh: "根据你的回答，Command Center 是最佳起步方案。",
  },
  "boss.quiz.result.ultra": {
    en: "Based on your answers, Ultra Mode will take your business to the next level.",
    zh: "根据你的回答，Ultra Mode 将把你的生意提升到下一个层次。",
  },
  "boss.quiz.cta": { en: "WhatsApp Us About This Plan", zh: "WhatsApp 咨询这个方案" },
  "boss.quiz.retake": { en: "Retake quiz", zh: "重做测试" },

  // Final CTA (new)
  "boss.finalcta.title": {
    en: "Ready to see your business on one screen?",
    zh: "准备好在一个画面看到你的整盘生意？",
  },
  "boss.finalcta.cta.whatsapp": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  "boss.finalcta.cta.call": { en: "Book a Call", zh: "预约通话" },
  "boss.finalcta.trust": {
    en: "First system live in 5 days. From RM2,800/mo.",
    zh: "5天内系统上线。每月 RM2,800 起。",
  },
  "boss.finalcta.privacy": {
    en: "Your data stays yours. PDPA compliant.",
    zh: "你的数据永远是你的。符合 PDPA。",
  },

  // Homepage Results CTA
  "homepage.resultscta.eyebrow": {
    en: "Companies using Boss OS right now",
    zh: "正在使用 Boss OS 的公司",
  },
  "homepage.resultscta.headline": {
    en: "Want results like this?",
    zh: "想要这样的成果？",
  },
  "homepage.resultscta.cta": { en: "See How It Works", zh: "看看怎么运作" },
  "homepage.resultscta.price": { en: "From RM2,800/mo", zh: "每月 RM2,800 起" },

  // ─── NAVBAR & SHARED ────────────────────────────────────────
  "nav.home": { en: "Home", zh: "首页" },
  "nav.bossOs": { en: "Boss OS", zh: "Boss OS" },
  "nav.automate": { en: "What We Automate", zh: "我们自动化什么" },
  "nav.about": { en: "About Us", zh: "关于我们" },
  "nav.career": { en: "Career", zh: "职业机会" },
  "nav.more": { en: "More", zh: "更多" },
  "nav.aiStory": { en: "Our AI Story", zh: "我们的AI故事" },
  "nav.aiStory.desc": { en: "How we made AI everyone's job — from accountant to sales manager", zh: "我们如何让AI成为每个人的工作——从会计到销售经理" },
  "nav.aiTools": { en: "AI Tools", zh: "AI 工具" },
  "nav.aiTools.desc": { en: "8+ live AI products — SlipMatch, TrueAI, GetBill & more", zh: "8+ 个AI产品——SlipMatch、TrueAI、GetBill等" },
  "nav.howWeCharge": { en: "How We Charge", zh: "我们怎么收费" },
  "nav.howWeCharge.desc": { en: "Transparent pricing — start free", zh: "透明定价——免费开始" },
  "nav.masterclass": { en: "AI Masterclass", zh: "AI 大师班" },
  "nav.masterclass.desc": { en: "AI training programs", zh: "AI 培训课程" },
  "nav.masterclass.company": { en: "AI Masterclass — Companies", zh: "AI 大师班——企业" },
  "nav.masterclass.company.desc": { en: "On-site team training", zh: "企业现场培训" },
  "nav.masterclass.individual": { en: "AI Masterclass — Individuals", zh: "AI 大师班——个人" },
  "nav.masterclass.individual.desc": { en: "RM299/session × 8", zh: "RM299/节 × 8节" },
  "nav.startFree": { en: "Start Free", zh: "免费开始" },
  "nav.tryFree": { en: "Try Free", zh: "免费试用" },

  // FOOTER
  "footer.tagline1": { en: "We Run AI.", zh: "我们运营AI。" },
  "footer.tagline2": { en: "You Run Your Business.", zh: "你专注你的生意。" },
  "footer.explore": { en: "Explore", zh: "探索" },
  "footer.ourTools": { en: "Our Tools", zh: "我们的工具" },
  "footer.company": { en: "Company", zh: "公司" },
  "footer.contact": { en: "Contact", zh: "联系" },
  "footer.built": { en: "Built in Malaysia for Malaysian businesses.", zh: "在马来西亚为马来西亚企业而建。" },
  "footer.rights": { en: "All rights reserved.", zh: "版权所有。" },

  // MOBILE CTA BAR
  "mobile.tryFree": { en: "Try Free", zh: "免费试用" },
  "mobile.whatsapp": { en: "WhatsApp Us", zh: "WhatsApp 我们" },

  // ─── HOMEPAGE ───────────────────────────────────────────────

  // Hero Section
  "home.hero.pill": { en: "We Operate 173 Business Units on AI", zh: "我们用AI运营173个业务单位" },
  "home.hero.headline": { en: "We Run AI Across 173 Business Units.", zh: "我们在173个业务单位运营AI。" },
  "home.hero.headline2": { en: "Now We'll Run It For Yours.", zh: "现在为你运营。" },
  "home.hero.sub": {
    en: "We don't just consult on AI. We set up a machine in your office, build your custom dashboard, and automate your operations — from day one.",
    zh: "我们不只是AI咨询。我们在你的办公室安装设备，建造你的定制仪表板，从第一天起就自动化你的运营。",
  },
  "home.hero.cta1": { en: "Try Our Tools Free", zh: "免费试用我们的工具" },
  "home.hero.cta2": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  "home.hero.trust": {
    en: "No credit card. No sign-up. See AI work before you pay a single ringgit.",
    zh: "不需要信用卡。不需要注册。先看到AI的效果再付钱。",
  },

  // Proof Bar
  "home.proof.groupRevenue": { en: "Group revenue", zh: "集团收入" },
  "home.proof.companies": { en: "Companies under the group", zh: "旗下公司" },
  "home.proof.businessUnits": { en: "Business units", zh: "业务单位" },
  "home.proof.staff": { en: "Staff across all companies", zh: "全集团员工" },
  "home.proof.tools": { en: "We build with the tools that matter", zh: "我们用最好的工具来建造" },

  // TrueAI Section
  "home.trueai.pill": { en: "Our Flagship Product", zh: "我们的旗舰产品" },
  "home.trueai.title": { en: "TrueAI — Your 24/7", zh: "TrueAI — 你的24/7" },
  "home.trueai.title2": { en: "AI Sales Agent", zh: "AI销售代理" },
  "home.trueai.sub": {
    en: "Not a chatbot with canned responses. A fully autonomous AI that learns your business, handles WhatsApp conversations, sends photos, and closes deals while you sleep.",
    zh: "不是千篇一律的聊天机器人。一个完全自主的AI，学习你的生意，处理WhatsApp对话，发送照片，在你睡觉时成交。",
  },
  "home.trueai.demo.title": { en: "Real conversation from Encik Beku Aircond", zh: "来自 Encik Beku Aircond 的真实对话" },
  "home.trueai.demo.sub": { en: "Watch TrueAI handle a customer enquiry", zh: "看 TrueAI 如何处理客户咨询" },
  "home.trueai.demo.play": { en: "Play Demo", zh: "播放演示" },
  "home.trueai.demo.result": {
    en: "Replied in 3 seconds. Booked the appointment. Upsold leak inspection. Sent technician profile. Your sales team was asleep.",
    zh: "3秒回复。预约成功。追加销售漏水检查。发送技师资料。你的销售团队还在睡觉。",
  },
  "home.trueai.cta": { en: "Get TrueAI for Your Business", zh: "为你的生意获取 TrueAI" },

  // TrueAI Features (from constants)
  "home.trueai.f1.title": { en: "100% True AI", zh: "100% 真正的AI" },
  "home.trueai.f1.desc": {
    en: "Not a chatbot with scripts. Fully autonomous AI that learns your business, handles conversations, and closes deals.",
    zh: "不是带脚本的聊天机器人。完全自主的AI，学习你的生意，处理对话，成交。",
  },
  "home.trueai.f2.title": { en: "Toggle On. That's It.", zh: "打开开关。搞定。" },
  "home.trueai.f2.desc": {
    en: "Link your WhatsApp. Turn on AI mode. We take over your chats. Auto-creates knowledge base from your business data.",
    zh: "连接你的WhatsApp。打开AI模式。我们接管你的聊天。自动从你的业务数据创建知识库。",
  },
  "home.trueai.f3.title": { en: "Infrastructure Included", zh: "基础设施全包" },
  "home.trueai.f3.desc": {
    en: "Database, hosting, AI compute — all included. Building this yourself costs RM400+/month minimum. We handle it at scale.",
    zh: "数据库、托管、AI算力——全部包含。自己建要每月RM400+。我们大规模处理。",
  },
  "home.trueai.f4.title": { en: "Train Once, Run Forever", zh: "训练一次，永久运行" },
  "home.trueai.f4.desc": {
    en: "After 6 months of training, toggle AI on or off anytime. Your AI keeps learning and improving.",
    zh: "经过6个月的训练，随时开关AI。你的AI持续学习和进步。",
  },

  // WeUseIt Section
  "home.weuseit.pill": { en: "Why Us", zh: "为什么选我们" },
  "home.weuseit.earnings": { en: "earnings improvement across our own companies", zh: "我们自己公司的收入提升" },
  "home.weuseit.headline": {
    en: "We don't just sell AI. We run our entire company on it.",
    zh: "我们不只是卖AI。我们整个公司都在用AI运营。",
  },
  "home.weuseit.subheadline": {
    en: "We improved our own earnings by 70%. We're not a software company pretending to understand business — we're an actual company that built AI to solve our own problems first.",
    zh: "我们自己的收入提升了70%。我们不是一家假装懂生意的软件公司——我们是一家先用AI解决自己问题的真正公司。",
  },
  "home.weuseit.companies": { en: "Companies we operate", zh: "我们运营的公司" },
  "home.weuseit.staffDaily": { en: "Staff using AI daily", zh: "每天使用AI的员工" },
  "home.weuseit.p1": {
    en: "We manage 35+ real businesses — co-living, healthcare, home services, scaffolding",
    zh: "我们管理35+家真正的企业——共居、医疗、家居服务、脚手架",
  },
  "home.weuseit.p2": {
    en: "Every tool we sell you, our own teams use every single day",
    zh: "我们卖给你的每一个工具，我们自己的团队每天都在用",
  },
  "home.weuseit.p3": {
    en: "We don't guess what works. We know — because we measured the results on ourselves first",
    zh: "我们不猜什么有效。我们知道——因为我们先在自己身上测试了结果",
  },

  // Department Reveal
  "home.dept.pill": { en: "Areas of AI Improvement", zh: "AI改进领域" },
  "home.dept.title": { en: "Average client: 6 areas. All-In clients: 15 areas.", zh: "普通客户：6个领域。全包客户：15个领域。" },
  "home.dept.sub": {
    en: "We find every part of your business where AI can save time, cut costs, or make money.",
    zh: "我们找出你生意中每一个AI可以节省时间、降低成本或赚钱的地方。",
  },
  "home.dept.our1": { en: "Our #1 Tool", zh: "我们的#1工具" },
  "home.dept.demo": { en: "See TrueAI Demo", zh: "查看 TrueAI 演示" },

  // Department names
  "dept.sales": { en: "Sales & WhatsApp", zh: "销售 & WhatsApp" },
  "dept.sales.desc": {
    en: "AI takes over WhatsApp chats, replies in seconds, qualifies leads, upsells, and closes — 24/7. Our #1 tool.",
    zh: "AI接管WhatsApp聊天，秒回，筛选客户，追加销售，成交——全天候。我们的#1工具。",
  },
  "dept.accounting": { en: "Accounting & Finance", zh: "会计 & 财务" },
  "dept.accounting.desc": {
    en: "Bank reconciliation in 3 minutes, automatic invoice matching, utility bill extraction. No more manual data entry.",
    zh: "3分钟银行对账，自动发票匹配，水电费提取。不再需要手工录入数据。",
  },
  "dept.inventory": { en: "Inventory & Purchasing", zh: "库存 & 采购" },
  "dept.inventory.desc": {
    en: "AI predicts stock needs, auto-generates purchase orders, alerts for low stock. Never overstock or run out again.",
    zh: "AI预测库存需求，自动生成采购订单，低库存警报。再也不会过度库存或断货。",
  },
  "dept.marketing": { en: "Marketing & Content", zh: "营销 & 内容" },
  "dept.marketing.desc": {
    en: "AI video ads, social media automation, SEO content at scale. One click to generate a month of content.",
    zh: "AI视频广告，社交媒体自动化，大规模SEO内容。一键生成一个月的内容。",
  },
  "dept.hr": { en: "HR & Payroll", zh: "人事 & 薪资" },
  "dept.hr.desc": {
    en: "GPS attendance, auto payroll calculation, AI scheduling, internal knowledge base. HR on autopilot.",
    zh: "GPS考勤，自动薪资计算，AI排班，内部知识库。人事自动化。",
  },
  "dept.operations": { en: "Operations & Logistics", zh: "运营 & 物流" },
  "dept.operations.desc": {
    en: "Tenant management, trip assignment, GPS tracking. AI handles the complexity so your team handles the customers.",
    zh: "租户管理，行程分配，GPS追踪。AI处理复杂事务，你的团队专注服务客户。",
  },

  // How We Work
  "home.howwework.pill": { en: "How We Work", zh: "我们的工作方式" },
  "home.howwework.title": { en: "From audit to autopilot in", zh: "从审计到自动化，只需" },
  "home.howwework.title2": { en: "4 steps", zh: "4个步骤" },
  "home.howwework.s1.title": { en: "Audit", zh: "审计" },
  "home.howwework.s1.desc": { en: "We study your business. Find at least 5 areas where AI saves time or makes money.", zh: "我们研究你的生意。找出至少5个AI可以节省时间或赚钱的领域。" },
  "home.howwework.s1.detail": { en: "Week 1-2", zh: "第1-2周" },
  "home.howwework.s2.title": { en: "Build", zh: "建造" },
  "home.howwework.s2.desc": { en: "We set up a machine in your office, build your AI tools, and connect to your systems.", zh: "我们在你的办公室安装设备，建造你的AI工具，连接你的系统。" },
  "home.howwework.s2.detail": { en: "Week 3-4", zh: "第3-4周" },
  "home.howwework.s3.title": { en: "Deploy", zh: "部署" },
  "home.howwework.s3.desc": { en: "Go live. Your team starts using AI daily. We train your staff and monitor results.", zh: "上线。你的团队开始每天使用AI。我们培训你的员工并监控结果。" },
  "home.howwework.s3.detail": { en: "Week 5", zh: "第5周" },
  "home.howwework.s4.title": { en: "Support", zh: "支持" },
  "home.howwework.s4.desc": { en: "Monthly optimization, new AI features, and ongoing support. AI keeps getting smarter.", zh: "每月优化，新AI功能，持续支持。AI越来越聪明。" },
  "home.howwework.s4.detail": { en: "Week 6+", zh: "第6周+" },

  // ROI Calculator
  "home.roi.title": { en: "How Much Can AI Save Your Business?", zh: "AI能为你的生意省多少？" },
  "home.roi.sub": { en: "Select your business type. Slide your staff count. See your savings.", zh: "选择你的业务类型。滑动员工人数。查看你的节省。" },
  "home.roi.bizType": { en: "What type of business do you run?", zh: "你做什么行业？" },
  "home.roi.staffCount": { en: "Number of staff", zh: "员工人数" },
  "home.roi.estimated": { en: "Estimated annual savings for your", zh: "你的" },
  "home.roi.selectFirst": { en: "Select a business type above to see your savings", zh: "请先选择上面的业务类型来查看你的节省" },
  "home.roi.thats": { en: "That's", zh: "也就是" },
  "home.roi.backInPocket": { en: "back in your pocket", zh: "回到你的口袋" },
  "home.roi.enterprise": { en: "— enterprise-scale AI delivers exponentially higher returns", zh: "——企业级AI带来指数级更高回报" },
  "home.roi.sme": { en: "SME (10-50 staff)", zh: "中小企业 (10-50人)" },
  "home.roi.enterpriseLabel": { en: "Enterprise (50+)", zh: "大型企业 (50+)" },
  "home.roi.talkToUs": { en: "Talk to Us", zh: "联系我们" },
  "home.roi.biz.service": { en: "Service Business", zh: "服务业" },
  "home.roi.biz.service.desc": { en: "Aircond, plumbing, cleaning, repair", zh: "空调、水管、清洁、维修" },
  "home.roi.biz.trading": { en: "Trading Business", zh: "贸易业" },
  "home.roi.biz.trading.desc": { en: "Wholesale, retail, distribution", zh: "批发、零售、分销" },
  "home.roi.biz.asset": { en: "Asset & Investment", zh: "资产 & 投资" },
  "home.roi.biz.asset.desc": { en: "Property, co-living, rental", zh: "房地产、共居、出租" },
  "home.roi.biz.healthcare": { en: "Healthcare", zh: "医疗保健" },
  "home.roi.biz.healthcare.desc": { en: "Clinics, medical equipment, pharmacy", zh: "诊所、医疗器械、药房" },
  "home.roi.biz.fnb": { en: "F&B / Events", zh: "餐饮 / 活动" },
  "home.roi.biz.fnb.desc": { en: "Restaurants, catering, food trucks", zh: "餐厅、承办、餐车" },
  "home.roi.biz.other": { en: "Other", zh: "其他" },
  "home.roi.biz.other.desc": { en: "Tell us about your business", zh: "告诉我们你的行业" },

  // Testimonials
  "home.testimonials.pill": { en: "Real Results", zh: "真实成果" },
  "home.testimonials.title": { en: "AI empowering", zh: "AI 赋能" },
  "home.testimonials.title2": { en: "173 business units across 35+ companies", zh: "35+家公司的173个业务单位" },
  "home.testimonials.sub": {
    en: "Real numbers from real businesses. Not case studies — these are our own companies.",
    zh: "真实企业的真实数据。不是案例研究——这些是我们自己的公司。",
  },

  // Team Culture
  "home.team.pill": { en: "Our Team", zh: "我们的团队" },
  "home.team.title": { en: "400+ people.", zh: "400+人。" },
  "home.team.title2": { en: "One mission.", zh: "一个使命。" },
  "home.team.sub": {
    en: "From masquerade nights to durian outings — we build together, celebrate together.",
    zh: "从化妆舞会到榴莲聚会——一起建造，一起庆祝。",
  },
  "home.team.meetTeam": { en: "Meet the Team", zh: "认识团队" },
  "home.team.viewPositions": { en: "View Open Positions", zh: "查看职位空缺" },

  // Operator Credibility
  "home.operator.title": {
    en: "We're not consultants. We're not software developers.",
    zh: "我们不是顾问。我们不是软件开发商。",
  },
  "home.operator.title2": { en: "We're business owners.", zh: "我们是企业主。" },
  "home.operator.sub": {
    en: "Every AI tool we sell, we use first. Across 173 business units with 400+ staff. If it doesn't work for us, we don't sell it to you.",
    zh: "我们卖的每一个AI工具，都是我们先用的。跨173个业务单位，400+员工。对我们不管用，就不会卖给你。",
  },
  "home.operator.coLiving": { en: "Co-Living", zh: "共居" },
  "home.operator.healthcare": { en: "Healthcare", zh: "医疗保健" },
  "home.operator.scaffolding": { en: "Scaffolding", zh: "脚手架" },
  "home.operator.result1": { en: "+800% growth using AI operations", zh: "AI运营增长800%+" },
  "home.operator.result2": { en: "In 6 months with AI-driven marketing", zh: "AI驱动营销6个月" },
  "home.operator.result3": { en: "From zero with AI sales automation", zh: "AI销售自动化从零开始" },
  "home.operator.powered": { en: "Our companies powered by AI", zh: "我们的公司由AI驱动" },
  "home.operator.moreCompanies": { en: "more companies", zh: "更多公司" },

  // Final CTA
  "home.finalcta.title": { en: "Your competitors are already implementing AI.", zh: "你的竞争对手已经在实施AI了。" },
  "home.finalcta.title2": { en: "Are you?", zh: "你呢？" },
  "home.finalcta.sub": {
    en: "One WhatsApp message. We'll tell you exactly where AI can improve your business. No pitch. Just answers.",
    zh: "一条WhatsApp消息。我们会告诉你AI可以在哪里改善你的生意。不推销。只给答案。",
  },
  "home.finalcta.cta": { en: "WhatsApp Us — Let's Talk AI", zh: "WhatsApp 我们——聊聊AI" },
  "home.finalcta.guarantee": { en: "30-Day Money-Back Guarantee", zh: "30天退款保证" },
  "home.finalcta.noLock": { en: "No Lock-In", zh: "不绑约" },

  // ─── ABOUT PAGE ─────────────────────────────────────────────
  "about.hero.pill": { en: "About Us", zh: "关于我们" },
  "about.hero.title": { en: "We Don't Wait for the Future.", zh: "我们不等待未来。" },
  "about.hero.title2": { en: "We Build It.", zh: "我们创造它。" },
  "about.hero.sub": {
    en: "From digital marketing dominance to AI-powered operations — Utopia Group is Malaysia's frontier company. We break through. We scale. We never stop.",
    zh: "从数字营销主导到AI驱动运营——Utopia Group 是马来西亚的前沿公司。我们突破。我们扩展。我们永不停歇。",
  },
  "about.stats.companies": { en: "Companies", zh: "家公司" },
  "about.stats.units": { en: "Business Units", zh: "个业务单位" },
  "about.stats.staff": { en: "Staff", zh: "员工" },
  "about.stats.partners": { en: "Partners", zh: "个合伙人" },
  "about.story.pill": { en: "Our Story", zh: "我们的故事" },
  "about.story.title": { en: "Three eras.", zh: "三个时代。" },
  "about.story.title2": { en: "One relentless mission.", zh: "一个不懈的使命。" },
  "about.story.sub": {
    en: "Every chapter of Utopia starts the same way — someone said it couldn't be done, and we did it anyway.",
    zh: "Utopia 的每一章都是这样开始的——有人说这不可能，我们还是做到了。",
  },
  "about.story.era1": { en: "2014 – 2021", zh: "2014 – 2021" },
  "about.story.era1.title": { en: "The Growth Engine", zh: "增长引擎" },
  "about.story.era1.copy": {
    en: "We started with one co-living business and a belief: traditional Malaysian businesses were sitting on untapped growth. We became the growth engine they didn't know they needed. Hyper-targeted digital campaigns. SEO dominance across hundreds of keywords. High-exposure advertising that put businesses on the map overnight. We didn't just market — we engineered visibility at scale. By 2021, we'd built 35+ companies across healthcare, construction, transport, events, and F&B — all powered by relentless digital strategy.",
    zh: "我们从一家共居业务和一个信念开始：马来西亚传统企业坐拥未开发的增长。我们成为了他们不知道自己需要的增长引擎。精准数字营销。数百个关键词的SEO主导。高曝光广告让企业一夜成名。我们不只是做营销——我们大规模工程化了可见度。到2021年，我们已在医疗、建筑、运输、活动和餐饮等领域建立了35+家公司——全部由不懈的数字策略驱动。",
  },
  "about.story.era2": { en: "2022 – Now", zh: "2022 – 至今" },
  "about.story.era2.title": { en: "The AI Shift", zh: "AI 转型" },
  "about.story.era2.copy": {
    en: "When the world started talking about AI, we were already shipping it. We deployed AI across every company in the group — automating operations, eliminating manual work, building products that didn't exist yet. SlipMatch for bank reconciliation. RecurPay for collections. GetBill for utility extraction. Kreativ for design. We don't sell AI theory. We sell battle-tested tools forged inside real businesses with real revenue.",
    zh: "当世界开始讨论AI时，我们已经在交付了。我们在集团的每家公司部署AI——自动化运营，消除手工工作，建造尚不存在的产品。SlipMatch用于银行对账。RecurPay用于收款。GetBill用于水电费提取。Kreativ用于设计。我们不卖AI理论。我们卖的是在有真实收入的真实企业中锻造的工具。",
  },
  "about.story.era3": { en: "The Frontier", zh: "前沿" },
  "about.story.era3.title": { en: "Built by People Who Became Partners", zh: "由成为合伙人的员工建造" },
  "about.story.era3.copy": {
    en: "Frontier means you go where others won't. 27 of our people became partners — they joined as staff, proved themselves in the trenches, and now run their own businesses under Utopia. That's not a hiring stat. That's a growth philosophy. We believe the best companies aren't built by founders alone. They're built by people who are hungry enough to become founders themselves. 400+ staff. 27 partners. One mission: build what's next.",
    zh: "前沿意味着你去别人不敢去的地方。我们有27个人成为了合伙人——他们以员工身份加入，在战壕中证明自己，现在在Utopia旗下经营自己的生意。这不是一个招聘统计数据。这是一种增长哲学。我们相信最好的公司不是由创始人独自建立的。而是由那些渴望成为创始人的人建立的。400+员工。27个合伙人。一个使命：创造未来。",
  },
  "about.team.pill": { en: "Our Team", zh: "我们的团队" },
  "about.team.title": { en: "Built by", zh: "由" },
  "about.team.title2": { en: "people who ship", zh: "交付的人建造" },
  "about.team.sub": {
    en: "400+ staff across 35+ companies. An 18-person AI team building the products that power everything.",
    zh: "35+家公司的400+员工。一个18人的AI团队建造驱动一切的产品。",
  },
  "about.team.linkedin": { en: "Meet the full team on LinkedIn", zh: "在LinkedIn上认识全部团队" },
  "about.team.linkedinSub": { en: "400+ staff · Utopia Group of Companies", zh: "400+员工 · Utopia Group of Companies" },
  "about.portfolio.pill": { en: "Our Portfolio", zh: "我们的组合" },
  "about.portfolio.title": { en: "35+ companies.", zh: "35+家公司。" },
  "about.portfolio.title2": { en: "173 business units.", zh: "173个业务单位。" },
  "about.portfolio.sub": {
    en: "Every company runs on our AI. Every tool we sell, we use first.",
    zh: "每家公司都运行我们的AI。我们卖的每个工具，都是我们先用的。",
  },
  "about.portfolio.businesses": { en: "businesses", zh: "个业务" },
  "about.portfolio.business": { en: "business", zh: "个业务" },
  "about.portfolio.inAction": { en: "Our Businesses in Action", zh: "我们的业务实况" },
  "about.portfolio.inAction.sub": { en: "Real operations, real teams, real customers", zh: "真实运营，真实团队，真实客户" },
  "about.portfolio.aiProducts": { en: "Our AI Products", zh: "我们的AI产品" },
  "about.portfolio.aiProducts.sub": { en: "Built by Utopia Accelerator Sdn Bhd", zh: "由 Utopia Accelerator Sdn Bhd 建造" },
  "about.locations.pill": { en: "Our Locations", zh: "我们的地点" },
  "about.locations.offices": { en: "Offices &", zh: "办公室 &" },
  "about.locations.warehouses": { en: "Warehouses", zh: "仓库" },
  "about.locations.warehouseCount": { en: "8 Warehouses Across Malaysia", zh: "马来西亚全国8个仓库" },
  "about.cta.title": { en: "Want to work with us or", zh: "想和我们合作或" },
  "about.cta.title2": { en: "join the team?", zh: "加入团队？" },
  "about.cta.talkToUs": { en: "Talk to Us", zh: "联系我们" },
  "about.cta.viewPositions": { en: "View Open Positions", zh: "查看职位空缺" },

  // ─── CAREER PAGE ────────────────────────────────────────────
  "career.hero.pill": { en: "We're Hiring", zh: "我们在招聘" },
  "career.hero.title": { en: "Grow With Us Across", zh: "与我们共同成长" },
  "career.hero.title2": { en: "35+ Businesses", zh: "35+家企业" },
  "career.hero.sub": {
    en: "From AI engineers to aircond technicians — we're building the teams that power Malaysia's fastest-growing group of businesses.",
    zh: "从AI工程师到空调技师——我们正在建设驱动马来西亚增长最快的企业集团的团队。",
  },
  "career.banner": {
    en: "35+ companies · 173 business units · 400+ staff · RM130M+ revenue",
    zh: "35+家公司 · 173个业务单位 · 400+员工 · RM1.3亿+收入",
  },
  "career.banner.learn": { en: "Learn more about us →", zh: "了解更多 →" },
  "career.divisions.pill": { en: "Our Two Divisions", zh: "我们的两个部门" },
  "career.divisions.title": { en: "Find where you", zh: "找到你" },
  "career.divisions.title2": { en: "fit best", zh: "最适合的位置" },
  "career.divisions.sub": {
    en: "Utopia runs two divisions under one roof — each with its own culture, team, and career path.",
    zh: "Utopia 在同一屋檐下运营两个部门——每个部门都有自己的文化、团队和职业道路。",
  },
  "career.intelligence.title": { en: "Utopia Intelligence", zh: "Utopia Intelligence" },
  "career.intelligence.desc": {
    en: "Our back office and tech arm. Software developers, AI engineers, accountants, HR, and company secretaries — the people who make the whole group run.",
    zh: "我们的后台和技术部门。软件开发者、AI工程师、会计、人事和公司秘书——让整个集团运转的人。",
  },
  "career.business.title": { en: "Utopia Business", zh: "Utopia Business" },
  "career.business.desc": {
    en: "Our operations arm. Sales, customer service, field technicians, retail, and live hosts — the people who serve our customers every day across 35+ businesses.",
    zh: "我们的运营部门。销售、客服、现场技术人员、零售和直播主持人——每天在35+家企业中服务客户的人。",
  },
  "career.life.pill": { en: "Life at Utopia", zh: "Utopia 的生活" },
  "career.life.title": { en: "More than just", zh: "不只是" },
  "career.life.title2": { en: "a workplace", zh: "一个工作场所" },
  "career.life.sub": {
    en: "Team dinners, sports nights, birthday celebrations, and building things that matter — together.",
    zh: "团队晚餐、运动之夜、生日庆祝，一起建造有意义的东西。",
  },
  "career.positions.title": { en: "Open Positions", zh: "空缺职位" },
  "career.positions.sub": { en: "roles across our two divisions. Filter to find yours.", zh: "个职位分布在两个部门。筛选找到你的。" },
  "career.positions.all": { en: "All", zh: "全部" },
  "career.positions.apply": { en: "Apply via WhatsApp", zh: "通过WhatsApp申请" },
  "career.why.pill": { en: "Why Utopia", zh: "为什么选 Utopia" },
  "career.why.title": { en: "Built different.", zh: "与众不同。" },
  "career.why.title2": { en: "Built for growth.", zh: "为成长而建。" },
  "career.why.aiFirst": { en: "AI-First Culture", zh: "AI优先文化" },
  "career.why.aiFirst.desc": {
    en: "Every team uses AI daily. We don't talk about AI — we ship it. You'll work with cutting-edge models, not PowerPoints.",
    zh: "每个团队每天都用AI。我们不谈论AI——我们交付它。你将使用尖端模型工作，不是PPT。",
  },
  "career.why.realBiz": { en: "35+ Real Businesses", zh: "35+家真正的企业" },
  "career.why.realBiz.desc": {
    en: "Our operations span 35+ companies with 400+ staff. You'll see your work impact real operations, not just demos.",
    zh: "我们的运营跨越35+家公司，400+员工。你将看到你的工作影响真实运营，不只是演示。",
  },
  "career.why.growth": { en: "Growth Opportunity", zh: "成长机会" },
  "career.why.growth.desc": {
    en: "We're scaling fast across Southeast Asia. Early joiners get outsized responsibility and career trajectory.",
    zh: "我们正在东南亚快速扩展。早期加入者获得超额责任和职业发展。",
  },
  "career.why.learning": { en: "Learning Environment", zh: "学习环境" },
  "career.why.learning.desc": {
    en: "Dedicated learning budget, internal AI workshops, and direct access to the latest tools and research.",
    zh: "专属学习预算、内部AI工作坊，直接接触最新工具和研究。",
  },
  "career.benefits.title": { en: "Perks & Benefits", zh: "福利" },
  "career.benefits.flexible": { en: "Flexible Hours", zh: "弹性工时" },
  "career.benefits.flexible.desc": { en: "Results matter, not clock-in time", zh: "看结果，不看打卡" },
  "career.benefits.ai": { en: "AI Tools Provided", zh: "提供AI工具" },
  "career.benefits.ai.desc": { en: "Full access to GPT-4, Claude & more", zh: "全面使用GPT-4、Claude等" },
  "career.benefits.learning": { en: "Learning Budget", zh: "学习预算" },
  "career.benefits.learning.desc": { en: "Annual budget for courses & conferences", zh: "年度课程和会议预算" },
  "career.benefits.health": { en: "Health Insurance", zh: "健康保险" },
  "career.benefits.health.desc": { en: "Medical & dental coverage for you", zh: "为你提供医疗和牙科保险" },
  "career.benefits.events": { en: "Team Events", zh: "团队活动" },
  "career.benefits.events.desc": { en: "Monthly team activities & retreats", zh: "每月团队活动和退修" },
  "career.benefits.career": { en: "Career Growth", zh: "职业成长" },
  "career.benefits.career.desc": { en: "Fast-track promotion for high performers", zh: "高绩效者快速晋升" },
  "career.cta.title": { en: "Ready to join?", zh: "准备加入？" },
  "career.cta.sub": {
    en: "Send us a message on WhatsApp or email your resume. We respond within 24 hours.",
    zh: "在WhatsApp上给我们发消息或发送简历。我们24小时内回复。",
  },
  "career.cta.whatsapp": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  "career.cta.meetTeam": { en: "Meet the team →", zh: "认识团队 →" },

  // ─── AI STORY PAGE ──────────────────────────────────────────
  "ai.hero.title": { en: "Everyone\nBuilds.", zh: "每个人\n都在建造。" },
  "ai.hero.sub": {
    en: "From our accountant to our sales manager to our HR team. This is how a Malaysian company with 400+ staff made AI everyone's job.",
    zh: "从我们的会计到销售经理到人事团队。这就是一家拥有400+员工的马来西亚公司如何让AI成为每个人的工作。",
  },
  "ai.opening": {
    en: "Most companies are still debating their AI strategy. We skipped that part.",
    zh: "大多数公司仍在讨论他们的AI策略。我们跳过了这一步。",
  },
  "ai.opening2": {
    en: "When ChatGPT launched in late 2022, we didn't form a committee. We didn't hire a Head of AI. We didn't write a strategy document. We opened accounts, handed them to our team, and said: build something.",
    zh: "当ChatGPT在2022年底推出时，我们没有成立委员会。没有聘请AI主管。没有写策略文件。我们开了账号，交给团队，说：去做点东西。",
  },
  "ai.2022.p1": {
    en: "We're not a tech startup. We run 35+ real businesses — co-living, scaffolding, catering, healthcare, vehicle rental, cold chain logistics. 400+ staff across Malaysia. RM130M+ in revenue. The kind of company you'd never expect to be an AI pioneer.",
    zh: "我们不是科技创业公司。我们经营35+家真正的企业——共居、脚手架、承办、医疗、车辆出租、冷链物流。马来西亚全国400+员工。RM1.3亿+收入。你绝不会想到这种公司会成为AI先驱。",
  },
  "ai.2022.p2": { en: "That's exactly why it worked.", zh: "这正是它成功的原因。" },
  "ai.2022.p3": {
    en: "When you run an aircond servicing company and your technician scheduling takes 3 hours a day, you don't need an AI strategy. You need a solution. When your accountant spends 2 days matching bank slips to invoices, you don't need a whitepaper. You need SlipMatch.",
    zh: "当你经营一家空调服务公司，技师排班每天需要3小时，你不需要AI策略。你需要解决方案。当你的会计花2天匹配银行转账和发票，你不需要白皮书。你需要SlipMatch。",
  },
  "ai.2022.p4": {
    en: "We had real problems. AI had real solutions. The gap between \"interesting technology\" and \"this saves us money\" was exactly zero.",
    zh: "我们有真正的问题。AI有真正的解决方案。\"有趣的技术\"和\"这省了我们的钱\"之间的差距恰好是零。",
  },
  "ai.pull1": { en: "WE DIDN'T NEED\nAN AI STRATEGY.\nWE HAD REAL PROBLEMS.", zh: "我们不需要\nAI策略。\n我们有真正的问题。" },
  "ai.2023.p1": { en: "The turning point wasn't a technology breakthrough. It was a decision.", zh: "转折点不是技术突破。而是一个决定。" },
  "ai.2023.p2": {
    en: "We gave everyone unlimited AI access. No budget approvals. No \"you're not technical enough.\" No IT tickets. The accountant wants to try? Here's your subscription. HR wants to automate leave tracking? Go. The scaffolding operations manager wants to build a delivery tracker? We'll pay for it.",
    zh: "我们给了每个人无限的AI使用权。不需要预算审批。没有\"你技术不够\"。不用开IT工单。会计想试？给你订阅。人事想自动化请假追踪？去做。脚手架运营经理想建一个交付追踪器？我们买单。",
  },
  "ai.2023.p3": {
    en: "We started with ChatGPT subscriptions. Then Claude. Then Claude Code — the tool that changed everything. Right now we run 23 Claude Code Max Plan subscriptions, more than 20 OpenAI Plus subscriptions, plus Kling, Grok, Gemini, Midjourney, and many more. Anyone who wants to build, builds. The number keeps growing because the results keep compounding.",
    zh: "我们从ChatGPT订阅开始。然后是Claude。然后是Claude Code——改变一切的工具。现在我们有23个Claude Code Max Plan订阅，20+个OpenAI Plus订阅，加上Kling、Grok、Gemini、Midjourney 等等。任何想做东西的人都可以做。数量持续增长，因为结果持续复利。",
  },
  "ai.pull2": { en: "THE ACCOUNTANT BUILDS.\nTHE HR BUILDS.\nTHE SALES MANAGER BUILDS.", zh: "会计在做。\n人事在做。\n销售经理在做。" },
  "ai.sessions.title": { en: "Weekly sessions. Not lectures.", zh: "每周实践课。不是讲座。" },
  "ai.sessions.p1": {
    en: "Every week, without exception, we run AI building sessions. Not \"here's what AI can do\" presentations. Not strategy meetings. Actual sessions where people open Claude Code and build things.",
    zh: "每周，雷打不动，我们都有AI实作课。不是\"AI能做什么\"的演示。不是策略会议。是真正的实作课，大家打开Claude Code来做东西。",
  },
  "ai.sessions.p2": {
    en: "We teach Claude Code to people who've never written a line of code in their lives. Graphic designers. Recruiters. Operation managers. And you know what? They get it. They build things. Real things that run in production and save the company money.",
    zh: "我们教那些一辈子没写过一行代码的人使用Claude Code。平面设计师。招聘人员。运营经理。你知道吗？他们学会了。他们做出了东西。真正在生产中运行并为公司省钱的东西。",
  },
  "ai.sessions.p3": {
    en: "The technical people build faster. But the non-technical people build things we'd never have thought of — because they know their own pain points better than any developer could.",
    zh: "技术人员做得更快。但非技术人员做出了我们从没想到的东西——因为他们比任何开发者都更了解自己的痛点。",
  },
  "ai.pull3": { en: "WE DON'T TEACH\nAI THEORY.\nWE TEACH PEOPLE TO SHIP.", zh: "我们不教\nAI理论。\n我们教人交付。" },
  "ai.2024.p1": {
    en: "Here's what surprises everyone: the best ideas don't come from the developers.",
    zh: "让所有人都惊讶的是：最好的点子不是来自开发者。",
  },
  "ai.2024.p2": {
    en: "They come from the person who does the job every day. The one who knows that this particular report takes 4 hours because you have to cross-reference three spreadsheets. The one who knows that customers always ask the same 12 questions on WhatsApp and nobody can reply fast enough.",
    zh: "它们来自每天做这份工作的人。那个知道这份报告要4小时因为你得交叉对比三个电子表格的人。那个知道客户总是在WhatsApp上问同样12个问题而没人能回复够快的人。",
  },
  "ai.2024.p3": {
    en: "When you give that person a tool to build their own solution, they don't need a product requirements document. They don't need a Jira ticket. They just build it.",
    zh: "当你给那个人一个工具来构建自己的解决方案时，他们不需要产品需求文档。不需要Jira工单。直接做就是了。",
  },
  "ai.2024.p4": {
    en: "We don't care about job titles. From accountant to website designer. From HR to recruiter. From graphic designer to sales manager to operations manager. Everyone at Utopia knows how to use Claude Code. And everyone — genuinely — is impressed by what they can do.",
    zh: "我们不在乎职位头衔。从会计到网站设计师。从人事到招聘人员。从平面设计师到销售经理到运营经理。Utopia的每个人都知道如何使用Claude Code。每个人——真的——都对自己能做到的事情感到惊叹。",
  },
  "ai.shipped.title": { en: "This isn't theoretical.", zh: "这不是理论。" },
  "ai.shipped.sub": { en: "Here's what our people — not outsourced developers, our actual staff — shipped:", zh: "这是我们的人——不是外包开发者，是我们的员工——做出来的：" },
  "ai.shipped.allBuilt": { en: "All built in-house. All running in production. All making money.", zh: "全部内部建造。全部在生产中运行。全部在赚钱。" },
  "ai.pull4": { en: "35 COMPANIES.\nALL RUNNING AI.\nALL BUILT FROM\nTHE INSIDE.", zh: "35家公司。\n全部运行AI。\n全部从\n内部建造。" },
  "ai.now.p1": {
    en: "23 Claude Code Max Plans. 20+ OpenAI Plus subscriptions. Kling, Grok, Gemini, Midjourney, and many more — and the numbers keep climbing. Weekly building sessions. A company where the default answer to \"can we automate this?\" is \"try it and find out.\"",
    zh: "23个Claude Code Max Plan。20+个OpenAI Plus订阅。Kling、Grok、Gemini、Midjourney等等——数量还在攀升。每周实作课。一家公司，对\"我们能自动化这个吗？\"的默认回答是\"试试看就知道了。\"",
  },
  "ai.now.p2": { en: "We didn't follow a playbook. We didn't have a roadmap. We just started — and kept going.", zh: "我们没有遵循任何剧本。没有路线图。我们只是开始了——然后持续前进。" },
  "ai.now.p3": { en: "You don't need a Silicon Valley budget. You don't need a CTO with a PhD. You don't need a 12-month digital transformation roadmap.", zh: "你不需要硅谷级别的预算。不需要有博士学位的CTO。不需要12个月的数字化转型路线图。" },
  "ai.now.p4": { en: "You need one subscription. One weekly meeting. And the willingness to let everyone build.", zh: "你需要一个订阅。一个每周的会议。以及让每个人都去做的意愿。" },
  "ai.pull5": { en: "YOU DON'T NEED\nA STRATEGY.\nYOU NEED TO START.", zh: "你不需要\n策略。\n你需要开始。" },
  "ai.cta.title": { en: "Two ways to be part of this.", zh: "两种方式加入我们。" },
  "ai.cta.buildWithUs": { en: "Build with us", zh: "与我们一起建造" },
  "ai.cta.buildForYou": { en: "Let us build for you", zh: "让我们为你建造" },
  "ai.shipped.slipmatch": { en: "Bank reconciliation that took 3 hours — now 3 minutes", zh: "银行对账从3小时——变成3分钟" },
  "ai.shipped.getbill": { en: "Utility bill extraction, no more manual data entry", zh: "水电费提取，不再手工录入" },
  "ai.shipped.recurpay": { en: "Collection tracking across all 35+ companies", zh: "35+家公司的收款追踪" },
  "ai.shipped.bossos": { en: "Custom command centers for DKing, Scaffolding, Kak Kenduri, Ibnu Sina", zh: "为DKing、Scaffolding、Kak Kenduri、Ibnu Sina定制的指挥中心" },
  "ai.shipped.trueai": { en: "WhatsApp AI agents handling sales conversations 24/7", zh: "WhatsApp AI代理全天候处理销售对话" },
  "ai.shipped.payroll": { en: "GPS attendance + automatic salary calculation for 400+ staff", zh: "400+员工的GPS考勤+自动薪资计算" },
  "ai.shipped.autoviral": { en: "AI social media content across every brand", zh: "每个品牌的AI社交媒体内容" },
  "ai.shipped.kreativ": { en: "AI design platform used daily by our marketing team", zh: "我们营销团队每天使用的AI设计平台" },

  // ─── AUTOMATE PAGE ──────────────────────────────────────────
  "automate.hero.pill": { en: "Our AI Tools", zh: "我们的AI工具" },
  "automate.hero.title": { en: "Every Tool We Sell,", zh: "我们卖的每个工具，" },
  "automate.hero.title2": { en: "We Use First", zh: "都是我们先用的" },
  "automate.hero.sub": {
    en: "8 live AI products powering 35+ companies daily. Built by business owners who needed these tools — then made them available to you.",
    zh: "8个AI产品每天为35+家公司服务。由需要这些工具的企业主打造——然后提供给你。",
  },
  "automate.stats.tools": { en: "Live AI Tools", zh: "在线AI工具" },
  "automate.stats.companies": { en: "Companies Using Them", zh: "使用它们的公司" },
  "automate.stats.users": { en: "Daily Users", zh: "每日用户" },
  "automate.stats.improvement": { en: "Earnings Improvement", zh: "收入提升" },
  "automate.cta.title": { en: "Want these tools in", zh: "想在你的生意中使用" },
  "automate.cta.title2": { en: "your business?", zh: "这些工具？" },
  "automate.cta.sub": {
    en: "We find at least 5 areas where AI can improve your business. Average client gets 6. All-In clients get 15.",
    zh: "我们至少找到5个AI可以改善你生意的领域。普通客户得到6个。全包客户得到15个。",
  },
  "automate.cta.whatsapp": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
  "automate.cta.pricing": { en: "See Pricing", zh: "查看定价" },

  // ─── HOW WE CHARGE PAGE ─────────────────────────────────────
  "charge.hero.pill": { en: "Transparent Pricing", zh: "透明定价" },
  "charge.hero.title": { en: "How We", zh: "我们怎么" },
  "charge.hero.title2": { en: "Charge", zh: "收费" },
  "charge.hero.sub": {
    en: "We're not a SaaS subscription. We're operators who build real AI infrastructure in your office. Here's exactly what you pay — no hidden fees.",
    zh: "我们不是SaaS订阅。我们是在你的办公室建造真正AI基础设施的运营者。你的付费——完全透明，没有隐藏费用。",
  },
  "charge.model.title": { en: "Our model is simple", zh: "我们的模式很简单" },
  "charge.model.sub": {
    en: "One-time setup to build your AI infrastructure. Low monthly fee to keep it running and improving.",
    zh: "一次性设置建造你的AI基础设施。低月费保持运行和改进。",
  },
  "charge.model.s1.title": { en: "Try Free", zh: "免费试用" },
  "charge.model.s1.desc": { en: "Use our AI tools at no cost. See value before committing.", zh: "免费使用我们的AI工具。承诺之前先看到价值。" },
  "charge.model.s2.title": { en: "Setup", zh: "设置" },
  "charge.model.s2.desc": { en: "We install AI in your office. One-time fee, real infrastructure.", zh: "我们在你的办公室安装AI。一次性费用，真实基础设施。" },
  "charge.model.s3.title": { en: "Maintain", zh: "维护" },
  "charge.model.s3.desc": { en: "Low monthly fee. AI keeps learning. We keep optimizing.", zh: "低月费。AI持续学习。我们持续优化。" },
  "charge.pricing.title": { en: "Choose your starting point", zh: "选择你的起点" },
  "charge.faq.pill": { en: "Common Questions", zh: "常见问题" },
  "charge.faq.title": { en: "Frequently Asked", zh: "常见问答" },
  "charge.faq.q1": { en: "Why is the setup cost RM12,000?", zh: "为什么设置费用是RM12,000？" },
  "charge.faq.a1": {
    en: "We install a physical Mac Mini in your office, set up your custom AI dashboard, build your knowledge base, and deploy TrueAI on your WhatsApp. This isn't a subscription toggle — it's real infrastructure built specifically for your business.",
    zh: "我们在你的办公室安装一台Mac Mini，设置你的定制AI仪表板，建造你的知识库，在你的WhatsApp上部署TrueAI。这不是一个订阅开关——这是专门为你的生意建造的真实基础设施。",
  },
  "charge.faq.q2": { en: "What does the RM3,000/month cover?", zh: "RM3,000/月包含什么？" },
  "charge.faq.a2": {
    en: "Monthly AI optimization, support, server costs, and continuous improvement of your AI systems. It's cheaper than one junior staff member — and AI never sleeps or takes leave.",
    zh: "每月AI优化、支持、服务器成本和AI系统的持续改进。比一个初级员工还便宜——而且AI从不睡觉也不请假。",
  },
  "charge.faq.q3": { en: "Can I start without paying anything?", zh: "我可以不花钱就开始吗？" },
  "charge.faq.a3": {
    en: "Yes. Our free tools (SlipMatch, AutoViral, RecurPay) require no signup and no credit card. Use them first, see the value, then decide if you want full implementation.",
    zh: "可以。我们的免费工具（SlipMatch、AutoViral、RecurPay）不需要注册，不需要信用卡。先用，看到价值，再决定是否要全面实施。",
  },
  "charge.faq.q4": { en: "How long until I see ROI?", zh: "多久能看到投资回报？" },
  "charge.faq.a4": {
    en: "Most clients see ROI within the first month. Our SME clients save an average of RM15,000/month. The RM12,000 setup pays for itself in under 30 days for most businesses.",
    zh: "大多数客户在第一个月就能看到ROI。我们的中小企业客户平均每月节省RM15,000。RM12,000的设置费用在大多数企业中不到30天就能回本。",
  },
  "charge.faq.q5": { en: "What if it doesn't work for my business?", zh: "如果对我的生意不管用怎么办？" },
  "charge.faq.a5": {
    en: "We offer a 30-day money-back guarantee. If you don't see measurable improvement within the first month, we refund your setup fee. No questions asked.",
    zh: "我们提供30天退款保证。如果你在第一个月内没有看到可衡量的改善，我们退还你的设置费。不问任何问题。",
  },
  "charge.faq.q6": { en: "Why is this cheaper than other AI companies?", zh: "为什么比其他AI公司便宜？" },
  "charge.faq.a6": {
    en: "Because we built these tools for ourselves first. We run 35+ companies on the same AI. You're not paying for R&D — you're paying for battle-tested systems that already work.",
    zh: "因为我们先为自己建造了这些工具。我们用同样的AI运营35+家公司。你不是在为研发付费——你是在为已经验证有效的系统付费。",
  },
  "charge.cta.title": { en: "Still have questions about", zh: "还有关于" },
  "charge.cta.title2": { en: "pricing?", zh: "定价的问题？" },
  "charge.cta.sub": {
    en: "One WhatsApp message. We'll walk you through exactly what your business needs and what it costs.",
    zh: "一条WhatsApp消息。我们会详细告诉你你的生意需要什么以及费用。",
  },
  "charge.cta.button": { en: "WhatsApp Us — Let's Talk", zh: "WhatsApp 我们——聊聊" },

  // ─── MASTERCLASS CHOOSER ────────────────────────────────────
  "mc.hero.pill": { en: "AI Training Program", zh: "AI 培训课程" },
  "mc.hero.title": { en: "Utopia AI", zh: "Utopia AI" },
  "mc.hero.title2": { en: "Masterclass", zh: "大师班" },
  "mc.hero.sub1": { en: "AI Training From A Company That Uses It Daily", zh: "来自每天使用AI的公司的AI培训" },
  "mc.hero.sub2": {
    en: "We saved RM3M+ with AI across our own 35+ companies. Now we teach your team — or you — to do the same.",
    zh: "我们在35+家公司中用AI节省了RM300万+。现在教你的团队——或你——做同样的事。",
  },
  "mc.company.title": { en: "For Companies", zh: "企业培训" },
  "mc.company.sub": { en: "We come to your office. Train your entire team.", zh: "我们到你的办公室。培训你的整个团队。" },
  "mc.individual.title": { en: "For Individuals", zh: "个人培训" },
  "mc.individual.sub": { en: "Join our weekly sessions. Learn hands-on.", zh: "参加我们的每周课程。动手学习。" },

  // ─── MASTERCLASS INDIVIDUAL ─────────────────────────────────
  "mci.hero.pill": { en: "Individual AI Training", zh: "个人AI培训" },
  "mci.hero.title": { en: "Learn AI From The People Who", zh: "向每天" },
  "mci.hero.title2": { en: "Actually Use It Daily", zh: "实际使用AI的人学习" },
  "mci.hero.sub": {
    en: "Sit with our coders. Watch how we build. Leave with skills that add RM4,000-5,000 to your salary.",
    zh: "和我们的程序员坐在一起。看我们怎么做。带着能让你薪资增加RM4,000-5,000的技能离开。",
  },
  "mci.hero.cta1": { en: "Join Next Session", zh: "加入下一节课" },
  "mci.hero.cta2": { en: "View Schedule", zh: "查看时间表" },
  "mci.curriculum.pill": { en: "Curriculum", zh: "课程内容" },
  "mci.curriculum.title": { en: "What You'll", zh: "你将" },
  "mci.curriculum.title2": { en: "Master", zh: "掌握" },
  "mci.curriculum.sub": {
    en: "6 core AI skills across 8 hands-on sessions. Every tool the industry is hiring for.",
    zh: "8节实操课中的6项核心AI技能。业界正在招聘的每项工具。",
  },
  "mci.promise.pill": { en: "The Promise", zh: "承诺" },
  "mci.promise.title": { en: "What AI Skills", zh: "AI技能" },
  "mci.promise.title2": { en: "Actually Get You", zh: "真正能给你什么" },
  "mci.process.pill": { en: "Process", zh: "流程" },
  "mci.process.title": { en: "How It Works", zh: "怎么运作" },
  "mci.process.sub": { en: "From sign-up to certification in 8 weeks.", zh: "从注册到认证只需8周。" },
  "mci.prereq.pill": { en: "Before You Start", zh: "开始前" },
  "mci.prereq.title": { en: "Prerequisites", zh: "前置条件" },
  "mci.prereq.sub": { en: "Everything you need ready before your first session.", zh: "第一节课之前你需要准备好的一切。" },
  "mci.pricing.pill": { en: "Investment", zh: "投资" },
  "mci.pricing.title": { en: "Simple", zh: "简单" },
  "mci.pricing.title2": { en: "Pricing", zh: "定价" },
  "mci.pricing.pack": { en: "8-Session Pack", zh: "8节课套餐" },
  "mci.pricing.packTitle": { en: "8-Session AI Masterclass", zh: "8节AI大师班" },
  "mci.pricing.perSession": { en: "/session", zh: "/节" },
  "mci.pricing.total": { en: "total for", zh: "总共" },
  "mci.pricing.sessions": { en: "sessions", zh: "节课" },
  "mci.pricing.reserve": { en: "Reserve Your Spot", zh: "预订你的席位" },
  "mci.pricing.next": { en: "Next session starts soon. Limited spots.", zh: "下一期即将开始。名额有限。" },
  "mci.audience.pill": { en: "For You", zh: "适合你" },
  "mci.audience.title": { en: "Who This Is", zh: "适合" },
  "mci.audience.title2": { en: "For", zh: "谁" },
  "mci.audience.grad": { en: "Fresh Graduates", zh: "应届毕业生" },
  "mci.audience.grad.desc": { en: "Stand out from every other applicant. Show employers you can build with AI.", zh: "在所有求职者中脱颖而出。向雇主展示你能用AI做东西。" },
  "mci.audience.pro": { en: "Working Professionals", zh: "在职专业人士" },
  "mci.audience.pro.desc": { en: "Get the raise you deserve. Do what your senior does — faster and better.", zh: "获得你应得的加薪。做你上级做的事——更快更好。" },
  "mci.audience.entrepreneur": { en: "Entrepreneurs", zh: "创业者" },
  "mci.audience.entrepreneur.desc": { en: "Build your product without hiring a dev team. Launch in weeks, not months.", zh: "不用聘请开发团队就能建造你的产品。几周内上线，不是几个月。" },
  "mci.cta.title": { en: "Ready to", zh: "准备好" },
  "mci.cta.title2": { en: "Level Up?", zh: "升级了吗？" },
  "mci.cta.sub": { en: "Your competitors are already learning AI. Don't get left behind.", zh: "你的竞争对手已经在学AI了。别掉队。" },
  "mci.cta.join": { en: "Join the Next Session", zh: "加入下一节课" },

  // ─── CONTACT / RESULTS (Coming Soon) ────────────────────────
  "comingSoon.title": { en: "Coming Soon", zh: "即将推出" },
  "comingSoon.sub": { en: "This page is being rebuilt.", zh: "此页面正在重建中。" },
  "comingSoon.whatsapp": { en: "WhatsApp Us", zh: "WhatsApp 我们" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

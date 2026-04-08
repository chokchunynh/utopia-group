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
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

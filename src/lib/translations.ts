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
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

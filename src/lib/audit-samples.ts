export type AuditCategory =
  | "Operations"
  | "Sales"
  | "Marketing"
  | "Finance"
  | "HR"
  | "Customer";

export const CATEGORY_META: Record<
  AuditCategory,
  { color: string; bg: string; ring: string; emoji: string }
> = {
  Operations: { color: "#116dff", bg: "#116dff14", ring: "#116dff33", emoji: "⚙️" },
  Sales: { color: "#10B981", bg: "#10B98114", ring: "#10B98133", emoji: "💰" },
  Marketing: { color: "#EC4899", bg: "#EC489914", ring: "#EC489933", emoji: "📣" },
  Finance: { color: "#F59E0B", bg: "#F59E0B14", ring: "#F59E0B33", emoji: "📊" },
  HR: { color: "#8B5CF6", bg: "#8B5CF614", ring: "#8B5CF633", emoji: "👥" },
  Customer: { color: "#06B6D4", bg: "#06B6D414", ring: "#06B6D433", emoji: "💬" },
};

export type AuditFinding = {
  num: number;
  category: AuditCategory;
  title: string;
  description: string;
  savingPerYear: string;
  fixSetup: string;
  fixMonthly: string;
  payback: string;
};

export type AuditSample = {
  slug: string;
  industry: string;
  industryIcon: string;
  company: string;
  subtitle: string;
  ref: string;
  date: string;
  photo: string;
  photoAlt: string;
  snapshot: {
    operation: string;
    volume: string;
    stack: string;
  };
  findings: AuditFinding[];
  impact: {
    timeSaved: string;
    moneySaved: string;
    ourCost: string;
    netGain: string;
    netGainNumber: string;
    payback: string;
  };
  terms: {
    fullRollout: string;
    upfront: string;
    monthly: string;
  };
};

export const AUDIT_SAMPLES: AuditSample[] = [
  {
    slug: "kedai-kopi-ah-seng",
    industry: "F&B · Kopitiam Chain",
    industryIcon: "🍜",
    company: "Kedai Kopi Ah Seng",
    subtitle: "3 outlets · Petaling Jaya / Subang Jaya / Klang",
    ref: "UAA-2026-008",
    date: "15 Apr 2026",
    photo: "/audit-samples/kopitiam.jpg",
    photoAlt: "Morning at a Klang-area kopitiam — uncle with kopi and newspaper, Milo and Nescafé tins on the shelf",
    snapshot: {
      operation: "3 outlets · 42 staff (28 kitchen/service, 8 cashier, 6 admin)",
      volume: "RM380k/mo revenue · 2,400 orders/day · 60% dine-in / 40% delivery",
      stack: "Loyverse POS · Excel inventory · WhatsApp coordination · manual payroll",
    },
    findings: [
      {
        num: 1,
        category: "Operations",
        title: "Daily stock count eats 14 staff-hours/week",
        description:
          "Each outlet manager counts 47 SKUs by hand at opening, WhatsApps a photo of the tally sheet to HQ, ops admin re-types into Excel. Errors surface 3–5 days late when variance is reconciled. 20 hrs/week lost across the operation, ~RM2k/month in stock shrinkage caught too late.",
        savingPerYear: "RM15,600/yr",
        fixSetup: "RM3,800",
        fixMonthly: "RM180/mo",
        payback: "3 months",
      },
      {
        num: 2,
        category: "Customer",
        title: "WhatsApp order chaos — 11% of delivery orders mis-keyed",
        description:
          "Grab, Foodpanda, and walk-in WhatsApp orders funnel to one cashier phone. Cashier manually retypes into POS. 11% have wrong items or missing modifiers (\"kurang manis\", \"tambah ais\", \"bungkus\"). RM13k/yr in remakes + est. RM40k/yr delivery churn from 1-star reviews citing wrong orders.",
        savingPerYear: "RM53,000/yr",
        fixSetup: "RM6,500",
        fixMonthly: "RM450/mo",
        payback: "4 months",
      },
      {
        num: 3,
        category: "HR",
        title: "Payroll takes 2.5 days/month — PCB errors on 3 of last 6 months",
        description:
          "Admin calculates OT, allowances, EPF/SOCSO/PCB in Excel. Three recent months had PCB under-deduction flagged by accountant (RM800–2,100 each). LHDN penalty exposure plus monthly accountant clean-up fees of RM400.",
        savingPerYear: "RM8,400/yr",
        fixSetup: "RM2,400",
        fixMonthly: "RM120/mo",
        payback: "2 months",
      },
      {
        num: 4,
        category: "Finance",
        title: "No margin visibility — 2 bestsellers losing money per plate",
        description:
          "POS tracks revenue per item but not food cost per item. Spot-check on 12 items found Nasi Lemak Ayam and Mee Goreng Mamak are negative-margin after current santan/chicken/oil cost. Repricing by RM1.50 or removing recovers RM2,800/month.",
        savingPerYear: "RM33,600/yr",
        fixSetup: "RM2,200",
        fixMonthly: "RM80/mo",
        payback: "1 month",
      },
      {
        num: 5,
        category: "HR",
        title: "Unverified OT claims — 18% of March OT had no POS activity",
        description:
          "Staff write OT on paper, manager signs, admin enters to payroll. No geo-fence or clock-in photo. March 2026 audit: 18% of claimed OT hours had no corresponding POS transactions during the claimed window. Same 6 staff consistently top OT claims.",
        savingPerYear: "RM28,000/yr",
        fixSetup: "RM1,800",
        fixMonthly: "RM60/mo",
        payback: "1 month",
      },
    ],
    impact: {
      timeSaved: "780 hrs/year (~0.4 FTE)",
      moneySaved: "RM99,400/year",
      ourCost: "RM25,480",
      netGain: "RM73,920",
      netGainNumber: "RM73,920",
      payback: "~3 months",
    },
    terms: {
      fullRollout: "RM25,480",
      upfront: "RM12,740",
      monthly: "RM2,123",
    },
  },
  {
    slug: "klinik-medik-sejahtera",
    industry: "Healthcare · GP Clinic",
    industryIcon: "🩺",
    company: "Klinik Medik Sejahtera",
    subtitle: "3 doctors · 8 staff · Bandar Baru Bangi + Kajang",
    ref: "UAA-2026-014",
    date: "15 Apr 2026",
    photo: "/audit-samples/clinic.jpg",
    photoAlt: "Klinik Keluarga Bangi waiting area — makcik and schoolboy, panel provider stickers on the glass door",
    snapshot: {
      operation: "2 clinic locations · 3 GPs · 8 support staff (4 reception, 2 nurse, 2 dispensary)",
      volume: "~1,600 patients/month · RM220k/mo revenue · 62% panel / 38% walk-in",
      stack: "ClinicPro (local install) · paper patient cards · manual panel claim forms · WhatsApp appts",
    },
    findings: [
      {
        num: 1,
        category: "Finance",
        title: "Panel claim submissions — 28 days avg turnaround, 14% rejected",
        description:
          "Claim forms handwritten, photocopied, couriered to 9 panels (PMCare, AIA, Great Eastern, Allianz, etc.). 14% bounce back for missing IC copy, wrong diagnosis code, or illegible handwriting. Average RM38k in claims outstanding past 60 days at any time.",
        savingPerYear: "RM42,000/yr",
        fixSetup: "RM4,200",
        fixMonthly: "RM220/mo",
        payback: "2 months",
      },
      {
        num: 2,
        category: "Marketing",
        title: "Appointment no-shows at 23% — no reminder system",
        description:
          "Patients book via WhatsApp or walk-in, no automated reminder. 23% no-show rate on 380 weekly bookings = ~87 wasted slots/week. Doctors idle during no-show windows; panel patients unable to re-book get turned away.",
        savingPerYear: "RM31,200/yr",
        fixSetup: "RM2,800",
        fixMonthly: "RM150/mo",
        payback: "2 months",
      },
      {
        num: 3,
        category: "Operations",
        title: "Medicine inventory — RM18k/yr expired stock written off",
        description:
          "Dispensary tracks stock on Excel, updated weekly. No batch or expiry tracking. March 2026 write-off: RM4,200 of antibiotics, insulin, and eye drops expired before use. Over-ordering slow-movers while fast-movers stock out.",
        savingPerYear: "RM18,000/yr",
        fixSetup: "RM3,400",
        fixMonthly: "RM160/mo",
        payback: "3 months",
      },
      {
        num: 4,
        category: "Operations",
        title: "MC and referral letters — 45 min/day doctor admin time",
        description:
          "Doctors handwrite MCs and referral letters between consults. 15 MCs + 4 referrals/day × ~2 min each = 45 min of doctor time lost daily. Template exists in Word but not linked to patient record or auto-populated with diagnosis codes.",
        savingPerYear: "RM28,800/yr",
        fixSetup: "RM2,200",
        fixMonthly: "RM90/mo",
        payback: "1.5 months",
      },
      {
        num: 5,
        category: "Finance",
        title: "Cash reconciliation — RM600–1,800/mo unexplained variance",
        description:
          "End-of-day till count vs ClinicPro report shows consistent variance. No audit trail on cash refunds or manual discounts. Receptionists have full edit rights in ClinicPro, no approval workflow on price overrides.",
        savingPerYear: "RM14,400/yr",
        fixSetup: "RM1,900",
        fixMonthly: "RM70/mo",
        payback: "2 months",
      },
    ],
    impact: {
      timeSaved: "620 hrs/year (~0.3 FTE)",
      moneySaved: "RM134,400/year",
      ourCost: "RM22,060",
      netGain: "RM112,340",
      netGainNumber: "RM112,340",
      payback: "~2 months",
    },
    terms: {
      fullRollout: "RM22,060",
      upfront: "RM11,030",
      monthly: "RM1,838",
    },
  },
  {
    slug: "residensi-harmoni-management",
    industry: "Property · Rental Management",
    industryIcon: "🏢",
    company: "Residensi Harmoni Management",
    subtitle: "4 condominiums · 120 units · Mont Kiara / Cheras / Puchong / Shah Alam",
    ref: "UAA-2026-021",
    date: "15 Apr 2026",
    photo: "/audit-samples/property.jpg",
    photoAlt: "Mid-tier Puchong residensi — weathered off-white paint, air-con units, laundry drying on balconies, guardhouse at entrance",
    snapshot: {
      operation: "4 strata properties · 120 rental units · 94% occupancy · 2 full-time admin",
      volume: "RM540k/mo rental revenue · RM78k/mo maintenance collected",
      stack: "Google Sheets rent roll · WhatsApp tenant groups · manual invoice PDFs · Maybank2U Biz",
    },
    findings: [
      {
        num: 1,
        category: "Finance",
        title: "Late rent chasing — 38 days avg collection cycle, RM82k always outstanding",
        description:
          "Admin manually WhatsApps each late tenant. No automated reminder ladder (day 3 / day 7 / day 14 / day 21). 23% of tenants consistently pay 2+ weeks late. No credit record kept — same late payers renewed year after year without rent adjustment.",
        savingPerYear: "RM46,000/yr",
        fixSetup: "RM3,800",
        fixMonthly: "RM180/mo",
        payback: "2 months",
      },
      {
        num: 2,
        category: "Customer",
        title: "Maintenance tickets — 6.4 days avg resolution, 22% lost in WhatsApp",
        description:
          "Tenants WhatsApp complaints to 3 different numbers (admin, security guard, owner). No ticketing system. Random tenant survey: 22% of reported issues never actioned. Aircon and plumbing complaints average 6.4 days to close, driving renewal churn.",
        savingPerYear: "RM24,000/yr",
        fixSetup: "RM4,200",
        fixMonthly: "RM260/mo",
        payback: "3 months",
      },
      {
        num: 3,
        category: "Finance",
        title: "Utility reconciliation — RM3,200/mo under-billed on TNB + water",
        description:
          "Common area utilities (corridor lights, lift, pool pump) split across units on flat rate. Spot-check on 2 properties shows actual usage 18% higher than billed. Owner silently absorbing the gap — never reviewed since 2022 rate changes.",
        savingPerYear: "RM38,400/yr",
        fixSetup: "RM2,600",
        fixMonthly: "RM110/mo",
        payback: "1 month",
      },
      {
        num: 4,
        category: "Sales",
        title: "Tenant screening — no background checks, 3 evictions in 2025",
        description:
          "Current process: IC copy + payslip photo. No CCRIS/CTOS check, no prior-landlord reference, no employment verification call. 3 evictions in 2025 cost RM38k combined (unpaid rent + legal + repair). All 3 had red flags missable only via proper screening.",
        savingPerYear: "RM28,000/yr",
        fixSetup: "RM2,400",
        fixMonthly: "RM90/mo",
        payback: "2 months",
      },
      {
        num: 5,
        category: "Operations",
        title: "Inspection reports — inconsistent, RM12k disputed deposits in 2025",
        description:
          "Move-in/move-out inspections done on paper with photos on personal phones in various formats. 7 deposit disputes in 2025; 4 ruled against landlord at Tribunal Tuntutan Pengguna Malaysia for insufficient evidence. No timestamped condition record per unit.",
        savingPerYear: "RM12,000/yr",
        fixSetup: "RM1,800",
        fixMonthly: "RM80/mo",
        payback: "2 months",
      },
    ],
    impact: {
      timeSaved: "840 hrs/year (~0.4 FTE)",
      moneySaved: "RM148,400/year",
      ourCost: "RM22,280",
      netGain: "RM126,120",
      netGainNumber: "RM126,120",
      payback: "~2 months",
    },
    terms: {
      fullRollout: "RM22,280",
      upfront: "RM11,140",
      monthly: "RM1,857",
    },
  },
];

/**
 * Pure calculation logic for BFO Consulting
 * Kyoto Machiya Intelligence & OTA Channel Yield Engine
 */

export interface OtaChannel {
  id: string;
  name: string;
  category: 'global' | 'domestic' | 'direct';
  baseCommissionPct: number;
  paymentFeePct: number;
  typicalStackedDiscountsPct: number;
  cancellationVolatility: string;
  medianLeadTimeDays: number;
  japanLicenceRequirement: string;
  notes: string;
}

export const OTA_CHANNELS: Record<string, OtaChannel> = {
  booking: {
    id: 'booking',
    name: 'Booking.com (Genius Tier 3)',
    category: 'global',
    baseCommissionPct: 15.0,
    paymentFeePct: 2.2,
    typicalStackedDiscountsPct: 10.0,
    cancellationVolatility: 'High (28.4%)',
    medianLeadTimeDays: 68,
    japanLicenceRequirement: 'Licence number required on listing',
    notes: 'Genius discounts often stack with mobile rates unless explicitly disabled.',
  },
  airbnb: {
    id: 'airbnb',
    name: 'Airbnb (Host-Only Fee)',
    category: 'global',
    baseCommissionPct: 3.0,
    paymentFeePct: 0.0,
    typicalStackedDiscountsPct: 0.0,
    cancellationVolatility: 'Low (11.2%)',
    medianLeadTimeDays: 92,
    japanLicenceRequirement: 'Automatic housing notification sync',
    notes: 'Guest pays separate service fee in standard split-fee model; host-only is 15%.',
  },
  ikyu: {
    id: 'ikyu',
    name: 'Ikyu.com (一休.com Luxury)',
    category: 'domestic',
    baseCommissionPct: 10.0,
    paymentFeePct: 0.0,
    typicalStackedDiscountsPct: 0.0,
    cancellationVolatility: 'Very Low (4.1%)',
    medianLeadTimeDays: 42,
    japanLicenceRequirement: 'Simple lodging or Ryokan license inspect verified',
    notes: 'Highest domestic ADR and lowest cancellation volatility in Kyoto.',
  },
  rakuten: {
    id: 'rakuten',
    name: 'Rakuten Travel (楽天トラベル)',
    category: 'domestic',
    baseCommissionPct: 9.0,
    paymentFeePct: 0.0,
    typicalStackedDiscountsPct: 2.0,
    cancellationVolatility: 'Moderate (16.8%)',
    medianLeadTimeDays: 28,
    japanLicenceRequirement: 'Simple lodging or Minpaku notification',
    notes: 'Gap-filler for short lead domestic weekends.',
  },
  jalan: {
    id: 'jalan',
    name: 'Jalan.net (じゃらんnet)',
    category: 'domestic',
    baseCommissionPct: 10.0,
    paymentFeePct: 0.0,
    typicalStackedDiscountsPct: 1.5,
    cancellationVolatility: 'Moderate (17.5%)',
    medianLeadTimeDays: 32,
    japanLicenceRequirement: 'Simple lodging or registered minpaku',
    notes: 'Strong Japanese domestic family and couples demographic.',
  },
  agoda: {
    id: 'agoda',
    name: 'Agoda (Global)',
    category: 'global',
    baseCommissionPct: 16.0,
    paymentFeePct: 2.0,
    typicalStackedDiscountsPct: 8.0,
    cancellationVolatility: 'High (26.1%)',
    medianLeadTimeDays: 54,
    japanLicenceRequirement: 'Licence verification mandatory',
    notes: 'Strong Southeast Asia & Taiwan traveler distribution.',
  },
  direct: {
    id: 'direct',
    name: 'Direct Booking Engine',
    category: 'direct',
    baseCommissionPct: 0.0,
    paymentFeePct: 3.2,
    typicalStackedDiscountsPct: 0.0,
    cancellationVolatility: 'Very Low (5.0%)',
    medianLeadTimeDays: 85,
    japanLicenceRequirement: 'Autonomous terms of service',
    notes: 'Zero platform commission; owner retains 96.8% before tax.',
  },
};

export interface NetYieldResult {
  grossADR: number;
  netPayout: number;
  totalDeductions: number;
  effectiveTakeRatePct: number;
  netRatePer100Yen: number;
}

/**
 * Calculates net yield and what the owner keeps from each booking
 */
export function calculateOtaNetYield(
  grossADR: number,
  channelId: string,
  options?: {
    includeStackedDiscounts?: boolean;
    customCommissionPct?: number;
  }
): NetYieldResult {
  const channel = OTA_CHANNELS[channelId] || OTA_CHANNELS.booking;
  const commissionPct = options?.customCommissionPct ?? channel.baseCommissionPct;
  const discountPct = options?.includeStackedDiscounts ? channel.typicalStackedDiscountsPct : 0;
  const paymentPct = channel.paymentFeePct;

  // Effective net calculations
  // If stacked discount applies, effective booking revenue before commission is reduced
  const discountedGross = grossADR * (1 - discountPct / 100);
  const commissionAmount = discountedGross * (commissionPct / 100);
  const paymentFeeAmount = discountedGross * (paymentPct / 100);
  const totalDeductions = (grossADR - discountedGross) + commissionAmount + paymentFeeAmount;
  const netPayout = Math.max(0, grossADR - totalDeductions);
  const effectiveTakeRatePct = (totalDeductions / grossADR) * 100;
  const netRatePer100Yen = (netPayout / grossADR) * 100;

  return {
    grossADR: Math.round(grossADR),
    netPayout: Math.round(netPayout),
    totalDeductions: Math.round(totalDeductions),
    effectiveTakeRatePct: Number(effectiveTakeRatePct.toFixed(1)),
    netRatePer100Yen: Number(netRatePer100Yen.toFixed(1)),
  };
}

/**
 * Known complaint point costs from 101,996 reviews of 367 Kyoto properties
 */
export interface ComplaintPenalty {
  id: string;
  name: string;
  category: 'hygiene' | 'hardware' | 'service' | 'checkin';
  scoreCost: number; // Points taken off
  monthlyCostToFix: number; // Estimated running cost of fix (yen)
  description: string;
}

export const COMPLAINT_PENALTIES: ComplaintPenalty[] = [
  {
    id: 'cleanliness',
    name: 'Cleanliness lapse (hair, dust, bathroom odor)',
    category: 'hygiene',
    scoreCost: 2.15,
    monthlyCostToFix: 45000,
    description: 'Cleanliness lapse costs 2.15 points; highest single ranking penalty in Kyoto.',
  },
  {
    id: 'stairs',
    name: 'Steep machiya stairs (unwarned in listing)',
    category: 'hardware',
    scoreCost: 0.43,
    monthlyCostToFix: 15000,
    description: 'Steep stairs cost 0.43 points; addressed by listing disclaimer and safety handrail.',
  },
  {
    id: 'checkin_confusion',
    name: 'Check-in & smart lock / keybox confusion',
    category: 'checkin',
    scoreCost: 0.82,
    monthlyCostToFix: 12000,
    description: 'Guest wandering in Kyoto alleys; solved by automated taxi card & video arrival guide.',
  },
  {
    id: 'insulation_cold',
    name: 'Traditional draught / inadequate winter heating',
    category: 'hardware',
    scoreCost: 0.54,
    monthlyCostToFix: 28000,
    description: 'Guests cold in wooden machiya; solved by under-rug heated mats and pre-warming schedule.',
  },
  {
    id: 'noise_neighbors',
    name: 'Thin timber acoustic transfer / street sound',
    category: 'hardware',
    scoreCost: 0.68,
    monthlyCostToFix: 20000,
    description: 'Sound carries between wooden machiya walls; solved by white noise machines and acoustic curtains.',
  },
];

/**
 * Calculate ROI and Break-Even for a fix under the stated 7% assumption per point
 * Assumption: Each 1.0 rating point is assumed to contribute ~7% ADR or occupancy lift.
 * (Note: Stated as an assumption, not guaranteed uplift).
 */
export function calculateFixRoi(
  adr: number,
  pointsPenalty: number,
  monthlyCost: number,
  monthlyOccupancyNights = 20,
  assumptionPctPerPoint = 0.07
): {
  assumedMonthlyUplift: number;
  netMonthlyGain: number;
  isProfitable: boolean;
  breakEvenAdr: number;
} {
  // Assumed monthly revenue uplift = Monthly Revenue * (pointsPenalty * assumptionPctPerPoint)
  const monthlyRevenue = adr * monthlyOccupancyNights;
  const assumedMonthlyUplift = Math.round(monthlyRevenue * (pointsPenalty * assumptionPctPerPoint));
  const netMonthlyGain = assumedMonthlyUplift - monthlyCost;
  const isProfitable = netMonthlyGain > 0;

  // Break-even ADR calculation:
  // monthlyCost = breakEvenAdr * monthlyOccupancyNights * (pointsPenalty * assumptionPctPerPoint)
  const breakEvenAdr = Math.round(
    monthlyCost / (monthlyOccupancyNights * pointsPenalty * assumptionPctPerPoint)
  );

  return {
    assumedMonthlyUplift,
    netMonthlyGain,
    isProfitable,
    breakEvenAdr,
  };
}

/**
 * Kyoto City Accommodation Tax calculation (effective since March 1, 2026 revisions)
 * Reference: Section 2.2 and 9.5 of the study
 */
export function getKyotoAccommodationTax(nightlyRatePerPerson: number): number {
  if (nightlyRatePerPerson < 20000) {
    return 200;
  } else if (nightlyRatePerPerson < 50000) {
    return 500;
  } else if (nightlyRatePerPerson < 100000) {
    return 1000;
  } else {
    return 2000;
  }
}

/**
 * Japanese guest scoring adjustment
 * Empirical finding: Japanese guests score 0.53 lower at the same house on average.
 * 49% of Japanese guests' low scores give no reason.
 */
export function adjustScoreForGuestMix(
  rawScore: number,
  japaneseGuestSharePct: number
): {
  normalizedScore: number;
  adjustmentDelta: number;
} {
  const fraction = Math.min(100, Math.max(0, japaneseGuestSharePct)) / 100;
  // If a property has a high share of Japanese guests, its raw score is structurally suppressed by 0.53 * fraction
  const adjustmentDelta = Number((fraction * 0.53).toFixed(2));
  const normalizedScore = Number((rawScore + adjustmentDelta).toFixed(2));
  return {
    normalizedScore,
    adjustmentDelta,
  };
}

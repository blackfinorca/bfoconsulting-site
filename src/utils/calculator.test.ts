import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateOtaNetYield,
  calculateFixRoi,
  getKyotoAccommodationTax,
  adjustScoreForGuestMix,
  OTA_CHANNELS,
} from './calculator';

test('OTA Net Yield correctly computes Booking.com take rate and net on ¥100 booking', () => {
  const result = calculateOtaNetYield(100, 'booking', { includeStackedDiscounts: false });
  // Booking base commission 15% + 2.2% payment = 17.2% deductions
  assert.equal(result.grossADR, 100);
  assert.equal(result.totalDeductions, 17);
  assert.equal(result.netPayout, 83);
  assert.equal(result.netRatePer100Yen, 82.8);
});

test('OTA Net Yield correctly computes Airbnb host-only take rate', () => {
  const result = calculateOtaNetYield(100000, 'airbnb', { includeStackedDiscounts: false });
  // 3% host-only = ¥3,000 commission, ¥97,000 net
  assert.equal(result.netPayout, 97000);
  assert.equal(result.effectiveTakeRatePct, 3.0);
  assert.equal(result.netRatePer100Yen, 97.0);
});

test('Fix ROI calculator confirms break-even threshold and profitability', () => {
  // Test with cleanliness lapse (-2.15 points)
  // At ¥94,000 ADR, 20 nights/mo, 7% assumption per point:
  // Monthly Rev = ¥1,880,000
  // Assumed uplift = ¥1,880,000 * (2.15 * 0.07) = ¥1,880,000 * 0.1505 = ¥282,940
  // Monthly cost = ¥45,000 -> highly profitable
  const resultHighADR = calculateFixRoi(94000, 2.15, 45000, 20, 0.07);
  assert.equal(resultHighADR.isProfitable, true);
  assert.ok(resultHighADR.assumedMonthlyUplift > 200000);

  // For a low impact fix like steep stairs (0.43 points) costing ¥30,000/mo at low ADR ¥20,000:
  // Monthly Rev = ¥400,000. Uplift = ¥400,000 * (0.43 * 0.07) = ¥12,040 < ¥30,000 -> not profitable
  const resultUnprofitable = calculateFixRoi(20000, 0.43, 30000, 20, 0.07);
  assert.equal(resultUnprofitable.isProfitable, false);
});

test('Kyoto accommodation tax matches statutory tiers since March 1, 2026', () => {
  assert.equal(getKyotoAccommodationTax(15000), 200);
  assert.equal(getKyotoAccommodationTax(35000), 500);
  assert.equal(getKyotoAccommodationTax(75000), 1000);
  assert.equal(getKyotoAccommodationTax(150000), 2000);
});

test('Japanese guest scoring normalization adjusts for -0.53 empirical delta', () => {
  // 100% Japanese guests: adjustment is +0.53
  const fullJapanese = adjustScoreForGuestMix(8.5, 100);
  assert.equal(fullJapanese.adjustmentDelta, 0.53);
  assert.equal(fullJapanese.normalizedScore, 9.03);

  // 50% Japanese guests: adjustment is ~0.27
  const halfJapanese = adjustScoreForGuestMix(8.5, 50);
  assert.equal(halfJapanese.adjustmentDelta, 0.27);
  assert.equal(halfJapanese.normalizedScore, 8.77);
});

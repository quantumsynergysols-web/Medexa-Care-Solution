/**
 * Tiered pricing: the single source of truth for rates.
 * The rate of the matching tier applies to the whole monthly collections figure.
 * Boundary rule (SRS open question Q2, proposed default): the upper bound is inclusive.
 */
export type PricingTier = { id: 1 | 2 | 3; name: string; maxCollections: number | null; ratePercent: number };

export const PRICING_TIERS: PricingTier[] = [
  { id: 1, name: "Growing Practice", maxCollections: 50_000, ratePercent: 4.99 },
  { id: 2, name: "Established Practice", maxCollections: 150_000, ratePercent: 3.99 },
  { id: 3, name: "High-Volume & Hospitals", maxCollections: null, ratePercent: 2.99 },
];

export function tierFor(monthlyCollections: number): PricingTier {
  return (
    PRICING_TIERS.find((t) => t.maxCollections !== null && monthlyCollections <= t.maxCollections) ??
    PRICING_TIERS[PRICING_TIERS.length - 1]
  );
}

export function estimateFee(monthlyCollections: number): { tier: PricingTier; fee: number } {
  const tier = tierFor(monthlyCollections);
  const fee = Math.round(monthlyCollections * tier.ratePercent) / 100;
  return { tier, fee };
}

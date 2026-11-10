// Feature flags for sections that are built but intentionally not shown.
// Flip a flag AND restore the matching import/markup in src/app/page.js.
//
// Pricing: PricingPlans.jsx is kept for later; pricing is not ready.
// Reviews: Reviews.jsx is kept for later; there are no real testimonials yet.
// Never show invented testimonials or prices.
export const features = {
  showPricing: false,
  showReviews: false,
}

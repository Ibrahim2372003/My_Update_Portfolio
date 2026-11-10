// LEGACY SHIM.
//
// The live site now reads from src/data/*. This file only keeps the exports
// that the two intentionally disabled components still import, so they stay
// valid, lint-clean and buildable until they are re-enabled:
//   - Reviews.jsx      (disabled: no real testimonials yet)
//   - PricingPlans.jsx (disabled: pricing is not ready)
// Do not add new content here.
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import CheckLineIcon from 'remixicon-react/CheckLineIcon'

// Reviews.jsx
export const starIcons = [<StarFillIcon key="full" />, <StarHalfLineIcon key="half" />]
export const arrowIcons = [<ArrowLeftSLineIcon key="l" />, <ArrowRightSLineIcon key="r" />]
export const reviewsData = [] // No fabricated testimonials.

// PricingPlans.jsx
export const checkIcon = <CheckLineIcon />
export const pricingPlans = [] // Real plans live (commented out) in src/data/pricing.js.

export const path = "/CrunchLab";

const predictiveDetails = "/details";
const details = "/more";

const msoHome = "/SalesBbOptimizer";
const MSORoutes = {
  msoDescriptive : `${msoHome}/descriptive`,
  msoPredictive : `${msoHome}/predictive`,
  msoAmazonPi : `${msoHome}/amazonpi`,
  msoPredictiveCard : `${msoHome}/predictive/${predictiveDetails}`
}

const tpoOptimiser = "/TradePromoOptimizer/predictive";
const tpoPredction = "/addPrediction";
const TPORoutes = {
  tpoDashboard: "/TradePromoOptimizer/descriptive",
  tpoOptimiser: tpoOptimiser,
  tpoDetails : `${tpoOptimiser}${predictiveDetails}/:id`,
  tpoTable : `${tpoOptimiser}${predictiveDetails}${details}/:id/:item`,
  tpoPredction : `${tpoOptimiser}${predictiveDetails}${tpoPredction}/:month`
};


export const routes = {
  login: "/login",
  dashboard: `${path}/*`,
  user: "/user-management",
  msoDescriptive : MSORoutes.msoDescriptive,
  mspPredictive : MSORoutes.msoPredictive,
  tpoDashboard: TPORoutes.tpoDashboard,
  tpoOptimiser: TPORoutes.tpoOptimiser,
  tpoDetails : TPORoutes.tpoDetails,
  tpoTable : TPORoutes.tpoTable,
  tpoPredction : TPORoutes.tpoPredction,
  msoAmazonPi : MSORoutes.msoAmazonPi,
  msoPredictiveCard : MSORoutes.msoPredictiveCard
};

export const appRouters = {
  msoDescriptive : `${path}${routes.msoDescriptive}`,
  msoPredictive : `${path}${routes.mspPredictive}`,
  user: `${path}${routes.user}`,
  tpoDashboard: `${path}${routes.tpoDashboard}`,
  tpoOptimiser : `${path}${routes.tpoOptimiser}`,
  tpoDetails : `${path}${tpoOptimiser}${predictiveDetails}/`,
  tpoTable : `${path}${tpoOptimiser}${predictiveDetails}${details}/`,
  tpoPredction : `${path}${tpoOptimiser}${predictiveDetails}${tpoPredction}/`,
  msoAmazonPI : `${path}${routes.msoAmazonPi}`,
  msoPredictiveCard : `${path}${msoHome}/predictive/${predictiveDetails}`
};



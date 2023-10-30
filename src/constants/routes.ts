export const path = "/CrunchLab";

const predictiveDetails = "/details";
const details = "/more";
const addPredction = "/addPrediction";

const msoHome = "/SalesBbOptimizer";
const MSORoutes = {
  msoDescriptive : `${msoHome}/descriptive`,
  msoPredictive : `${msoHome}/predictive`,
  msoAmazonPi : `${msoHome}/amazonpi`,
  msoPredictiveCard : `${msoHome}/predictive${predictiveDetails}/:id`,
  msoAddNewPlan : `${msoHome}/predictive${addPredction}/:month`,
  msoDetailsTable : `${msoHome}/predictive${predictiveDetails}${details}/:id/:name`
}

const tpoOptimiser = "/TradePromoOptimizer/predictive";
const TPORoutes = {
  tpoDashboard: "/TradePromoOptimizer/descriptive",
  tpoOptimiser: tpoOptimiser,
  tpoDetails : `${tpoOptimiser}${predictiveDetails}/:id`,
  tpoTable : `${tpoOptimiser}${predictiveDetails}${details}/:id/:name`,
  tpoAddNewPlan : `${tpoOptimiser}${predictiveDetails}${addPredction}/:month`
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
  tpoAddPredction : TPORoutes.tpoAddNewPlan,
  msoAmazonPi : MSORoutes.msoAmazonPi,
  msoPredictiveCard : MSORoutes.msoPredictiveCard,
  msoAddNewPlan : MSORoutes.msoAddNewPlan,
  msoDetailsTable : MSORoutes.msoDetailsTable
};

export const appRouters = {
  msoDescriptive : `${path}${routes.msoDescriptive}`,
  msoPredictive : `${path}${routes.mspPredictive}`,
  user: `${path}${routes.user}`,
  tpoDashboard: `${path}${routes.tpoDashboard}`,
  tpoOptimiser : `${path}${routes.tpoOptimiser}`,
  tpoDetails : `${path}${tpoOptimiser}${predictiveDetails}/`,
  tpoTable : `${path}${tpoOptimiser}${predictiveDetails}${details}/`,
  tpoAddPredction : `${path}${tpoOptimiser}${predictiveDetails}${addPredction}/`,
  msoAmazonPI : `${path}${routes.msoAmazonPi}`,
  msoPredictiveCard : `${path}${msoHome}/predictive${predictiveDetails}/`,
  msoAddNewPlan : `${path}${msoHome}/predictive${addPredction}/`,
  msoDetailsTable : `${path}${msoHome}/predictive${predictiveDetails}${details}/`
};



import tpoExpand from "src/assets/icons/tpo-expand.svg";
import msoExpand from "src/assets/icons/mso-expand.svg";
import { appRouters } from "src/constants/routes";

export const listData = [
    {
      panel: "panel1",
      icon: tpoExpand,
      title: "Trade Promo Optimiser",
      content: [
        {
          name: "Predictive View",
          path: appRouters.tpoOptimiser,
        },
        {
          name: "Descriptive View",
          path: appRouters.tpoDashboard,
        },
      ],
    },
    {
      panel: "panel2",
      icon: msoExpand,
      title: "Sales BB Optimiser",
      content: [
        {
          name: "Predictive View",
          path: appRouters.msoPredictive,
        },
        {
          name: "Descriptive View",
          path: appRouters.msoDescriptive,
        },
        {
          name: "Amazon PI",
          path: appRouters.msoAmazonPI,
        },
      ],
    },
  ];
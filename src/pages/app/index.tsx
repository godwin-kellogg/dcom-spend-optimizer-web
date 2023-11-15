import DashboardLayout from "src/components/dashboardLayout/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import LandingScreen from "./landingScreen/LandingScreen";
import UserManageMent from "./userManageMent/UserManageMent";
import { routes } from "src/constants/routes";
import TPODashboard from "./TPO/TPODashboard/TPODahboard";
import TPOOptimiser from "./TPO/TPOOptimiser/TPOOptimisers";
import TPOMonthDetails from "./TPO/TPODetails/TPOMonthDeails";
import TPOTable from "./TPO/TPODetailsTable/TPODetailsTable";
import TPOPredictionAdd from "./TPO/TPOPredictionAdd/TPOPredictionAdd";
import MSODashboard from "./MSO/MSODescriptive/MSODashboard";
import MSOPredictive from "./MSO/MSOPredictive/MSOPredictive";
import MSOAmazon from "./MSO/MSOAmazon/MSOAmazon";
import MSOPreDetails from "./MSO/MSOPreDetails/MSOPreDetails";
import MSOPredictiveTable from "./MSO/MSOPredictiveTable/MSOPredictiveTable";
import MSOPredictiveDetailsTable from "./MSO/MSOPredictiveDetailsTable/MSOPredictiveDetailsTable";


const AppScreen = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="*" element={<h3><code>Page You Requested Not Found</code></h3>} />
        <Route path={routes.tpoDashboard} element={<TPODashboard />} />
        <Route path={routes.tpoOptimiser} element={<TPOOptimiser />} />
        <Route path={routes.msoDescriptive} element={<MSODashboard />}/>
        <Route path={routes.mspPredictive} element={<MSOPredictive />}/>
        <Route path={routes.user} element={<UserManageMent />} />
        <Route path={routes.tpoDetails} element={<TPOMonthDetails />} />
        <Route path={routes.tpoTable} element={<TPOTable />} />
        <Route path={routes.tpoAddPredction} element={<TPOPredictionAdd />} />
        <Route path={routes.msoAmazonPi} element={<MSOAmazon />} />
        <Route path={routes.msoPredictiveCard} element={<MSOPreDetails />} />
        <Route path={routes.msoAddNewPlan} element={<MSOPredictiveTable />} />
        <Route path={routes.msoDetailsTable} element={<MSOPredictiveDetailsTable />} />
      </Routes>
    </DashboardLayout>
  );
};

export default AppScreen;

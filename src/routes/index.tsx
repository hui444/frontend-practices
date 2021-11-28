import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { PATHS } from '../common/paths';

const Home = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/home'));
const FrontendMentorHome = React.lazy(
  () => import(/* webpackChunckName: "FrontendMentorHome" */ '../pages/frontendMentor'),
);
const NftPreviewCardChallenge = React.lazy(
  () => import(/* webpackChunckName: "NftPreviewCardChallenge" */ '../pages/frontendMentor/nftPreviewCardChallenge'),
);
const OrderSummaryChallenge = React.lazy(
  () => import(/* webpackChunckName: "OrderSummaryChallenge" */ '../pages/frontendMentor/orderSummaryChallenge'),
);
const StatsPreviewCardChallenge = React.lazy(
  () =>
    import(/* webpackChunckName: "StatsPreviewCardChallenge" */ '../pages/frontendMentor/statsPreviewCardChallenge'),
);
const ColPreviewCardChallenge = React.lazy(
  () => import(/* webpackChunckName: "ColPreviewCardChallenge" */ '../pages/frontendMentor/colPreviewCardChallenge'),
);
const ProfileCardChallenge = React.lazy(
  () => import(/* webpackChunckName: "ProfileCardChallenge" */ '../pages/frontendMentor/profileCardChallenge'),
);

const Routes = () => {
  return (
    <Switch>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.FRONTEND_MENTOR_HOME} element={<FrontendMentorHome />} />
      <Route path={PATHS.NFT_PREVIEW_CARD_CHALLENGE} element={<NftPreviewCardChallenge />} />
      <Route path={PATHS.ORDER_SUMMARY_CHALLENGE} element={<OrderSummaryChallenge />} />
      <Route path={PATHS.STATS_PREVIEW_CARD_CHALLENGE} element={<StatsPreviewCardChallenge />} />
      <Route path={PATHS.COL_PREVIEW_CARD_CHALLENGE} element={<ColPreviewCardChallenge />} />
      <Route path={PATHS.PROFILE_CARD_CHALLENGE} element={<ProfileCardChallenge />} />
      <Route path="*" element={<>not found</>} />
    </Switch>
  );
};

export default Routes;

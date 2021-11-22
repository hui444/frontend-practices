import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { PATHS } from '../common/paths';

const Home = React.lazy(() => import(/* webpackChunckName: "Home" */ '../pages/home'));
const NftPreviewCardChallenge = React.lazy(
  () => import(/* webpackChunckName: "NftPreviewCardChallenge" */ '../pages/frontendMentor/nftPreviewCardChallenge'),
);

const Routes = () => {
  return (
    <Switch>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.NFT_PREVIEW_CARD_CHALLENGE} element={<NftPreviewCardChallenge />} />
      <Route path="*" element={<>not found</>} />
    </Switch>
  );
};

export default Routes;

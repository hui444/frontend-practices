import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<>not found</>} />
    </Switch>
  );
};

export default Routes;

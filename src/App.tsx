import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<div className="center">loading</div>}>
          <Routes />
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;

import { useNavigate } from 'react-router-dom';
import { PATHS } from '../common/paths';

import Card from '../components/card';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        title="frontend mentor practices"
        description={
          <>
            practices from{' '}
            <a href="https://frontendmentor.io" target="_blank" rel="noreferrer">
              frontendmentor.io
            </a>
          </>
        }
        buttonText="View"
        onClick={() => navigate(PATHS.FRONTEND_MENTOR_HOME)}
      />
    </div>
  );
};

export default Home;

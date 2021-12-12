import { useQuery } from 'react-query';

import { fetchRandomPicture } from 'api/nasa-api';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';

import './Home.scss';
import AstronomyPicture from './components/AstronomyPicture/AstronomyPicture';

const HomePage = () => {
  const { isLoading, data: picture } = useQuery('picture', fetchRandomPicture);

  return (
    <div className="home">
      <header className="home-header">
        <div className="picture-container">
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <AstronomyPicture picture={picture} />
          )}
        </div>
        <button>test</button>
      </header>
    </div>
  );
};

export default HomePage;

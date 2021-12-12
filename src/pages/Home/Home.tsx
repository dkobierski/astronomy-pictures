import { useQuery } from 'react-query';

import { preloadImage } from 'utils/image';
import { fetchRandomPicture } from 'api/nasa-api';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import Button from 'components/Button/Button';

import './Home.scss';
import AstronomyPicture from './components/AstronomyPicture/AstronomyPicture';

const fetchPicture = async () => {
  const picture = await fetchRandomPicture();
  await preloadImage(picture.url);

  return picture;
};

const HomePage = () => {
  const {
    isLoading,
    isRefetching,
    data: picture,
    refetch,
  } = useQuery('picture', fetchPicture, {});

  return (
    <div className="home">
      <header className="home-header">
        <div className="action-bar">
          <div className="action-bar-left">
            <Button
              className="action-btn"
              disabled={isRefetching}
              onClick={() => refetch()}
            >
              {isRefetching ? (
                <LoadingIndicator width="24" height="24" />
              ) : (
                'Następne'
              )}
            </Button>
            <Button className="action-btn">Zapisz</Button>
          </div>
          <div className="action-bar-right">
            <Button className="action-btn">Zapisane</Button>
          </div>
        </div>

        {isLoading ? (
          <div className="spinner-container">
            <LoadingIndicator />
          </div>
        ) : (
          <AstronomyPicture picture={picture} />
        )}
      </header>
    </div>
  );
};

export default HomePage;

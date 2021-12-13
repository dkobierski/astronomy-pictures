import { useQuery } from 'react-query';

import { preloadImage } from 'utils/image';
import { fetchRandomPicture } from 'api/nasa-api';
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator';
import Button from 'components/Button/Button';

import './Home.scss';
import AstronomyPicture from '../../components/AstronomyPicture/AstronomyPicture';
import useFavouritePictures from 'hooks/use-favourite-pictures';
import ActionBar from './components/ActionBar/ActionBar';

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
  const { addToFavourites, isFavourite } = useFavouritePictures();

  return (
    <div className="home">
      <ActionBar
        left={
          <>
            <Button
              className="action-btn"
              disabled={isLoading || isRefetching}
              onClick={() => refetch()}
            >
              {isRefetching ? (
                <LoadingIndicator width="24" height="24" />
              ) : (
                'Następne'
              )}
            </Button>
            <Button
              className="action-btn"
              disabled={isLoading || isRefetching || isFavourite(picture?.url)}
              onClick={() => addToFavourites(picture)}
            >
              Zapisz
            </Button>
          </>
        }
        right={<p className="picture-date">{picture?.date}</p>}
      />

      {isLoading ? (
        <div className="spinner-container">
          <LoadingIndicator width="64" height="64" />
        </div>
      ) : (
        <div className="picture-container">
          <AstronomyPicture picture={picture} />
          <h2 className="picture-title">{picture?.title}</h2>
          <p className="picture-description">{picture?.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

import AstronomyPicture from 'components/AstronomyPicture/AstronomyPicture';
import useFavouritePictures from 'hooks/use-favourite-pictures';

import './Favourites.scss';

const FavouritesPage = () => {
  const { favouritePictures } = useFavouritePictures();

  return (
    <div className="favourites">
      {favouritePictures.length === 0 ? (
        <>Brak zapisanych zdjęć</>
      ) : (
        <div className="images">
          {favouritePictures.map((picture) => (
            <AstronomyPicture className="image" picture={picture} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritesPage;

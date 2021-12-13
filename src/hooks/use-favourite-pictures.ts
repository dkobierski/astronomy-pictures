import React from 'react';
import { useLocalStorage } from 'react-use';

import { NasaPicture } from 'types/nasa-api';

type FavouritePictureMap = Record<string, NasaPicture>;

const useFavouritePictures = () => {
  const [favouritePicturesMap, setFavouritePicturesMap] =
    useLocalStorage<FavouritePictureMap>('favouritePictures', {});

  const favouritePictures = React.useMemo(
    () => (favouritePicturesMap ? Object.values(favouritePicturesMap) : []),
    [favouritePicturesMap]
  );

  const addToFavourites = React.useCallback(
    (picture: NasaPicture | undefined) => {
      if (!picture) return;

      setFavouritePicturesMap(
        favouritePicturesMap
          ? { ...favouritePicturesMap, [picture.url]: picture }
          : { picture }
      );
    },
    [setFavouritePicturesMap, favouritePicturesMap]
  );

  const isFavourite = React.useCallback(
    (pictureUrl: string | undefined) => {
      if (!favouritePicturesMap || !pictureUrl) return false;

      return favouritePicturesMap[pictureUrl] != null;
    },
    [favouritePicturesMap]
  );

  return { favouritePictures, addToFavourites, isFavourite };
};

export default useFavouritePictures;

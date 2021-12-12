import { NasaPicture } from 'types/nasa-api';

import './AstronomyPicture.scss';

type AstronomyPictureProps = { picture: NasaPicture | undefined };

const AstronomyPicture = ({ picture }: AstronomyPictureProps) => {
  if (!picture) return null;

  return picture.mediaType === 'image' ? (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={picture.url}
      className="astronomy-picture"
      alt="Astronomy Picture of the Day"
    />
  ) : (
    <iframe
      className="astronomy-picture"
      title="Astronomy Picture of the Day"
      width="420"
      height="315"
      src={picture.url}
    />
  );
};

export default AstronomyPicture;

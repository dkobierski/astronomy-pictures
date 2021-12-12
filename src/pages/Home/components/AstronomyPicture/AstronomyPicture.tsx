import { NasaPicture } from 'types/nasa-api';

import './AstronomyPicture.scss';

type AstronomyPictureProps = { picture: NasaPicture | undefined };

const AstronomyPicture = ({ picture }: AstronomyPictureProps) => {
  if (!picture) return null;

  return (
    <div className="astronomy-picture">
      {picture.mediaType === 'image' ? (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          src={picture.url}
          className="picture"
          alt="Astronomy Picture of the Day"
        />
      ) : (
        <iframe
          className="picture"
          title="Astronomy Picture of the Day"
          width="420"
          height="315"
          src={picture.url}
        />
      )}
      <h2 className="title">{picture.title}</h2>
      <p className="description">{picture.explanation}</p>
    </div>
  );
};

export default AstronomyPicture;

import { NasaPicture } from 'types/nasa-api';
import cn from 'classnames';

import './AstronomyPicture.scss';

type AstronomyPictureProps = {
  picture: NasaPicture | undefined;
  className?: string;
};

const AstronomyPicture = ({ className, picture }: AstronomyPictureProps) => {
  if (!picture) return null;

  return picture.media_type === 'image' ? (
    <img
      src={picture.url}
      className={cn('astronomy-picture', className)}
      alt={picture.title}
      title={picture.title}
    />
  ) : (
    <iframe
      className={cn('astronomy-picture', className)}
      title={picture.title}
      width="420"
      height="315"
      src={picture.url}
    />
  );
};

export default AstronomyPicture;

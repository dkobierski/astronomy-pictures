import camelCaseKeys from 'camelcase-keys';
import { NasaPicture } from 'types/nasa-api';

const baseUrl = process.env.REACT_APP_NASA_API_URL;
const apiKey = process.env.REACT_APP_NASA_API_KEY;

export const fetchRandomPicture = (): Promise<NasaPicture> =>
  fetch(`${baseUrl}/planetary/apod?api_key=${apiKey}&count=1`)
    .then((res) => res.json())
    .then(([picture]) => camelCaseKeys(picture));

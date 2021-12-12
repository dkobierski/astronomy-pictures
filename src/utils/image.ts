export const preloadImage = (src: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(undefined);
    image.onerror = () => reject();
    image.src = src;
  });

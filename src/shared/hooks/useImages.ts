import { imagesEntryPoint } from './../constants/imagesEntryPoint';

export const useImages = (id: string) => {
  return `${imagesEntryPoint}${id}.png`;
};

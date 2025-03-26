export const getAssetsFile = (name: string, url: string) => {
  return new URL(`../assets/${name}/${url}.svg`).href;
};

export const pokemonUrlToId = (url: string) => {
    const slicedUrl = url.slice(url.length - 3, url.length - 1);
    return slicedUrl.replace('/', '');
};

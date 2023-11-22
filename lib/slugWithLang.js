export const NEWSLUG = (slug, lang) => {
    const newSlug = lang + slug.slice(2);
    return newSlug;
};

export const getLanguage = (filename) => {
    const firstTwoChars = filename.slice(0, 2);
    return firstTwoChars;
};

export const countLanguage = (array, lang) => {
    const langArray = array.filter((item) => {
        return item.slug.slice(0, 2) === lang;
    });

    return langArray.length;
};

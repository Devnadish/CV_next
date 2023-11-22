export function buildSearchOptions(
    searchKeyword,
    searchLang,
    bodyFlag,
    descriptionFlag,
    tag,
) {
    const titleCondition = searchKeyword && {
        title: {
            contains: searchKeyword,
            mode: 'insensitive',
        },
    };

    const languageCondition = searchLang && {
        language: {
            equals: searchLang,
            mode: 'insensitive',
        },
    };

    const bodyCondition = bodyFlag && {
        body: {
            contains: searchKeyword,
            mode: 'insensitive',
        },
    };

    const descriptionCondition = descriptionFlag && {
        description: {
            contains: searchKeyword,
            mode: 'insensitive',
        },
    };

    const tagCondition = tag && {
        tag: {
            equals: tag,
        },
    };

    const publishedCondition = {
        published: {
            equals: true,
        },
    };
    const searchConditions = [
        titleCondition,
        languageCondition,
        bodyCondition,
        descriptionCondition,
        tagCondition,
        publishedCondition,
    ].filter(Boolean);

    const where = searchConditions.length > 0 ? { AND: searchConditions } : {};

    const searchOptions = {
        where,
    };

    return searchOptions;
}

export const MDoptions = {
    overrides: {
        // Override the default rendering of certain elements
        h1: {
            component: 'h1',
            props: {
                style: { color: 'rgba(14, 242, 21, 0.8)' }, // Apply custom styles
            },
        },
        h2: {
            component: 'h2',
            props: {
                style: { color: 'rgba(7, 95, 250, 0.8)' }, // Apply custom styles
            },
        },
        h3: {
            component: 'h3',
            props: {
                style: { color: 'rgba(10, 195, 150, 0.5)' }, // Apply custom styles
            },
        },
        p: {
            component: 'p',
            props: {
                style: { color: 'white', width: '100%' },
            },
        },
        strong: {
            component: 'strong',
            props: {
                style: { color: 'rgba(245, 40, 145, 0.8)', width: '100%' },
            },
        },
    },
};

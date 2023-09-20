export const MDoptions = {
    overrides: {
      // Override the default rendering of certain elements
      h2: {
        component: "h2",
        props: {
          style: { color: "red" }, // Apply custom styles
        },
      },
      h3: {
        component: "h3",
        props: {
          style: { color: "red" }, // Apply custom styles
        },
      },
      p: {
        component: "p",
        props: {
          style: { color: "blue", width: "100%" },
        },
      },
    },
  };
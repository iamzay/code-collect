if (process.env.NODE_ENV === "development") {
    const setButtonStyle = (color) => import(/* webpackMode: "lazy-once" */`./button-styles/${color}.js`);
} else {
    const setButtonStyle = (color) => import(`./button-styles/${color}.js`);
}
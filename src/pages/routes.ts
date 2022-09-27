let routes: any[] = [];

const context = require.context(".", true, /route.ts$/);

context.keys().forEach((path: any) => {
    routes.push(require(`${path}`).default);
});

export default routes;
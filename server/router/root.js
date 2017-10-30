
function addRootRoutes(router) {
    // hello
    router.get(`/`, async (ctx) => {
        ctx.body = "Hello , I'm a leapcloud ext demo.";
    });
}

module.exports = {
    addRootRoutes,
}
requirejs.config({
    baseUrl: "js",
    paths: {
        "gl-matrix": "https://cdn.jsdelivr.net/npm/gl-matrix@3.3.0/gl-matrix-min",
        "planck-js": "https://cdn.jsdelivr.net/npm/planck-js@0.3.23/dist/planck.min"
    }
});

requirejs(["main"], () => { });
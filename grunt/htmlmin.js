module.exports = {

    build: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
                expand: true,
                cwd: "<%= global.build %>/",
                src: "**/*.html",
                dest: "<%= global.build %>/"
            }]
    }
};

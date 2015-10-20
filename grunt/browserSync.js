module.exports = {

    dev: {
        options: {
            server: {
                baseDir: "<%= global.build %>/"
            },
            watchTask: true,
            notify: false
        },
        src: [
            "<%= global.build %>/<%= global.css %>",
            "<%= global.build %>/<%= global.buildjs %>",
            "<%= global.build %>/**/*.html"
        ]
    },
    build: {
        options: {
            server: {
                baseDir: "<%= global.build %>/"
            },
            watchTask: false,
            notify: false
        },
        src: [
            "<%= global.build %>/<%= global.css %>",
            "<%= global.build %>/<%= global.buildjs %>",
            "<%= global.build %>/**/*.html"
        ]
    }

};

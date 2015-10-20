module.exports = {

    options: {
        style: "expanded",
        sourcemap: "none",
        loadPath: "bower_components"
    },
    sass: {
        src: "<%= global.src %>/<%= global.sass %>",
        dest: "<%= global.build %>/<%= global.css %>"
    }
};

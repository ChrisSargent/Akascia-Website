module.exports = {
    options: {
        nonull: true
    },

    concat: {
        src: [
            "<%= global.bowerjs %>",
            "<%= global.src %>/<%= global.js %>"
        ],
        dest: "<%= global.build %>/<%= global.buildjs %>"
    }
};

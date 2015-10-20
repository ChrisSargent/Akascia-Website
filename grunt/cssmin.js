module.exports = {

    options: {
        keepSpecialComments: 0,
        advanced: 0
    },

    build: {
        src: "<%= global.build %>/<%= global.css %>",
        dest: "<%= global.build %>/<%= global.css %>"
    }
};

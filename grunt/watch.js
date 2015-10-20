module.exports = {

    css: {
        files: ["<%= global.src %>/sass/**/*.sass"],
        tasks: ["sass"]
    },
    js: {
        files: ["<%= global.src %>/js/**/*.js"],
        tasks: ["concat"]
    },
    jekyll: {
        files: ["<%= global.src %>/**/*.html", "<%= global.src %>/**/*.md"],
        tasks: ["jekyll"]
    }

};

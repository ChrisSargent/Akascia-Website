module.exports = {
    files: {
        expand: true,
        cwd: "<%= global.build %>/img",
        src: "**/*.{png,jpg,gif,ico}",
        dest: "<%= global.build %>/img"
    }
};

module.exports = function (grunt, options) {

    var config = grunt.file.readJSON('GruntConfig.json'),
        baseTasks = ['clean', 'sass', 'copy', 'concat', 'uglify', 'svgmin'],
        staticTasks = [];

    if(!config.concrete5) {
        staticTasks.push('zetzer', 'connect');
    }

    return {
        'build': baseTasks.concat(staticTasks),
        'default': ['build', 'watch']
    }
};
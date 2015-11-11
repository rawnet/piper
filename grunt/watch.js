module.exports = {
  css: {
    files: ['<%= config.srcFolder %>/app/stylesheets/**/*'],
    tasks: ['sass'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  images: {
    files: ['<%= config.srcFolder %>/app/images/**/*', '!<%= config.srcFolder %>/app/images/**/*.psd'],
    tasks: ['newer:copy', 'newer:svgmin'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  js: {
    files: ['<%= config.srcFolder %>/app/javascripts/**/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  fonts: {
    files: ['<%= config.srcFolder %>/app/fonts/**/*'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['<%= config.srcFolder %>/**/*.html'],
    tasks: ['zetzer'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  json: {
    files: ['<%= config.srcFolder %>/app/javascripts/data/assets.json'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  }
}
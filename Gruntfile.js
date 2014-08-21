'use strict';

module.exports = function (grunt) {

  var fs = require('fs'), pkginfo = grunt.file.readJSON("package.json");

  grunt.initConfig({

    pkg: pkginfo,

    meta: {
      banner: "/*! (c) 2014 <%= pkg.author %> | MIT License */"
    },

    // Jekyll
    jekyll: {                             // Task
      options: {                          // Universal options
        bundleExec: true,
        src : '<%= app %>',
      },
      dist: {                             // Target
        options: {                        // Target options
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      },
      serve: {                            // Another target
        options: {
          dest: '<%= dist %>',
          drafts: true
        }
      }
    },
 
    // Less
    less: {
      dist: {
        options: {
          paths: ["less", "vendor", "css", "bower_components"],
          banner: "<%= meta.banner %>\n",
          cleanCss: true
        },
        files: {
          "css/app.css": "less/app.less"
        }
      }
    },

    // Concat
    concat: {
      dist: {
        options: {
            separator: "\n\n"
        },
        src: [
          // jQuery
          "bower_components/jquery/jquery.js",
          // UI KIT
          "bower_components/uikit/src/js/core.js",
          "bower_components/uikit/src/js/component.js",
          "bower_components/uikit/src/js/utility.js",
          // "bower_components/uikit/src/js/touch.js",
          // "bower_components/uikit/src/js/alert.js",
          "bower_components/uikit/src/js/button.js",
          // "bower_components/uikit/src/js/dropdown.js",
          "bower_components/uikit/src/js/grid.js",
          // "bower_components/uikit/src/js/modal.js",
          // "bower_components/uikit/src/js/offcanvas.js",
          // "bower_components/uikit/src/js/nav.js",
          // "bower_components/uikit/src/js/tooltip.js",
          // "bower_components/uikit/src/js/switcher.js",
          // "bower_components/uikit/src/js/tab.js",
          // "bower_components/uikit/src/js/scrollspy.js",
          "bower_components/uikit/src/js/smooth-scroll.js",
          // "bower_components/uikit/src/js/toggle.js",
          // "bower_components/jquery.slimscroll/jquery.slimscroll.js",
          // "bower_components/slick-carousel/slick/slick.js",
          "bower_components/snap.svg/dist/snap.svg.js",
          "js/lib/svg-logo.js",
          "js/lib/email-link.js",
          "js/lib/animate-breathing.js",
          "js/app.js"
      ],
      dest: "js/app-compiled.js"
      }
    },

    // Uglify JS
    uglify: {
        distmin: {
            options: {
                banner: "<%= meta.banner %>\n"
            },
            files: {
                "js/app.min.js": ["js/app-compiled.js"]
            }
        },
        modernizr: {
          files: {
            "js/modernizr.min.js": ["js/modernizr.js"]
          }
        } 
    },    

    // Copy
    copy: {
      fontawesome: {
        files: [
          {expand: true, src: ['bower_components/uikit/src/fonts/*'], dest: 'fonts/', flatten: true},
        ]
      },
      modernizr: {
        files: [
          {src: ['bower_components/modernizr/modernizr.js'], dest: 'js/modernizr.js', flatten:true}
        ]
      }
    },

    // Watch
    watch: {
      grunt: {
          options: {
              reload: true
          },
          files: ['Gruntfile.js']
      },
      src: {
          files: ["*.less", "less/**/*.less","js/app.js", "_layouts/*.*", "_posts/*.*", "_includes/*.*", "images/*.*", "*.html", "*.md"],
          tasks: ["copy", "less:dist", "concat", "uglify", "jekyll:dist"]
      }
    }

  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch']);

};
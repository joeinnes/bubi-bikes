module.exports = {
  npm: {
    styles: {
      'font-awesome': ['css/font-awesome.css'],
      'leaflet': ['dist/leaflet.css'],
      'drmonty-leaflet-awesome-markers': ['css/leaflet.awesome-markers.css']
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': /^(?!app)/
      }
    }
  },
  plugins: {
    babel: {
      presets: ['es2015']
    }
  }
}

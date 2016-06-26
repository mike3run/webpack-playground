var component = require('./component');

require('./main.css');

var app = document.getElementById('app');

app.appendChild( component() );


var ChatApp = require('./components/ChatApp.react');

var React = require('react');
window.React = React;

React.render(
	<ChatApp />,
	document.getElementById('react')
);
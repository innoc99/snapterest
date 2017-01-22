let React = require('react');
let ReactDOM = require('react-dom');

let reactElement = React.createElement('h1', {className:'header'}, 'This is react');
ReactDOM.render(reactElement, document.getElementById('reactapplication'));

console.log("test");
const React = require('react');
const ReactDOM = require('react-dom');

// const h1 = React.createElement('h1', {className:'header', key:'header'}, 'This is react');
const h1 = <h1 className="header" key="header">This is react</h1>;
const p = <p className="content" key='content'>And that's how it works.</p>;

const listOfItems = <ul className="list-of-items">
    <li className="item-1">Item 1</li>
    <li className="item-2">Item 2</li>
    <li className="item-3">Item 3</li>
    <li className="item-4">Item 4</li>
</ul>;

const reactFragment = [h1,p,listOfItems];
const section = React.createElement('section', {className:'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('reactapplication'));

console.log("test");
const React = require('react');
const ReactDOM = require('react-dom');

// const h1 = <h1 className="header" key="header">This is react</h1>;
// const p = <p className="content" key='content'>And that's how it works.</p>;
//
// const listOfItems = <ul className="list-of-items">
//     <li className="item-1">Item 1</li>
//     <li className="item-2">Item 2</li>
//     <li className="item-3">Item 3</li>
//     <li className="item-4">Item 4</li>
// </ul>;
//
// const reactFragment = [h1,p,listOfItems];
// const section = React.createElement('section', {className:'container'}, reactFragment);
// ReactDOM.render(section, document.getElementById('react-application'));

const ReactClass = React.createClass({

    getInitialState: function () {
        return {
            isHeaderHidden: false,
            title: 'Stateful React Component'
        };
    },
    handleClick: function () {
      this.setState({
          isHeaderHidden: !this.state.isHeaderHidden
      });
    },

    render: function () {
        // this.props.isHidden = true;
        // this.props.tweets = [];
        // if(this.state.isHidden){
        //     return null;
        // }
        const headerElement = React.createElement('h1', {className:'header', key:'header'}, this.state.title);
        const buttonElement = React.createElement('button'
            , {className:'btn btn-default btn-sm', onClick: this.handleClick, key:'button'}, 'Toggle Header');

        if(this.state.isHeaderHidden){
            return React.createElement('div', null, [buttonElement]);
        }

        return React.createElement('div', null, [buttonElement, headerElement]);
    }
});
const reactComponentElement = React.createElement(ReactClass);
const reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

console.log("test");
console.log(reactComponent);
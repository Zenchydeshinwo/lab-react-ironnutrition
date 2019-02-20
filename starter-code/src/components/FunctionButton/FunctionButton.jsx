import React from 'react';

export default class FunctionButton extends React.Component{
    render(){
        return <button className={this.props.className} onClick={(elem)=>this.props.function(elem)}>{this.props.children}</button>
    }
}
//Coment
import React from 'react';

export default class Input extends React.Component{


render(){
    return(
       <input type={this.props.type} idx={this.props.idx} className="input" placeholder={this.props.placeholder} value={this.props.value} min={this.props.min} onChange={(e)=>this.props.function(e)}/>
    )
    }
}


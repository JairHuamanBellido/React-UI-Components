import React from 'react';
export default class Icon extends React.Component{
    render(){
        return(

            <img 
            width={this.props.width} height={this.props.height}
            src={require(`../../Icons/${this.props.icon}.svg`)}
            alt=""
            className="icon-field"
            />

        )
    }
}
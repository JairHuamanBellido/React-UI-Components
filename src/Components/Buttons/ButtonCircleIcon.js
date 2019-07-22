import React from 'react';
import Icon from "../IconComponent/Icon";

export default class ButtonCircleIcon extends React.Component{
    render(){
        return(
            <button
                className="btn-CircleIcon"
                style={{
                    backgroundColor: this.props.backgroundColor
             
                  
                    
                }}
            >
                <Icon 
                width="16"
                height="16"
                icon={this.props.icon}
                />    
            </button>
        )
    }
}
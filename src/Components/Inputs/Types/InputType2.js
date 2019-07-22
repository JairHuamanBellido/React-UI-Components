import React from 'react';
import Icon from "../../IconComponent/Icon";
class InputType2 extends React.Component {
    render() {
        return (
            <div className="IT2-field">
                
                <input
                    type={(this.props.isPassword)?'password':'text'}
                    placeholder={this.props.placeholder}
                    
                />
                {this.props.icon ?
                <Icon  
                    width="16"
                    height="16"
                    icon={this.props.icon}
                />:
                null
                }
            </div>
        )
    }
};

export default InputType2;
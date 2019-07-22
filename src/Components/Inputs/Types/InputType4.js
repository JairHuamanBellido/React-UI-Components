import React from 'react';
import Icon from "../../IconComponent/Icon";

class InputType4 extends React.Component {
    render() {
        return (
            <div className="IT4-field">
                <div>
                    <input
                        type={(this.props.isPassword) ? 'password' : 'text'}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                    />
                    {this.props.icon ?
                        <Icon
                            width="16"
                            height="16"
                            icon={this.props.icon}
                        /> :
                        null
                    }
                </div>
                <label className={(this.props.animated ? "label-animation" : "")}>{this.props.name}</label>

            </div>
        )
    }
};

export default InputType4;
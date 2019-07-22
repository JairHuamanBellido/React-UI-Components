import React from 'react';
import Icon from "../../IconComponent/Icon";
export default class InputType3 extends React.Component {
    render() {
        return (
            <div className="IT3-field">

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
        )
    }
}
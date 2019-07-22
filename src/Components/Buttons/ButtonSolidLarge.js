import React from 'react';
import Icon from "../IconComponent/Icon";
export default class ButtonSolidLarge extends React.Component {
    
    render() {

        let isRounded= (this.props.fullRounded)? "btn-SolidLarge btn-Rounded": "btn-SolidLarge"
        return (
            <button
                className={isRounded}
                style={{
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.textColor,
                    boxShadow:
                        (this.props.shadow) ?
                            `0 12px 24px 2px ${this.props.backgroundColor}77` :
                            'none'
                    
                }}
            >
                {
                    (this.props.icon) ?
                        <Icon
                            width="16"
                            height="16"
                            icon={this.props.icon}
                        />
                        : null
                }
                Search
            </button>
        )
    }
}
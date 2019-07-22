import React from 'react';
export default class ButtonNoSolid extends React.Component {
    render() {
        return (
            <button
                className="btn-ButtonNoSolid"
                style={{
                    border: `2px solid ${this.props.borderColor}`,
                    color: this.props.textColor
                    
                       
                }}
            >
            
                Register
            </button>
        )
    }
}
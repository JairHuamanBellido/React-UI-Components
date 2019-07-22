import React from 'react';

class InputType1 extends React.Component {
    render() {
        return (
            <div className="IT1-field">
                
                <input
                    type={(this.props.isPassword)?'password':'text'}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                />
                <label className={(this.props.animated?"label-animation": "")}>{this.props.name}</label>

            </div>
        )
    }
};

export default InputType1;
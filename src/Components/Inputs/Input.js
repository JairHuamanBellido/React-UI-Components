import React from 'react';
import InputType1 from './Types/InputType1';
import InputType2 from './Types/InputType2';
import './Input.css';
class Input extends React.Component {

    render() {

        if (this.props.type === "tipo1") {
            return (
                <InputType1 
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    isPassword= {this.props.isPassword}
                />
            )
        }
        else{
            
            return(
                <InputType2
                name={this.props.name}
                placeholder={this.props.placeholder}
                isPassword= {this.props.isPassword}
                url_icon='/public/Icons/black-envelope.svg'
            />
            )
        }

    }
};

export default Input;
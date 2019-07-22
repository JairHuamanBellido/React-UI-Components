import React, { Fragment } from 'react';
import InputType1 from "./Components/Inputs/Types/InputType1";
import InputType2 from "./Components/Inputs/Types/InputType2";
import InputType3 from "./Components/Inputs/Types/InputType3";
import InputType4 from "./Components/Inputs/Types/InputType4";
import './Components/Inputs/Input.css';
function App() {
    return (
        <Fragment>
            
            <InputType1
                name="Email"
                isPassword={false}
                placeholder="Ingrese su email"
                animated={true}
            />
            <InputType2
                placeholder="Ingrese su email"
                icon="Email"
                isPassword={false}
            />
            <InputType3
            placeholder="Ingrese su email"
            icon="Email"
            isPassword={false}
            />
            <InputType4
            placeholder="Ingrese su email"
            icon="Email"
            isPassword={false}
            name="Email"
            />
        </Fragment>
    );
}

export default App;

import React, { Fragment } from 'react';
import InputType1 from "./Components/Inputs/Types/InputType1";
import InputType2 from "./Components/Inputs/Types/InputType2";
import InputType3 from "./Components/Inputs/Types/InputType3";
import InputType4 from "./Components/Inputs/Types/InputType4";

import ButtonSolidLarge from "./Components/Buttons/ButtonSolidLarge";
import ButtonNoSolid from "./Components/Buttons/ButtonNoFilled";
import ButtonCircleIcon from "./Components/Buttons/ButtonCircleIcon";
import './css/globalRules.css';
import './Components/Inputs/Input.css';
import './Components/Buttons/button.css';


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



            <ButtonSolidLarge
                backgroundColor="#49F3BF"
                textColor="#ffffff"

            />
            <ButtonSolidLarge
                backgroundColor="#496FF3"
                textColor="#ffffff"
                icon="search"


            />

            <ButtonSolidLarge
                backgroundColor="#496FF3"
                textColor="#ffffff"
                icon="search"
                shadow={true}


            />
            <ButtonSolidLarge
                backgroundColor="#45559a"
                textColor="#ffffff"
                icon="search"

                fullRounded={true}

            />

            <ButtonNoSolid
                borderColor="#49F3BF"
                textColor="#49F3BF"
                hover={true}

            />
            <ButtonCircleIcon
                icon="search"
                backgroundColor="#4343ff"
            />
        </Fragment>
    );
}

export default App;

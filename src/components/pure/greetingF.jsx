import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve intro a useState
    // Estructura: const [variable, método para actualizarlo] = useState(valor incial);
    const [age, setAge] = useState(29);

    const birthay = () => {
        // Actualizar el State
        setAge(age + 1)
    }

    return (
        <div>
            <h1>
                ¡Hola {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthay}>Cumplir años</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;

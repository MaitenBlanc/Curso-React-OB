/**
 * Ejemplo de uso del método componentWillUnmount para componente clase 
 * y ejemplo de uso de hooks para componente funcional 
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // Acá no se pone nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);         //Cuando los [] están vacíos, se ejecuta una vez

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

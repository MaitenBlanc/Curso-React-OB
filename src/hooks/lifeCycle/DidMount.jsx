/**
 * Ejemplo de uso del método de ciclo de vida en componente clase 
 * y el hook de ciclo de vida en componente funcional
 */

/** Ejemplo tipo clase */
import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (antes que renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}

/** Ejemplo tipo función */
export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (antes que renderice)')
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}

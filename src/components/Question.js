import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({setPresupuesto, setRestante, setShowQuestion}) => {
    // definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    // submit para definir el presupuesto
    const handleOnSubmit = e => {
        e.preventDefault()
        // validar
        if(cantidad < 1 || isNaN(cantidad) || cantidad === 0) {
            setError(true)
            return
        }
        // si se pasa la validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setShowQuestion(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error message="El Presupuesto es Incorrecto" /> : null}
            <form
                onSubmit={handleOnSubmit}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
};

Question.propType = {
    setPresupuesto: PropTypes.func.isRequired, 
    setRestante: PropTypes.func.isRequired, 
    setShowQuestion: PropTypes.func.isRequired
}

export default Question;
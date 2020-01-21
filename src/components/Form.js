import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({setGasto, setCreateGasto}) => {
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    // cuando el usuarop agrega un gasto
    const handleOnSumbit = e => {
        e.preventDefault()
        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === '') {
            setError(true)
            return
        }
        setError(false)
        // construir el gasto
        const gasto = {
            nombre: nombreGasto,
            cantidad,
            id: shortid.generate()
        }
        // pasar el gasto al componente principal
        setGasto(gasto)
        setCreateGasto(true)
        // resetear el form
        setNombreGasto('')
        setCantidad(0)
    }
    return (
        <form
            onSubmit={handleOnSumbit}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error message="Los campos son requeridos o Gasto incorrecto"/> : null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte"
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej.3000"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
};

Form.propTypes = {
    setGasto: PropTypes.func.isRequired, 
    setCreateGasto: PropTypes.func.isRequired
}

export default Form;
import React, {useState, useEffect} from 'react';
import Question from './components/Question'
import Form from './components/Form'
import ListaGastos from './components/ListaGastos'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  // definir state
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({}) // este state es un objeto
  const [createGasto, setCreateGasto] = useState(false)
  // useEfect que actualiza el restante
  useEffect(() => {
    if(createGasto) {
      // agrega un nuevo gasto
      setGastos([
        ...gastos,
        gasto
      ])
      // resta del gasto restante
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)
      // resetear a false
      setCreateGasto(false)
    }

  }, [gasto, createGasto , gastos, restante])

  /* Para mostrar los diferentes fomularios se creo un state para mostrar o no el form de la pregunta,
  cuando el usuario ingresa el presupuesto el componente de Question recibe como props el state de 'setShowQuestion' 
  para cambiar el valor y se oculte el fomr. Ya con un ternario se mostara o no el Form (CARGA CONDICIONAL DE UN COMPONENTE)*/
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? 
            (
              <Question 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setShowQuestion={setShowQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    setGasto={setGasto}
                    setCreateGasto={setCreateGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListaGastos 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            ) 
          }

        </div>
      </header>
    </div>
  );
}

export default App;

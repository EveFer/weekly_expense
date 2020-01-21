import React, {useState} from 'react';
import Question from './components/Question'
import Form from './components/Form'

function App() {
  // definir state
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Question 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />

          <div className="row">
            <div className="one-half column">
              <Form />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;

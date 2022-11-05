import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState('Bruno');

  return (
    <div>
      <h1>
        Isso será exibido?
        {x && <p>Se x for True Mostra isso</p>}
        {!x && <p>Se x for False Mostra isso</p>}

        {name === "João" ? (
          <div><p>O Nome é João</p></div>
        ) : (
          <div><p>Nome não encontrado</p></div>
        )}
      <button onClick={() => setName('João')}>Mudar Nome</button>
      </h1>
    </div>
  )
}

export default ConditionalRender
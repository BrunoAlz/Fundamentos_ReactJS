import { useState } from "react";
// components
import FirstComponet from "./components/FIrstComponet";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponet from "./components/MyComponent";
import Events from "./components/Events";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

// styles / css
import "./App.css";
import Malta from "./assets/malta.jpg";
import Form from "./components/Form";

function App() {
  const name = "Bruno";
  const [userName] = useState("Richard");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Punto", color: "Prata", newCar: false, km: 130000 },
    { id: 3, brand: "HB20", color: "Cinza", newCar: true, km: 35000 },
    { id: 4, brand: "Spin", color: "Branca", newCar: true, km: 2000 },
  ];

  function showMessage() {
    console.log("Mostrando a Mensagem");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      {/* Importando o componente */}
      <FirstComponet />
      <TemplateExpressions />
      <MyComponet />
      <Events />

      {/* Imagem em Public */}
      <div>
        <img src="/OIP.jpg" alt="Malta" />
      </div>

      {/* Imagem em Assets */}
      <div>
        <img src={Malta} alt="Malta" />
      </div>

      {/* Usando Hooks */}
      <div>
        <ManageData />
      </div>

      {/* Renderizando Listas */}
      <div>
        <ListRender />
      </div>

      {/* Renderização COndicional */}
      <div>
        <ConditionalRender />
      </div>

      {/* PROPS */}
      <div>
        <ShowUserName name={name} />
        <ShowUserName name={userName} />
      </div>

      {/* DESTRUCTURING */}
      <div>
        <CarDetails brand="VW" km={1000} color="Azul" newCar={true} />
      </div>

      {/* Reaproveitando Componentes */}
      <div>
        <CarDetails brand="Ford" km={5000} color="Vermelho" newCar={false} />
        <CarDetails brand="Fiat" km={10000} color="Amarelo" newCar={true} />
      </div>

      {/* Loop em arrays de objetos*/}
      <div>
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>

      {/* React Fragments */}
      <div>
        <Fragments />
      </div>

      {/* Children */}
      <div>
        <Container>
          <p>Este é o Conteúdo do Container</p>
        </Container>
      </div>

      {/* Executar Função */}
      <div>
        <ExecuteFunction myFunction={showMessage} />
      </div>

      {/* State Lift */}
      <div>
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />
      </div>

      {/* FORMULÁRIOS */}
      <div>
        <Form
          user={{
            name: "Bruno",
            email: "bruno6821@gmail.com",
            bio: " bruno está aprendendo React",
            role: "admin",
          }}
        />
      </div>
    </div>
  );
}

export default App;

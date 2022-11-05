const Events = () => {
  const handleMyEvent = (e) => {};

  const n = 4;

  const renderSomething = (x) => {
    if (x) {
      return <h1>Retorno do Verdadeiro</h1>;
    } else {
      return <h1>Retorno do Falso</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <h3 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS DINÂMICO
      </h3>
      <h3 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS DINÂMICO
      </h3>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;

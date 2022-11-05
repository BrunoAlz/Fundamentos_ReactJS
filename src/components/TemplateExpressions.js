const TemplateExpressions = () => {

    const name = "Bruno"
    const data = {
        age: 30,
        job: "Programador",
    }

    return (
        <div>
            <h1> Olá {name}!</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )

}

export default TemplateExpressions;
import MyComponet from "./MyComponent";
import "./FirstComponent.css";

const FirstComponet = () => {

    return (
        <div>
            <h1 className="meu-h1-red">Meu Primeiro Componete</h1>
            <p className="teste">
                Meu texto Com css Próprio
            </p>
            <MyComponet />
        </div>
    )

}

export default FirstComponet;
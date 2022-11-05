import { useState } from "react";
import "./Form.css";

const Form = ({ user }) => {
  // Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (eventoDoChange) => {
    setName(eventoDoChange.target.value);
  };

  const handleSubmit = (eventoDeSubmit) => {
    eventoDeSubmit.preventDefault();
    console.log("Enviando o form");
    console.log(name, email, bio, role);
    console.log("Limpando Form");
    // Limpando os Forms
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      <h1 className="form_title">Meu Primeiro Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div className="div_form">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />

          {/* Label envolvendo o INPUT */}
          <label>
            <span>E-mail: </span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              onChange={(evento) => setEmail(evento.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Biografia: </span>
            <textarea
              name="bio"
              placeholder="Descrição do Usuário"
              onChange={(evento) => setBio(evento.target.value)}
              value={bio}
            ></textarea>
          </label>

          <label>
            <span>Função do Usuário</span>
            <select
              name="role"
              onChange={(evento) => setRole(evento.target.value)}
              value={role}
            >
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Form;

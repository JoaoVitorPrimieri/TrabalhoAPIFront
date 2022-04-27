import React from "react";
const UsuarioForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setUsuario({ ...props.usuario, [name]: value });
  };

  return (
    <form>
      <div class="form-group">
        <label>Nome</label>
        <input class="form-control" type="text" name="nome"
          value={props.usuario.nome} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>Sobrenome</label>
        <input class="form-control" type="text" name="sobrenome"
          value={props.usuario.sobrenome} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>CPF</label>
        <input class="form-control" type="text" name="cpf"
          value={props.usuario.cpf} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input class="form-control" type="text" name="senha"
          value={props.usuario.senha} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <button type="button" onClick={props.salvar}
          className="btn btn-primary btn-sm">Salvar</button>
        <button type="button" onClick={props.cancelar}
          className="btn btn-primary btn-sm">Cancelar</button>
      </div>
    </form>
  );
};
export default UsuarioForm;
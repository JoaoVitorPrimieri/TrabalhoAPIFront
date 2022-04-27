import React from "react";
const MaquinaForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setMaquina({ ...props.maquina, [name]: value });
  };

  return (
    <form>
      <div class="form-group">
        <label>Modelo</label>
        <input class="form-control" type="text" name="modelo"
          value={props.maquina.modelo} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>Marca</label>
        <input class="form-control" type="text" name="marca"
          value={props.maquina.marca} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>Tipo Combustivel</label>
        <input class="form-control" type="text" name="tipoCombustivel"
          value={props.maquina.tipoCombustivel} onChange={handleInputChange} />
      </div>
      <div class="form-group">
        <label>Número do Chassi</label>
        <input class="form-control" type="text" name="numeroChassi"
          value={props.maquina.numeroChassi} onChange={handleInputChange} />
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
export default MaquinaForm;
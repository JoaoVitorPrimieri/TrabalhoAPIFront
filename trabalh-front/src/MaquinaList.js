const MaquinaList = (props) => (
    <div>
      <h4>Listagem de Maquinas</h4>
      <button className="btn btn-success" onClick={props.inserir}>Inserir</button>
  
      <table className="table">
        <thead>
          <tr>
            {" "}
            <th>Index</th>
            <th>Id</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Tipo Combustivel</th>
            <th>Numero Chassi</th>
          </tr>
        </thead>
        <tbody>
          {props.maquina.length > 0 ? (props?.maquina?.map((o, index) => (
            <tr key={index}>
              <td>{index}</td><td>{o?.id}</td> <td>{o?.modelo}</td> <td>{o?.marca}</td><td>{o?.tipoCombustivel}</td><td>{o?.numeroChassi}</td>
              <button onClick={() => props.editar(o?._id)} className="btn btn-warning">Editar</button>
              <button onClick={() => props.excluir(o?._id)} className="btn btn-danger">Excluir</button>
            </tr>
          ))) : (
            <tr>
              <td colSpan={3}>Nenhuma Maquina.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
  export default MaquinaList
  
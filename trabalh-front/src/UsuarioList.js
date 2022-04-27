const UsuarioList = (props) => (
  <div>
    <h4>Listagem de usuarios</h4>
    <button className="btn btn-success" onClick={props.inserir}>Inserir</button>

    <table className="table">
      <thead>
        <tr>
          {" "}
          <th>Index</th>
          <th>Id</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>CPF</th>
          <th>Senha</th>

        </tr>
      </thead>
      <tbody>
        {props.usuarios.length > 0 ? (props?.usuarios?.map((o, index) => (
          <tr key={index}>
            <td>{index}</td><td>{o?.id}</td> <td>{o?.nome}</td> <td>{o?.sobrenome}</td><td>{o?.cpf}</td><td>{o?.senha}</td>
            <button onClick={() => props.editar(o?._id)} className="btn btn-warning">Editar</button>
            <button onClick={() => props.excluir(o?._id)} className="btn btn-danger">Excluir</button>
          </tr>
        ))) : (
          <tr>
            <td colSpan={3}>Nenhum Usuario.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)
export default UsuarioList

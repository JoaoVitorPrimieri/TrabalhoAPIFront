import "./App.css";
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./services/api";
import UsuarioList from "./UsuarioList";
import UsuarioForm from "./UsuarioForm";
import MaquinaList from "./MaquinaList";
import MaquinaForm from "./MaquinaForm";
import UsuarioSrv from "./services/UsuarioSrv";
import MaquinaSrv from "./services/MaquinaSrv";



//import 'primeicons/primeicons.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
//import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [maquina, setMaquina] = useState([])

  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizar = () => {
    UsuarioSrv.listar().then(response => {
      setUsuarios(response.data);
      console.log("Usuários atualizados");
    }).catch(e => {
      console.log("Erro: " + e.message);
    });
  }

  const initialState = { id: null, nome: '', sobrenome: '', cpf: '', senha: '' }
  const [usuario, setUsuario] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setUsuario(initialState);
    setEditando(true);
  }
  const salvar = () => {
    if (usuario._id == null) { // inclussão
      UsuarioSrv.incluir(usuario).then(response => {
        setEditando(false);
        onClickAtualizar();
        //toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          //toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else { // alteração
      UsuarioSrv.alterar(usuario).then(response => {
        setEditando(false);
        onClickAtualizar();
        //toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          //toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    }
  }
  const cancelar = () => {
    console.log('Cancelou ...');
    setEditando(false);
  }
  const editar = (id) => {
    setUsuario(usuarios.filter((usuario) => usuario._id == id)[0]);
    setEditando(true);
  }
  const excluir = (id) => {
    UsuarioSrv.excluir(id).then(response => {
      onClickAtualizar();
     // toastRef.current.show({ severity: 'success',
     // summary: "Excluído", life: 2000 });
      })
      .catch(e => {
     // toastRef.current.show({ severity: 'error',
    //  summary: e.message, life: 4000 });
      });
      }

  useEffect(() => {
    UsuarioSrv.listar().then(response => {
      setUsuarios(response.data)
    })
  }, []);

  if (!editando) {
    return (
      <div>
        <UsuarioList inserir={inserir} editar={editar} excluir={excluir} usuarios={usuarios} />
      </div>

    );
  } else {
    return (
      <div className="App">
        <UsuarioForm usuario={usuario} setUsuario={setUsuario}
          salvar={salvar} cancelar={cancelar} />
      </div>
    );
  }
}


export default App;


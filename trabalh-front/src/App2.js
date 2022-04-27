import "./App.css";
import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./services/api";
import MaquinaList from "./MaquinaList";
import MaquinaForm from "./MaquinaForm";
import MaquinaSrv from "./services/MaquinaSrv";



//import 'primeicons/primeicons.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
//import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';

function App2() {


  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizar = () => {
    MaquinaSrv.listar().then(response => {
      setMaquina(response.data);
      console.log("Maquina atualizadas");
    }).catch(e => {
      console.log("Erro: " + e.message);
    });
  }

  const initialState = { id: null, modelo: '', marca: '', tipoCombustivel: '', numeroChassi: '' }
  const [maquina, setMaquina] = useState(initialState)
  const [editando, setEditando] = useState(false)
  const inserir = () => {
    setMaquina(initialState);
    setEditando(true);
  }
  const salvar = () => {
    if (maquina._id == null) { // inclussão
      MaquinaSrv.incluir(maquina).then(response => {
        setEditando(false);
        onClickAtualizar();
        //toastRef.current.show({ severity: 'success', summary: "Salvou", life: 2000 });
      })
        .catch(e => {
          //toastRef.current.show({ severity: 'error', summary: e.message, life: 4000 });
        });
    } else { // alteração
        MaquinaSrv.alterar(maquina).then(response => {
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
    setMaquina(maquina.filter((maquina) => maquina._id == id)[0]);
    setEditando(true);
  }
  const excluir = (id) => {
    MaquinaSrv.excluir(id).then(response => {
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
    MaquinaSrv.listar().then(response => {
      setMaquina(response.data)
    })
  }, []);

  if (!editando) {
    return (
      <div>
        <MaquinaList inserir={inserir} editar={editar} excluir={excluir} maquina={maquina} />
      </div>

    );
  } else {
    return (
      <div className="App">
        <MaquinaForm maquina={maquina} setMaquina={setMaquina}
          salvar={salvar} cancelar={cancelar} />
      </div>
    );
  }
}


export default App2;


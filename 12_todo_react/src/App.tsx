import React, { useState } from 'react';
//Components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//Estilos
import Style from './App.module.css';

// Interface
import {ITask} from './interfaces/Task';



// PAUSADO NO MINUTO 42:00

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) =>{
        return task.id !== id;
      })
    )
  }

  const hideOrShowModal = (display: boolean)=>{
    const modal = document.querySelector("#modal");
    if(display){
      modal!.classList.remove('hide');
    }else{
      modal!.classList.add('hide');
    }
  }

  const editTask = (task : ITask):void =>{
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, title: string, difficulty: number) =>{
    const updatedTask: ITask = {id, title, difficulty};
    
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  }

  return (
    <div className="App">
      <Modal 
        children={
          <TaskForm 
            btnText='Editar tarefa' 
            taskList={taskList} 
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={Style.main}>
        <div>
          O que vc vai fazer ?
          <TaskForm 
            btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList}
          />
        </div>

        <div>
          <h2>Tarefas</h2>
          <TaskList taskList={taskList} 
            handleDelete={deleteTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

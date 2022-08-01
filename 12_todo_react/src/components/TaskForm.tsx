import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'

// Importando o CSS
import Style from './TaskForm.module.css'

//Interfaces
import { ITask } from '../interfaces/Task';
import TaskList from './TaskList';

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]> >;
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number) : void;
}

const TaskForm = ({btnText, setTaskList, taskList, task, handleUpdate}: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [difficulty, setDifficulty] = useState<number>(0);

    useEffect(()=>{
        if(task){
            setId(task.id);
            setTitle(task.title);
            setDifficulty(task.difficulty);
        }
    }, [task]);

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
        if(handleUpdate){
            handleUpdate(id, title, difficulty);

        }else{
            const id = Math.floor(Math.random() * 1000);
            const newTask: ITask = {id, title, difficulty};

            setTaskList!([...taskList, newTask]);
            setTitle('');
            setDifficulty(0)
        }

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value);
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    }


  return (
    <form onSubmit={addTaskHandler} className={Style.form}>
        <div className={Style.input_containter}>
            <label htmlFor='title'>Título</label>
            <input value={title} onChange={handleChange} type='text' name='title' placeholder="Título da tarefa"/>
        </div>

        <div className={Style.input_containter}>
            <label htmlFor='difficulty'>Dificuldade</label>
            <input value={difficulty} onChange={handleChange} type='text' name='difficulty' placeholder="Dificuldade da tarefa"/>
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm;
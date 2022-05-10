import Header from './components/Header';
import './index.css';
import Button from './components/Button';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'June 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at school',
        day:'May 6th at 1:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping',
        day:'May 25th at 2:30pm',
        reminder:false,
    },
    ])
    //Delete Task
    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }

    //Toggle Reminder
    const toggleReminder=(id)=>{
     setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : task))
    }
  return (
    <div className="container">
     <Header />
     <AddTask />
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ( ' No Tasks To Show')}
    </div>
  );
}

export default App;

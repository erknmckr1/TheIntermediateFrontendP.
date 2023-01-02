
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/list-Footer/Footer';
import Footerr from './components/Footer/Footerr';
function App() {
  const [tasks, SetTasks] = useState([]);

  const localSaveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }


  useEffect(() => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      SetTasks(JSON.parse(localStorage.getItem("tasks")));
    }

  }, [])

  useEffect(() => {
    localSaveTasks()
  }, [tasks])

  return (
    <>
      <div className="todoapp">
        <Header tasks={tasks} setTask={SetTasks} />
        <Section tasks={tasks} setTask={SetTasks} />
        <Footer tasks={tasks} setTask={SetTasks} />
      </div>
      <Footerr />
    </>
  );
}

export default App;

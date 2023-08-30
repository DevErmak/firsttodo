import React, { useEffect, useState } from 'react';
import './todoform.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

export default function Todoform() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const [inputTask, setInputTask] = useState('');

  const [foundTasks, setFoundTask] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  const [groupTasks, setGroupTasks] = useState([]);

  const [isDuplicate, setIsDuplicate] = useState(false);

  const addTask = () => {
    if (inputTask.trim() !== '') {
      if (tasks.find((t) => t.title === inputTask) === undefined) {
        setTasks([...tasks, { id: Math.random(new Date()), title: inputTask, isComplited: false }]);
        setInputTask('');
        setFoundTask([]);
        setIsSearch(false);
        setIsDuplicate(false);
      } else {
        setIsDuplicate(true);
      }
    }
  };

  const addTaskEnter = (e) => {
    if (e.code === 'Enter') {
      addTask();
    }
  };

  const changeTodo = (id) => {
    const copy = [...tasks];
    const currentObjTask = copy.find((t) => t.id === id);
    currentObjTask.isComplited = !currentObjTask.isComplited;
    setTasks(copy);
  };

  const removeOneTask = (id) => {
    setTasks([...tasks].filter((t) => t.id !== id));
    setFoundTask([...foundTasks].filter((t) => t.id !== id));
  };

  const findTasks = () => {
    if (inputTask.trim() === '' || foundTasks === []) {
      setIsSearch(false);
    } else {
      setIsSearch(!isSearch);
    }
    setFoundTask([...tasks].filter((t) => t.title === inputTask));
  };

  const removeGroupTasks = () => {
    setTasks([...tasks].filter((t) => t.isComplited === false));
    setFoundTask([...foundTasks].filter((t) => t.isComplited === false));
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setGroupTasks([...tasks].filter((t) => t.isComplited === true));
  }, [tasks]);

  useEffect(() => {
    setIsDuplicate(false);
  }, [inputTask]);

  const removeAllTasks = () => {
    setTasks([]);
  };

  const makeDidCompletedAllTasks = () => {
    setTasks(
      tasks.map((t) => {
        return {
          id: t.id,
          title: t.title,
          isComplited: false,
        };
      }),
    );
  };

  const noMakeDidCompletedAllTasks = () => {
    setTasks(
      tasks.map((t) => {
        return {
          id: t.id,
          title: t.title,
          isComplited: true,
        };
      }),
    );
  };

  return (
    <>
      <div className="todoform">
        <Header
          tasks={tasks}
          inputTask={inputTask}
          isSearch={isSearch}
          groupTasks={groupTasks}
          addTaskEnter={addTaskEnter}
          setInputTask={setInputTask}
          addTask={addTask}
          findTasks={findTasks}
          removeGroupTasks={removeGroupTasks}
          removeAllTasks={removeAllTasks}
          isDuplicate={isDuplicate}
          makeDidCompletedAllTasks={makeDidCompletedAllTasks}
          noMakeDidCompletedAllTasks={noMakeDidCompletedAllTasks}
        />
        <Content
          tasks={tasks}
          isSearch={isSearch}
          inputTask={inputTask}
          foundTasks={foundTasks}
          changeTodo={changeTodo}
          removeOneTask={removeOneTask}
        />
        <Footer />
      </div>
    </>
  );
}

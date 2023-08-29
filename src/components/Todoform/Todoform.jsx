import React, { useEffect, useState } from 'react';
import './todoform.css';
import Task from '../Task/Task';

export default function Todoform() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  const [inputTask, setInputTask] = useState('');

  const [foundTasks, setFoundTask] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  const [groupTasks, setGroupTasks] = useState([]);

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { id: Math.random(new Date()), title: inputTask, isComplited: false }]);
      setInputTask('');
      setFoundTask([]);
      setIsSearch(false);
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

  console.log('---->', foundTasks);

  return (
    <>
      <div className="todoform">
        <div className="header">
          <input
            value={inputTask}
            type="text"
            onKeyUpCapture={(e) => addTaskEnter(e)}
            placeholder="введите задачу"
            onChange={(e) => setInputTask(e.target.value)}
          ></input>
          <button onClick={() => addTask()}>Записать</button>
          <button onClick={() => findTasks()}>
            {isSearch && inputTask.trim() !== '' ? 'закрыть поиск' : 'поиск'}
          </button>
          <button
            onClick={() => removeGroupTasks()}
            style={{ visibility: groupTasks.length > 1 ? null : 'hidden' }}
          >
            удалить группу элементов
          </button>
        </div>
        <div className="navigate"></div>
        <div className="content">
          {isSearch && inputTask.trim() !== '' ? (
            foundTasks.length === 0 ? (
              <div>не найдено</div>
            ) : (
              foundTasks.map((foundTask) => (
                <Task
                  key={foundTask.id}
                  task={foundTask}
                  changeTodo={changeTodo}
                  removeOneTask={removeOneTask}
                />
              ))
            )
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                changeTodo={changeTodo}
                removeOneTask={removeOneTask}
              />
            ))
          )}
        </div>
        <div className="footer">тут футер</div>
      </div>
    </>
  );
}

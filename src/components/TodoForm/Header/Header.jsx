import { Link } from 'react-router-dom';
import './header.css';

export default function Header({
  tasks,
  inputTask,
  isSearch,
  groupTasks,
  addTaskEnter,
  setInputTask,
  addTask,
  findTasks,
  removeGroupTasks,
  removeAllTasks,
  isDuplicate,
  makeDidCompletedAllTasks,
  noMakeDidCompletedAllTasks,
}) {
  return (
    <div className="header">
      <div className="btn-home">
        <Link to="/">
          <button className="btn-home">Домашняя страница</button>
        </Link>
      </div>

      <div className="div-input-task">
        <input
          className={isDuplicate ? 'error-input-task' : 'input-task'}
          value={inputTask}
          type="text"
          onKeyUpCapture={(e) => addTaskEnter(e)}
          placeholder="введите задачу"
          onChange={(e) => setInputTask(e.target.value)}
        ></input>
        {isDuplicate && (
          <label className="label-input-task" htmlFor="error-input-task">
            такая задача уже есть
          </label>
        )}
      </div>
      <button className="btn-addtask" onClick={() => addTask()}>
        Записать
      </button>
      <button className="btn-findtask" onClick={() => findTasks()}>
        {isSearch && inputTask.trim() !== '' ? 'закрыть поиск' : 'поиск'}
      </button>
      {tasks.length > 1 ? (
        <>
          <button className="btn-delete-all" onClick={() => removeAllTasks()}>
            удалить все задачи
          </button>
          <button className="btn-iscompleted-all" onClick={() => makeDidCompletedAllTasks()}>
            снять со всех выбор
          </button>
          <button className="btn-noiscompleted-all" onClick={() => noMakeDidCompletedAllTasks()}>
            отметить все
          </button>
        </>
      ) : null}
      {groupTasks.length > 1 ? (
        <button className="btn-delete-grope" onClick={() => removeGroupTasks()}>
          удалить группу элементов
        </button>
      ) : null}
    </div>
  );
}

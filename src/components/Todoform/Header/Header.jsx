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
}) {
  return (
    <div className="header">
      {isDuplicate && (
        <label className="task-input-label" htmlFor="error-input-task">
          такая задача уже есть
        </label>
      )}

      <input
        className={isDuplicate ? 'error-input-task' : 'input-task'}
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
      {tasks.length > 1 ? (
        <button onClick={() => removeAllTasks()}>удалить все задачи</button>
      ) : null}
      {groupTasks.length > 1 ? (
        <button onClick={() => removeGroupTasks()}> удалить группу элементов </button>
      ) : null}
    </div>
  );
}

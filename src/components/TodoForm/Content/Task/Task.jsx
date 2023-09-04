import './task.css';

export default function Task({ task, changeTodo, removeOneTask }) {
  return (
    <div className="task">
      <input
        id={task.id}
        type="checkbox"
        checked={task.isComplited}
        onChange={() => changeTodo(task.id)}
      />
      <label
        className="taskTitle"
        htmlFor={task.id}
        style={{ textDecoration: task.isComplited ? 'line-through' : null }}
      >
        {task.title}
      </label>
      <button className="close" onClick={() => removeOneTask(task.id)}>
        &times;
      </button>
    </div>
  );
}
// <div className='taskTitle'>{task.title}</div>

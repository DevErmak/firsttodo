import './task.css';
import { PiTrash } from 'react-icons/pi';

export default function Task({ task, changeTodo, removeOneTask }) {
  return (
    <div className="task">
      <input
        id={task.id}
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => changeTodo(task.id)}
      />
      <div class="taskTitle fixed-size">
        <label
          className="text-wrapper"
          htmlFor={task.id}
          style={{ textDecoration: task.isCompleted ? 'line-through' : null }}
        >
          {task.title}
          {/* <div className="">...</div>
          <div className="">
            Длинный текст, который не помещается в две строки, но будет отображаться и скрываться
            при раскрытии и закрытии аккордеона.
          </div> */}
        </label>
        {/* <div className="">...</div> */}
      </div>
      <div className="close" onClick={() => removeOneTask(task.id)}>
        <PiTrash color="black" size={25} />
      </div>
    </div>
  );
}

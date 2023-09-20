import { useEffect, useRef, useState } from 'react';
import './task.css';
import { PiTrash } from 'react-icons/pi';
import DotTitle from './DotTitle';

export default function Task({ task, changeTodo, removeOneTask }) {
  const [isBigText, setIsBigText] = useState(true);
  const [isActiveFullText, setIsActiveFullText] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      console.log('--------->titleRef.current.scrollHeight', titleRef.current.scrollHeight);
      console.log('--------->titleRef.current.clientHeight', titleRef.current.clientHeight);
      if (titleRef.current.scrollHeight > titleRef.current.clientHeight) {
        setIsBigText(true);
      } else {
        setIsBigText(false);
        console.log('1-------->isBigText', isBigText);
      }
    }
    console.log('--------->isBigText', isBigText);
  }, [titleRef]);

  return (
    <div className="task">
      <input
        id={task.id}
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => changeTodo(task.id)}
      />
      <div className="taskTitle fixed-size">
        <label
          ref={titleRef}
          className={isBigText ? (isActiveFullText ? 'text-wrapper' : 'full-text') : 'text'}
          htmlFor={task.id}
          style={{ textDecoration: task.isCompleted ? 'line-through' : null }}
        >
          {task.title}
        </label>
        <DotTitle
          isBigText={isBigText}
          isActiveFullText={isActiveFullText}
          setIsActiveFullText={setIsActiveFullText}
        />
      </div>
      <div className="close" onClick={() => removeOneTask(task.id)}>
        <PiTrash color="black" size={25} />
      </div>
    </div>
  );
}

import './content.css';
import Task from './Task/Task';

export default function Content({
  tasks,
  isSearch,
  inputTask,
  foundTasks,
  changeTodo,
  removeOneTask,
}) {
  const isRenderSearch = () => {
    return isSearch && inputTask.trim() !== '';
  };
  const drawTask = (stateElement) => {
    return stateElement.map((Element) => (
      <Task key={Element.id} task={Element} changeTodo={changeTodo} removeOneTask={removeOneTask} />
    ));
  };
  return (
    <div className="content">
      {isRenderSearch() ? (
        foundTasks.length === 0 ? (
          <div className="not-found">не найдено</div>
        ) : (
          drawTask(foundTasks)
        )
      ) : (
        drawTask(tasks)
      )}
    </div>
  );
}

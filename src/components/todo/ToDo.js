import ErrorBoundary from "../common/ErrorBoundary";
import ToDoItemText from "./ToDoItemText";
import { memo } from 'react'

const Inner = ({
  todoItem,
  handleToggleCompleted,
  handleDelete,
  handleEdit,
  idUpdating,
}) => {
  return (
    <div
      key={todoItem.id}
      className={
        todoItem.completed ? "single-task completed" : "single-task"
      }
    >
      <div
        onClick={() => {
          return handleToggleCompleted(todoItem.id);
        }}
      >

        <ToDoItemText todoText={todoItem.todoText} important={todoItem.important} />
      </div>
         
      {idUpdating === todoItem.id ? (
        <button
          className="btn btn-primary busy-spinner"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </button>
      ) : null}

      <div className="task-actions">
        <button
          className="btn edit"
          title="Edit"
          onClick={() => handleEdit(todoItem)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>

        <button
          className="btn delete"
          title="Delete"
          onClick={() => {
            const response = window.confirm("Delete?");
            if (response) {
              handleDelete(todoItem.id);
            }
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

const debug = false;

const ToDoErrorBoundary = (props) => {
  return debug ?
    (<div className="single-task text-bg-danger">
      <b>ERROR PROCESSING ToDo: {JSON.stringify(props)}</b>
    </div>)
    : <b>Something went wrong</b>
}

const ToDo = (props) => {
  return (
    <ErrorBoundary errorUI={<ToDoErrorBoundary {...props}/> }>
      <Inner {...props} />
    </ErrorBoundary>
  )
}

export default memo(ToDo, (prevProps, nextProps) => {
  return !(
    prevProps.todoItem.completed != nextProps.todoItem.completed ||
    prevProps.todoItem.important != nextProps.todoItem.important ||
    prevProps.idUpdating === prevProps.todoItem.id ||
    nextProps.idUpdating === nextProps.todoItem.id
  )
});

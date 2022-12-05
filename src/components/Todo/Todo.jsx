import React from "react";
import styles from "../../styles/layout/Todo.module.scss";


const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div classname={styles.todo}>
            <li 
            className={`styles.todoItem ${todo.completed ? 
             styles.completed : ""}`}>
                {text}</li>
            <button onClick={completeHandler} className={styles.completeBtn}>
             <span className={styles.checkBtn}>✓</span>
            </button>
            <button onClick={deleteHandler} className={styles.deleteBtn}>
             <span className={styles.trashBtn}>✗</span>
            </button>
        </div>
    );
}

export default Todo;
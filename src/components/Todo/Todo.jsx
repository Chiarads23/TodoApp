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
                <i className={styles.fas_fa_check}></i>
            </button>
            <button onClick={deleteHandler} className={styles.trashBtn}>
                <i className={styles.fas_fa_trash}></i>
            </button>
        </div>
    );
}

export default Todo;
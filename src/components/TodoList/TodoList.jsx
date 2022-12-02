import React from "react";
import styles from "../../styles/layout/TodoList.module.scss";
import Todo from "../Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className={styles.todoContainer}>
            <ul className={styles.todoList}>
                {filteredTodos.map((todo) => (
                    <Todo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text} />
                ))}

            </ul>
        </div>
    )
};

export default TodoList;
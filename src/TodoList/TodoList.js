import { useState, useEffect } from 'react';
import Clock from "./js/Clock";
import './TodoList.scss';


const TodoList = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `할 일 : ${count}개`;
    });

    const [todos, setTodos] = useState([
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(0);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextTodos = todos.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setTodos(nextTodos);
        setInputText('');
    };

    const todoList = todos.map(todo => (<><li key={todo.id}  >
        {todo.text}
    <button className='deleteButton' onClick={() => {
        onRemove(todo.id);
        setCount(count - 1);
    }}>
        X
        </button></li></>));

    const onRemove = id => {
        const nextTodos = todos.filter(todo => todo.id !== id);
        setTodos(nextTodos);
    };


    return (
        <>
        <div className='container'>
            <div className='wrapTitle'>
                <h1 className='todoTitle'>Todo List</h1>
            </div>
            <div className='wrapContent'>
                <Clock />
                <input value={inputText} onChange={onChange} placeholder="할 일을 추가하세요!" required />
                <button className='addButton' onClick={() => {
                    onClick()
                    setCount(count + 1)
                }}> + </button>
                <ul>{todoList}</ul>
            </div>
            </div>
        </>

    );
};

export default TodoList;
import { useState, useEffect } from 'react';

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

    const todoList = todos.map(todo => (<li key={todo.id} onDoubleClick={() => {
        onRemove(todo.id)
        setCount(count - 1)
    }}>
        {todo.text}
    </li>));

    const onRemove = id => {
        const nextTodos = todos.filter(todo => todo.id !== id);
        setTodos(nextTodos);
    };


    return (
        <>
            <input value={inputText} onChange={onChange} placeholder="할 일을 추가하세요!" required />
            <button onClick={() => {
                onClick()
                setCount(count + 1)
            }}>추가</button>
            <ul>{todoList}</ul>
        </>

    );
};

export default TodoList;
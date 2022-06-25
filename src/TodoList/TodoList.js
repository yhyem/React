import { useState, useEffect } from 'react';
import Clock from "./js/Clock";
import './TodoList.scss';
import {
    useRecoilState,
    useRecoilValue,
    useResetRecoilState,
} from "recoil";
import { todos } from "../atoms/todos";


const TodoList = () => {

    const [todo, setTodo] = useRecoilState(todos); // useState와 사용법 동일
    const recoilValue = useRecoilValue(todos); // 해당 atom의 값
    const resetTodos = useResetRecoilState(todos); // 초기값으로 돌리는 함수

    const [count, setCount] = useState(recoilValue.length);

    useEffect(() => {
        document.title = `할 일 : ${count}개`;
    });

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(recoilValue.length + 1);

    const onChange = e => setInputText(e.target.value);
    const onAdd = () => {
        const nextTodos = todo.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setTodo(nextTodos);
        setInputText('');
    };

    const todoList = todo.map(todo => (<><li key={todo.id}  >
        {todo.text}
        <button className='deleteButton' onClick={() => {
            onRemove(todo.id);
            setCount(count - 1);
        }}>
            X
        </button></li></>));

    const onRemove = id => {
        const nextTodos = todo.filter(todo => todo.id !== id);
        setTodo(nextTodos);
    };


    return (
        <>
            <div className='container'>
                <div className='wrapTitle'>
                    <h1 className='todoTitle'>Todo List</h1>
                </div>
                <div className='wrapContent'>
                    <Clock />
                    <div className='wrapButton'>
                        <input value={inputText} onChange={onChange} placeholder="할 일을 추가하세요!" required />
                        <button className='addButton' onClick={() => {
                            onAdd()
                            setCount(count + 1)
                        }}> + </button>
                        <div>
                            <button className='resetButton' onClick={() => {
                                resetTodos()
                                setCount(recoilValue.length)
                                //왜 한번만 누르면 숫자가 안바뀌고 두 번 눌러야 초기화가 될까요..?  
                            }}>reset</button>
                        </div>
                    </div>
                    <ul>{todoList}</ul>
                </div>
            </div>
        </>

    );
};

export default TodoList;
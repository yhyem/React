import './Introduce.css';
import { useState } from 'react';
import bing from '../src/image/bingbing.png'


function Introduce(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [part, setPart] = useState("");
    const [hobby1, setHobby1] = useState("");
    const [hobby2, setHobby2] = useState("");
    const [hobby3, setHobby3] = useState("");



    function onChangename(e) {
        setName(e.target.value);
    }

    function onChangeage(e) {
        setAge(e.target.value);
    }

    function onChangepart(e) {
        setPart(e.target.value);
    }

    function onChangehobby1(e) {
        setHobby1(e.target.value);
    }

    function onChangehobby2(e) {
        setHobby2(e.target.value);
    }

    function onChangehobby3(e) {
        setHobby3(e.target.value);
    }

    function onClicktitle() {
        let title = document.getElementById('introTitle');
        title.innerHTML = '안녕하세요! '+name+'님';
       
    }


    return (
        <>
            <div>
                <br></br>
                이름을 입력해주세요 :
                <input onChange={onChangename} value={name} />
                <br></br>
                나이를 입력해주세요 :
                <input onChange={onChangeage} value={age} />
                <br></br>
                파트를 입력해주세요 :
                <input onChange={onChangepart} value={part} />
                <br></br>
                첫번째 취미를 입력해주세요 :
                <input onChange={onChangehobby1} value={hobby1} />
                <br></br>
                두번째 취미를 입력해주세요 :
                <input onChange={onChangehobby2} value={hobby2} />
                <br></br>
                세번째 취미를 입력해주세요 :
                <input onChange={onChangehobby3} value={hobby3} />
            </div>
            <h1 id="introTitle" onClick={onClicktitle}>
                {name}의 자기소개 페이지</h1>
                <div class="wrapImg">
                <img id="profileImg" src={bing} alt="어지러워요"></img>
            </div>
            <div id='introContent'>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
                <p>파트 : {part} </p>
            </div>


            <h3>취미</h3>
            <div id="wrapSpecial">
                <div class="specialContent">
                    {hobby1}
                </div>
                <div class="hideContent">
                    왜 {hobby1}가 취미이신가요?
                    (❁´▽`❁)
                </div>
            </div>

            <div id="wrapSpecial">
                <div class="specialContent">
                    {hobby2}
                </div>
                <div class="hideContent">
                    왜 {hobby2}가 취미이신가요?
                    (❁´▽`❁)
                </div>
            </div>

            <div id="wrapSpecial">
                <div class="specialContent">
                    {hobby3}
                </div>
                <div class="hideContent">
                    왜 {hobby3}가 취미이신가요? 
                    (❁´▽`❁)
                </div>
            </div>

        </>
    )
}

export default Introduce;
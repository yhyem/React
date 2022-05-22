import './Clock.scss'
import styled, {css} from 'styled-components';

function Clock() {

  const Box = styled.div`
    text-align: center;
  `;

  const Clock = styled.h2`
    color: black;
    transition: 0.25s;
    font-size: 50px;

    &:hover{
        color: ${props => props.color || 'black'};
        transform: scale(1.1);
    }
  `;


  const clock = document.querySelector("h2#clock");

  function getClock() {
    //[quiz] 'Date() 생성자'에 대하여 검색하기 
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //[quiz] 값 추가 : 'innerText' vs 'innerHTML' 차이점 찾아보기
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  // getClock();
  // setInterval(getClock, 1000);

  return(
    <>
      <Box>
        <Clock color='pink' onLoad={setInterval(getClock, 1000)}>00:00:00</Clock>
      </Box>
    </>

    );
  
}

export default Clock;
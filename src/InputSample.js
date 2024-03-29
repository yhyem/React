import {useState} from "react"; 

function InputSample() {
	const [text, setText] = useState(""); // 초기값은 빈 string 으로

	function handleChange(e) {
    setText(e.target.value);
  };

	function handleReset() {
		setText("");
  };

  return (
    <div>
      <input onChange={handleChange} value={text} />
      <button onClick={handleReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
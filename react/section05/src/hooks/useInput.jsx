import { useState } from "react";

//3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출가능
//const state = useState(); // 에러
//2. 훅은 조건부로 호출될 수는 없다.
//if문이나 for문 안에서 호출 불가
//3. 나만의 훅(custom hook)을 직접 만들 수 있다.

function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;

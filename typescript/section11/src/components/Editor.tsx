import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
  //onClickAdd: (text: string) => void;
  //children: ReactElement;
}

export default function Editor(props: Props) {
  //타입스크립트 사용 시 초기화할땐 공백이라도 넣어주는게 좋다.
  //넣어주지 않는다면 타입이 string | undefind가 되기때문
  const [text, setText] = useState("");

  //const dispatch = useContext(TodoDispatchContext);
  const dispatch = useTodoDispatch();

  const onChageInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    //props.onClickAdd(text);
    dispatch?.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

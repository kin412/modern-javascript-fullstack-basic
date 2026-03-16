// const Button = (props) => {
//   console.log(props);
//   return (
//     //color 가 없는 태그들은 undefined가 전달되므로 prpos.color 뒤에 다른 체이닝을 거는건 위험함
//     // 그래서 defaultProps를 설정
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   );
// };

//25년이전. 18버전
// Button.defaultProps = {
//   color: "black",
// };

//25년이후. 19버전. 위의옵션이 제거됨. 구조분해 할당으로 처리해야함
//자식요소는 children으로 전달됨.
const Button = ({ children, text, color = "black" }) => {
  //이벤트 객체 e
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    //color 가 없는 태그들은 undefined가 전달되므로 prpos.color 뒤에 다른 체이닝을 거는건 위험함
    // 그래서 defaultProps를 설정
    <button
      onClick={onClickButton}
      onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;

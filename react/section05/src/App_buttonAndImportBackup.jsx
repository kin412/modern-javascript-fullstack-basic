import "./App.css";
//vite로 만든 프로젝트에서는 확장자 생략 가능
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App_backup() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/*이렇게 prop이 많아 질수도 있으니 아예 객체로 분리*/}
      {/* <Button text={"메일"} color={"red"} a={1} b={2} c={3} /> */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;

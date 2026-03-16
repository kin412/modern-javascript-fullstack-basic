import "./Main.css";

//JSX 주의사항
//1.중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 값인것만 넣을수있다.
//2. 숫자, 문자열, 배열 값만 랜더링 된다. if문 for문 같은 값이 없는것 안되고, 객체안됨.
//3. 모든 태그는 닫혀있어야한다.
//4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
  //const number = 10;
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        // style={{
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue",
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>
  //   // (
  //   //   <main>
  //   //     <h1>main</h1>
  //   //     <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  //   //     {10}
  //   //     {true}
  //   //     {undefined}
  //   //     {null}
  //   //   </main>
  //   // );
  // );
};

export default Main;

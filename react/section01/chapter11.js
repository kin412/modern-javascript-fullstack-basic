//함수 선언 - 호이스팅 - 자바스크립트에서는 함수 선을 아래에 해도 문제가 없음.
function getArea(width, height) {
  another();
  let area = width * height;
  console.log(area);

  function another() {
    //중첩 함수
    console.log("another");
  }

  return area;
}

let area1 = getArea(10, 20);

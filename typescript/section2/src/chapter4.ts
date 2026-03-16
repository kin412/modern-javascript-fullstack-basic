//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

//변수와 같이 동일한 스코프내에선 동일한 이름으로 생성 불가
//type User = {};
//아래는 스코프가 함수안쪽이므로 가능
function func() {
  // 바깥의 User를 미리 다른 이름으로 정의 해야 쓸수 있음.
  type ExternalUser = User;

  type User = {};
}

let user: User = {
  id: 1,
  name: "kin",
  nickname: "kinkin",
  birth: "2020.20.20",
  bio: "바이오캔디",
  location: "부산광역시",
};

let user2: User = {
  id: 1,
  name: "kin",
  nickname: "kinkin",
  birth: "2020.20.20",
  bio: "바이오캔디",
  location: "부산광역시",
};

//인덱스 시그니처
type CountryCodes = {
  //   Korea: string;
  //   UnitedState: string;
  //   UnitedKingdom: string;
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodeds = {
  [key: string]: number;
  //Korea: string; // 이건 꼭 있어야 한다.and 위에서 정의한 인덱스 시그처의 타입과 프로퍼티의 타입이 일치해야만함.
};

let countryNumberCodeds = {
  //이게 비어 있으면 에러가 아님. 인덱스 시그니처는 위반만 안하면 문제가 없음.
  //Korea: 410,
  //   UnitedState: 840,
  //   UnitedKingdom: 826,
};

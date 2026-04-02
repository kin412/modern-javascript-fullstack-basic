import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

//combine이 타입을 추론해주므로 필요없음
// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

export const useCountStore = create(
  devtools(
    persist(
      //subscribeWithSelector - useEffect와 비슷
      subscribeWithSelector(
        //state 훅 이라면 ...state명 뭐 이런식으로 해줘야 업데이트하는것 이외의 것들도 유지가 되는데 - immer가 해줌
        immer(
          //combine 사용시 첫번째 인수 기준으로 현재 스토어의 타입을 자동으로 추론해줌
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increaseOne: () => {
                //get();

                //combine 사용시 store보다는 보통 state로 표기함.
                // set((state) => ({
                //   count: state.count + 1,
                // }));
                //immer 사용하면 바로 객체 반환 가능
                set((state) => {
                  state.count += 1;
                });
              },
              decreaseOne: () => {
                // set((state) => ({
                //   count: state.count - 1,
                // }));
                set((state) => {
                  state.count -= 1;
                });
              },
            },
          })),
        ),
      ),
      {
        //persist 두번째 인수
        name: "countStore", //브라우저의 로컬 스토리지에 어떤이름으로 저장할것인가? persist 두번째 매개변수
        //위대로 설정하면 다저장하지만 action은 엮인게 많아서 저장하지 못함.
        //그래서 새로고침시 count만 가져오고 action은 빈객체로 불러오기때문에 작동을 한함.
        //그래서 partialize로 count만 저장한다고 명시
        partialize: (store) => ({
          count: store.count,
        }),
        //스토리지 설정. 현재 설정은 로컬스토리지 대신 세션 스토리지
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      // devtools 두번째 인수
      //크롬 확장프로그램 redux devtools
      name: "countStore",
    },
  ),
);

//첫 인수 store의 count를 구독해서 이게 변경될때마다 두번째 인수 콜백함수를 실행함.
useCountStore.subscribe(
  (store) => store.count,
  //두번째 인수 prevCount - 업데이트전 값
  (count, prevCount) => {
    //두번째 콜백함수 - listner
    console.log(count, prevCount);

    //현재 스토어의 값
    const store = useCountStore.getState();
    //useCountStore.setState((store)=>({})) //또 set하면 무한루프
  },
);

//내가 이해한대로 정리
/*
주스탠드가 export하는 함수 create가 있음.
create는 내부에서 콜백함수에 주스탠드의 set과 get 함수를 넣는 로직이 있음.
근데 주스탠드의 set과 get함수도 안에서 콜백함수에 주스탠드의 store를 넣는 로직이있음.
그래서 아래의 store매개변수는 이름이 s 여도 c 여도 뭐여도 상관없음
그리고 create함수는 제네릭을 적용하면 내부에서 그 제네릭을 사용하며,
반환 값으로는 리액트 내장훅을 가지고 있는 커스텀 훅이다.
*/
// export const useCountStore = create<Store>((set, get) =>
//   //리턴하는게 create가 반환하는 store가 됨. 그래서 state와 action을 리턴해야함.
//   //return {
//   // () 소괄호로 감싸면 return 생략가능
//   ({
//     count: 0,
//     actions: {
//       increase: () => {
//         //const count = get().count;
//         //state 훅 이라면 ...state명 뭐 이런식으로 해줘야 업데이트하는것 이외의 것들도 유지가 되는데 - immer가 해줌
//         //zustand는 하지 않아도 유지시켜줌
//         //   set({
//         //     count: count + 1,
//         //   });

//         //위의 get set을 store를 이용해 한방에 처리가능
//         set((store) => ({
//           count: store.count + 1,
//         }));
//       },
//       decrease: () => {
//         set((store) => ({
//           count: store.count - 1,
//         }));
//       },
//     },
//   }),
// );

//전용 커스텀 훅
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};

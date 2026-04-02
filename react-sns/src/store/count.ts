import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

//내가 이해한대로 정리
/*
주스탠드가 export하는 함수 create가 있음.
create는 내부에서 콜백함수에 주스탠드의 set과 get 함수를 넣는 로직이 있음.
근데 주스탠드의 set과 get함수도 안에서 콜백함수에 주스탠드의 store를 넣는 로직이있음.
그래서 아래의 store매개변수는 이름이 s 여도 c 여도 뭐여도 상관없음
그리고 create함수는 제네릭을 적용하면 내부에서 그 제네릭을 사용하며,
반환 값으로는 리액트 내장훅을 가지고 있는 커스텀 훅이다.
*/
export const useCountStore = create<Store>((set, get) =>
  //리턴하는게 create가 반환하는 store가 됨. 그래서 state와 action을 리턴해야함.
  //return {
  // () 소괄호로 감싸면 return 생략가능
  ({
    count: 0,
    actions: {
      increase: () => {
        //const count = get().count;
        //state 훅 이라면 ...state명 뭐 이런식으로 해줘야 업데이트하는것 이외의 것들도 유지가 되는데
        //zustand는 하지 않아도 유지시켜줌
        //   set({
        //     count: count + 1,
        //   });

        //위의 get set을 store를 이용해 한방에 처리가능
        set((store) => ({
          count: store.count + 1,
        }));
      },
      decrease: () => {
        set((store) => ({
          count: store.count - 1,
        }));
      },
    },
  }),
);

//전용 커스텀 훅
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};

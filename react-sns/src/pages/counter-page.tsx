import Controller from "@/components/counter/controller";
import Viewer from "@/components/counter/viewer";
import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  //const store = useCountStore();
  //주스탠드 사용시 각 구조분해할당으로 store를 가져오는것.
  //하지만 이때는 하나만 가져와도 내부적으로 useCountStore() 훅 호출시 안의 전부다를 가져오게됨.
  //그럼 결국 count만 업데이트 되어도 셋다 가져오니까 count를 안쓰고 뒤의 두개만쓰는 controller.tsx도 불필요하게 리렌더링되게 됨.
  //const { count, increase, decrease } = useCountStore();

  //그래서 이와같이 훅안에 매개변수로 하나를 지정하면 그것만 가져올수 있게됨. 이 지정하는 매개변수를 selector라함.
  //이 셀렉터는 create가 반환한 커스텀훅 내부에서 보관중인 store를 주스탠드가 꺼내서 셀렉터를 콜백함수로 넘겨서 실행함.
  //const increase = useCountStore((store) => store.increase);

  //근데 위와 같이 할경우 무조건 두줄로 불러와야하면 귀찮음.
  //그래서 데이터는 데이터별로, 기능은 기능별로 묶음.
  /*
    type Store = {
    count: number;
    actions: {
        increase: () => void;
        decrease: () => void;
    };
    };
  */
  //const { increase, decrease } = useCountStore((store) => store.actions);

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      {/* <div>{count}</div> */}
      {/* 주스탠드나 리덕스를 사용하면 프롭스로 state를 넘기고 이런거 안해도됨. 전역저장소를 가지기 때문에 */}
      {/* 주스탠드는 컴포넌트에서 불러온 store 값들 중 하나라도 업데이트가 되면, 해당 컴포넌트를 자동으로 리렌더링 시킴 */}
      <Viewer />
      <Controller />
    </div>
  );
}

import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  //const { decrease, increase } = useCountStore();
  // const increase = useCountStore((store) => store.increase);
  // const decrease = useCountStore((store) => store.decrease);
  //const { increase, decrease } = useCountStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}

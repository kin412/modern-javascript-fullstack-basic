import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  const isActive = false;
  return (
    <div>
      <Button>버튼</Button>
      {/* 조건부 클래스 정의 cn */}
      <div className={cn(isActive ? "text-gray-500" : "text-red-500")}>
        isActive
      </div>
      <div className="text-primary">primary</div>
      <div className="text-muted">muted</div>
      <div className="text-destructive">destructive</div>
    </div>
  );
}

export default App;

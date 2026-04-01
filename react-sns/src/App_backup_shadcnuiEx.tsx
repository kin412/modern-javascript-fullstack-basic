import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import { ChefHat } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

function App() {
  const isActive = false;
  return (
    <div className="p-5">
      <ChefHat className="h-10 w-10 fill-amber-500" />
      <br />
      <AlertDialog>
        <AlertDialogTrigger>open alert dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>title</AlertDialogTitle>
          <AlertDialogDescription>description</AlertDialogDescription>
          <div>body</div>
          <div>
            <AlertDialogAction onClick={() => console.log("action")}>
              action
            </AlertDialogAction>
            <AlertDialogCancel onClick={() => console.log("cancel")}>
              cancel
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <br />

      {/* 다이얼로그나 팝오버는 open 프로퍼티를 통해서 열리게 하는게 가능함. */}
      {/* <Dialog open={true}> */}
      <Dialog>
        <DialogTrigger>open dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>title</DialogTitle>
            <DialogDescription>description</DialogDescription>
            <div>body</div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <br />

      <Popover>
        {/* asChild - 자식요소가 해당 태그의 역할을 하게 해줌 */}
        <PopoverTrigger asChild>
          <Button>open</Button>
        </PopoverTrigger>
        <PopoverContent>content!</PopoverContent>
      </Popover>
      <br />

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Toaster />

      <Textarea />

      <Input placeholder="입력..." />

      <Button
        onClick={() => {
          toast("토스트 메시지", {
            position: "top-center",
          });
        }}
      >
        버튼
      </Button>
      {/* destructive - 부정적인 */}
      <Button variant={"destructive"}>destructive버튼</Button>
      <Button variant={"ghost"}>ghost버튼</Button>
      <Button variant={"link"}>link버튼</Button>
      <Button variant={"outline"}>outline버튼</Button>
      <Button variant={"secondary"}>secondary버튼</Button>

      {/* 조건부 클래스 정의 cn */}
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
      <div className="text-primary">primary</div>
      <div className="text-muted">muted</div>
      <div className="text-destructive">destructive</div>
    </div>
  );
}

export default App;

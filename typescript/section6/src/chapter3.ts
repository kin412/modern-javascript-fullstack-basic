/*
인터페이스와 클래스
*/

//인터페이스는 클래스로 치면 public 필드만 가능
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  //name: string;
  //moveSpeed: number;

  constructor(
    public name: string,
    public moveSpeed: number,
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

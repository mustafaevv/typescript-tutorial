class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly modal:string
//   readonly numberOfWheels:number = 4
//   constructor(theModal:string){
//     this.modal = theModal
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly modal: number) {}
}

class Animal {
  protected void: string = "";
  public color: string = "black";

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.void = voice;
  }
}

const cat = new Cat();

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }
  info(): string {
    return "This is info";
  }
}

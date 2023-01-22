interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {};

const rect2 = {} as Rect;

const rect3 = <Rect>{};

interface RectWidthArea extends Rect {
  getArea: () => number;
}

const rect4: RectWidthArea = {
  id: "123",
  size: {
    width: 10,
    height: 10,
  },
  getArea(): number {
    return this.size * this.size.height;
  },
};

//====== Class

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

///======

interface Style {
  [key: string]: string | number;
}

const css: Style = {
  border: "1px solid black",
  marginTop: "20px",
  borderRadius: "5px",
  width: 20,
};

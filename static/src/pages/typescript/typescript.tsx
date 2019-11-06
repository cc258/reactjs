import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  ChangeEvent,
  ChangeEventHandler
} from "react";
import { injectIntl } from "react-intl";
// import Ts from "./ts.tsx";

// InjectedIntlProps: react-intl类型检查
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

export interface TypescriptProps {
  // 基本类型
  name: string;
  age?: number;
  isDone?: boolean;
  listA?: number[];
  listB?: Array<number>;
  tuple?: [string, number];
  notSure?: any;
  u?: undefined;
  n?: null;
}

export interface TypescriptState {
  name: string;
  age?: number;
}

export interface ButtomProps {
  onClick(event: MouseEvent<HTMLDivElement>): void;
}

export interface InputProps {
  // onChange(event: ChangeEvent<HTMLInputElement>): void;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface IResponse<T> {
  message: string;
  result: T;
  success: boolean;
}

enum orderStatus {
  WAIT_FOR_PAY = "待支付",
  UNDELIVERED = "完成支付，待发货",
  DELIVERED = "已发货",
  COMPLETED = "已确认收货"
}

// 通过泛型的类型别名 Readonly 将 props, state 的所有属性都设置为只读属性。
// 所以通过 this.props.size = 'sm' 进行更新时候 TS 检查器会进行错误提示
// 防止直接更新 state
// 有状态组件：
class Typescript extends React.PureComponent<TypescriptProps, TypescriptState> {
  state = {
    name: "",
    age: 18
  };

  render() {
    const { name, age = 1 } = this.props;
    return (
      <div className="pages home">
        <p>{name}</p>
        <p>{age}</p>
        <this.Button onClick={this.handClick}>click me</this.Button>
        <input onChange={this.handChange} />
      </div>
    );
  }

  // ClipboardEvent<T = Element> 剪贴板事件对象
  // DragEvent<T = Element> 拖拽事件对象
  // ChangeEvent<T = Element>  Change 事件对象
  // KeyboardEvent<T = Element> 键盘事件对象
  // MouseEvent<T = Element> 鼠标事件对象
  // TouchEvent<T = Element>  触摸事件对象
  // WheelEvent<T = Element> 滚轮事件对象
  // AnimationEvent<T = Element> 动画事件对象
  // TransitionEvent<T = Element> 过渡事件对象

  // 试想下当我们注册一个 Touch 事件，然后错误的通过事件处理函数中的 event 对象去获取其 clientY 属性的值，在这里我们已经将 event 设置为 any 类型，导致 TypeScript 在编译时并不会提示我们错误， 当我们通过 event.clientY 访问时就有问题了，因为  Touch 事件的 event 对象并没有  clientY 这个属性。

  // 通过 interface 对 event 对象进行类型声明编写的话又十分浪费时间，幸运的是 React 的声明文件提供了 Event 对象的类型声明
  handClick = (e: MouseEvent) => {
    console.log("click");
  };

  handChange = (e: ChangeEvent) => {
    console.log("change");
  };

  // 无状态组件
  Button: FC<ButtomProps> = ({ onClick, children }) => {
    return <div onClick={onClick}>{children}</div>;
  };
}

export default injectIntl(Typescript);

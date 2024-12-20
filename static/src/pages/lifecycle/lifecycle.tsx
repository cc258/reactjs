import React, { Component } from 'react';
import axios from 'axios';

interface LifeCycleProps {
  name?: string;
}
interface LifeCycleStates {
  number?: number;
  users?: Array<any>;
  api?: Array<any>;
}
//react 17 不推荐 componentWillMount, componentWillReceiveProps, componentWillUpdate

export default class LifeCycle extends Component<LifeCycleProps, LifeCycleStates> {
  static defaultProps = {
    name: '计数器',
  };
  constructor(props: LifeCycleProps) {
    super(props);
    // 初始化有关联的state.
    this.state = { number: 0, users: [] };
    console.log('1. constructor 初始化 props and state');
  }
  static getDerivedStateFromProps() {}

  //componentDidMount在渲染过程中永远只有执行一次
  //一般是在componentDidMount执行副作用，进行异步操作
  componentDidMount() {
    console.log('3. componentDidMount 组件挂载完成');
    const { number, users } = this.state;
    this.setState({number: users.length ? 1: 2})
    this.getUsers();
  }
  shouldComponentUpdate(nextProps: LifeCycleProps, nextState: LifeCycleStates) {
    console.log('Counter', nextProps, nextState);
    console.log('4. shouldComponentUpdate 询问组件是否需要更新');
    return true;
  }
  componentDidUpdate(prevProps: LifeCycleProps, prevState: LifeCycleStates) {
    console.log('6. componentDidUpdate 组件更新完毕');
  }
  add = () => {
    this.setState({ number: this.state.number });
  };

  getUsers = () => {
    return axios.get('https://api.github.com/users').then(res => {
      console.log('+++++++++++++++++++++++++++', res);
      this.setState({ users: res.data });
    });
  };

  getApi = () => {
    return axios.get('/users/12345').then(res => {
      console.log('+++++++++++++++++++++++++++', res);
      this.setState({ api: res.data });
    });
  };
  render() {
    console.log('2.render渲染，也就是挂载++++++++++++++++++', this.state);
    return (
      <div style={{ border: '5px solid red', padding: '45px 20px' }}>
        <p>
          name: {this.props.name}, number: {this.state.number}
        </p>
        <button onClick={this.add}>+</button>
        <ul>
          {this.state.users.map(user => (
            <li>{user.login}</li>
          ))}
        </ul>
        {this.state.number % 2 == 0 && <SubCounter number={this.state.number} />}

        <button onClick={this.getApi} />
      </div>
    );
  }
}

interface SubCounterTypes {
  number?: number;
}

class SubCounter extends Component<SubCounterTypes, SubCounterTypes> {
  constructor(props: SubCounterTypes) {
    super(props);
    this.state = { number: 0 };
  }
  componentWillUnmount() {
    console.log('SubCounter componentWillUnmount');
  }
  //调用此方法的时候会把新的属性对象和新的状态对象传过来
  shouldComponentUpdate(nextProps: SubCounterTypes, nextState: SubCounterTypes) {
    console.log('SubCounter', nextProps, nextState);
    if (nextProps.number % 3 == 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log('SubCounter  2.render');
    return (
      <div style={{ border: '5px solid green' }}>
        <p>{this.props.number}</p>
      </div>
    );
  }
}

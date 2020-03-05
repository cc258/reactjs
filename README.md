# reactjs

# Resources interesting

[React 源码解析](https://react.jokcy.me/book/api/react.html)

[React](https://zh-hans.reactjs.org/)

[React v16.8: The One With Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)

[React 源码开始的那一步](https://github.com/funfish/blog/issues)

[React v16.8: The One With Hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)

[React Use](https://github.com/streamich/react-use)

[Sneak Peek: Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)

[Behind the Scenes: Improving the Repository Infrastructure](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html)

[如何阅读大型前端开源项目的源码](https://zhuanlan.zhihu.com/p/36996225)

[[译]深入 React fiber 架构及源码](https://zhuanlan.zhihu.com/p/57346388)

[React 源码解析(一):组件的实现与挂载](https://juejin.im/post/5983dfbcf265da3e2f7f32de)

[React v16.0（译）](https://webfe.kujiale.com/react-v16-0-yi/)

[完全理解 React Fiber](http://www.ayqy.net/blog/dive-into-react-fiber/)

[React 源码剖析——（四）新引擎 React Fiber](https://www.jianshu.com/p/420b5c030e98)

[React16.2 的 fiber 架构](https://segmentfault.com/a/1190000013109071)

[react16 源码-ReactDom.render 流程](https://zhuanlan.zhihu.com/p/40987447)

[React 16 Fiber 源码速览](http://zxc0328.github.io/2017/09/28/react-16-source/)

# Examples

## React 16 之后有三个生命周期被废弃(但并未删除)

componentWillMount
componentWillReceiveProps
componentWillUpdate
官方计划在 17 版本完全删除这三个函数，只保留 UNSAVE\_前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们

目前 React 16.8 +的生命周期分为三个阶段,分别是挂载阶段、更新阶段、卸载阶段

挂载阶段:
constructor:
构造函数，最先被执行,我们通常在构造函数里初始化 state 对象或者给自定义方法绑定 this
getDerivedStateFromProps:
static getDerivedStateFromProps(nextProps, prevState),这是个静态方法,当我们接收到新的属性想去修改我们 state，可以使用 getDerivedStateFromProps
render:
render 函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的 DOM、React 组件、Fragment、Portals、字符串和数字、Boolean 和 null 等内容
componentDidMount:
组件装载之后调用，此时我们可以获取到 DOM 节点并操作，比如对 canvas，svg 的操作，服务器请求，订阅都可以写在这个里面，但是记得在 componentWillUnmount 中取消订阅

更新阶段:
getDerivedStateFromProps:
此方法在更新个挂载阶段都可能会调用
shouldComponentUpdate:
shouldComponentUpdate(nextProps, nextState),有两个参数 nextProps 和 nextState，表示新的属性和变化之后的 state，返回一个布尔值，true 表示会触发重新渲染，false 表示不会触发重新渲染，默认返回 true,我们通常利用此生命周期来优化 React 程序性能
render: 更新阶段也会触发此生命周期
getSnapshotBeforeUpdate:
getSnapshotBeforeUpdate(prevProps, prevState),这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps 和 prevState，表示之前的属性和之前的 state，这个函数有一个返回值，会作为第三个参数传给 componentDidUpdate，如果你不想要返回值，可以返回 null，此生命周期必须与 componentDidUpdate 搭配使用
componentDidUpdate:
componentDidUpdate(prevProps, prevState, snapshot),该方法在 getSnapshotBeforeUpdate 方法之后被调用，有三个参数 prevProps，prevState，snapshot，表示之前的 props，之前的 state，和 snapshot。第三个参数是 getSnapshotBeforeUpdate 返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态。

卸载阶段:
componentWillUnmount:
当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的 DOM 元素等垃圾清理工作。
react 生命周期(http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

作者：皮神雷卡丘
链接：https://www.jianshu.com/p/3eb210e0f604
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

import React, { memo, useState, useEffect, useCallback, useContext, useReducer, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

interface SimpleProps {
  name?: string;
  age?: number;
}

interface SimpleStates {
  stars?: number;
  widgetData?: any;
}

// 几种定义function component的方式
// function Simple(props: SimpleProps) {
// const Simple: React.FC<SimpleProps> = () => {
// const Simple: React.FC<SimpleProps> = props => {
// const Simple: React.FC<SimpleProps> = ({name, age}) => {
const Simple: React.FC<SimpleProps> = ({ name = 'leo', age = 18 }) => {
  const [stars, setStars] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [widgetData, setWidgetData] = useState<any>([]);
  // const [anys, setAnys] = useState<SimpleProps[]>([{}]);
  const { formatMessage: f } = useIntl();

  // 每次re-render都会创建一次。
  function onStars() {
    setStars(stars + 10);
  }

  function getWidgetData() {
    axios
      .post('http://localhost:8090/api/v1/widget', {
        params: {
          id: 12345,
        },
      })
      .then(res => {
        setWidgetData(res);
      });
  }

  // useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

  const getWidgetData_cb = () => {
    axios.get('https://api.github.com/users').then(res => {
      if (res && res.data) {
        setWidgetData(res.data);
      }
    });
    // fetch('https://api.github.com/users')
    // 	.then((res) => res.json())
    // 	.then((data) => {
    // 		setWidgetData(data)
    // 	})
  };

  useEffect(() => {
    getWidgetData_cb();
  }, []);

  console.log(edit);

  return (
    <section className="pages">
      <h1 role="countStars" onClick={onStars}>
        {stars}
      </h1>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        EDIT
      </button>
      <ul className="memo-list" role="ul">
        {widgetData &&
          widgetData.map((item: any, key: string) => {
            return edit ? (
              <li role={item.login} key={key}>
                edit: {item.login}
              </li>
            ) : (
              <li role={item.login} key={key}>
                {item.login}
              </li>
            );
          })}
      </ul>

      <MemoChildOne />
      <MemoChildTwo edit={edit} />
    </section>
  );
};

const ChildOne = () => {
  console.log('Child one rendering');
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  return (
    <div role="child-1" ref={ref}>
      <h2>Child One</h2>
      {height}
    </div>
  );
};

const ChildTwo: React.FC<any> = ({ edit }) => {
  console.log('Child two rendering');
  return <h2>Child two {edit ? 'edit' : null}</h2>;
};

const MemoChildOne = memo(ChildOne);
const MemoChildTwo = memo(ChildTwo);

const SimpleMemo = memo(Simple);

export default SimpleMemo;

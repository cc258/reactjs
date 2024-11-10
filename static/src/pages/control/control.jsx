import React, { memo, useState, useEffect, useCallback, useContext, useReducer, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

const Control = props => {
  const { name = 'leo', age = 18, value } = props;
  const [stars, setStars] = useState(0);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    // getWidgetData_cb();
  }, []);

  console.log(edit);

  return (
    <section className="pages">
      <div>
        <ChildInput props value={inputValue} onChange={setInputValue} />
      </div>
      <span onClick={() => setEdit(!edit)}>{!edit ? `Edit` : `Save`}</span>
      <MemoChildOne />
      <MemoChildTwo edit={edit} />
    </section>
  );
};

const ChildInput = ({ text, defaultValue, value = '', onChange }) => {
  console.log('Child Three rendering');
  const [inputValue, setInputValue] = useState(value || defaultValue);

  const handChange = e => {
    const v = e.target.value;
    onChange(v);
  };
  return (
    <h2>
      <label>
        <span>{text}</span>
        <input value={inputValue} onChange={handChange} />
      </label>
    </h2>
  );
};

const ChildOne = () => {
  console.log('Child one rendering');

  return <h2>Child One</h2>;
};

const ChildTwo = ({ edit }) => {
  console.log('Child two rendering');
  return <h2>Child two {edit ? 'edit' : `save`}</h2>;
};

const MemoChildOne = memo(ChildOne);
const MemoChildTwo = memo(ChildTwo);

const ControlMemo = memo(Control);

export default ControlMemo;

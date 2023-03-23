import React, { memo, useState, useEffect, Children } from 'react';
import { useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { string } from 'prop-types';
import Axios from 'axios';
import { cName } from 'countries-name';

const countryString = 'cn';
const countryLowerCase = ['cn', 'Fr'];

const Es = () => {
  const dispatch = useDispatch();
  const props = useSelector(state => state.home);
  const { formatMessage: f } = useIntl();

  const [routes, setRoutes] = useState([]);
  const [isFile, setIsFile] = useState();

  // 数组递归降维
  function arrCat(d) {
    return d.reduce((p, c) => p.concat(c).concat(c.children ? arrCat(c.children) : []), []);
  }

  const uploadFile = () => {
    if (!isFile) {
      return;
    }
    const data = new FormData();
    data.append('file', isFile);

    Axios({
      method: 'post',
      url: 'http://localhost:8090/api/uploadFile',
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  useEffect(() => {
    setRoutes(arrCat(arrayData));
  }, []);

  return (
    <div className="pages home">
      <div>{cName(countryString)}</div>
      <div>{cName(countryLowerCase)}</div>
      {/* <pre>{JSON.stringify(routes, null, 4)}</pre> */}
      <input type="file" onChange={e => setIsFile(e.target.files[0])} />
      <button onClick={uploadFile}>上传</button>
    </div>
  );
};

const arrayData = [
  {
    path: 1,
    title: 1,
    children: [
      {
        path: 2,
        title: 2,
      },
      {
        path: 3,
        title: 3,
      },
    ],
  },
  {
    path: 4,
    title: 4,
    children: [
      {
        path: 5,
        title: 5,
      },
      {
        path: 6,
        title: 6,
      },
    ],
  },
];

export default memo(Es);

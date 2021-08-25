import React, { FC, memo, useState, useEffect, CSSProperties } from 'react';
import Dragula from 'react-dragula';
import './dragula.scss';

const DragulaPage: FC = () => {
  const [text, setText] = useState('');

  const dragulaDecorator = (componentBackingInstance: any) => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function (el: HTMLElement) {
          return el.classList.contains('drag-container'); // 只有Drake.Containers中的只有元素将被考虑在内
        },
        moves: function (el, source, handle, sibling) {
          // console.log('moves', el, source, handle, sibling);
          // 默认情况下，元素始终可拖动
          return el.classList.contains('drag-block');
        },
        accepts: function (el, target, source, sibling) {
          // console.log('accepts', el, target, source, sibling);
          
          // 默认情况下，可以在任何`容器`中删除元素
          // if (!target.classList.contains('drag-container')) {
          //   return false;
          // }
          return target !== document.getElementById("left");
        },
      };
      let left = document.getElementById('left');
      let right = document.getElementById('right');
      const drake = Dragula([left, right], options);


      drake.on('drag', (el, source) => {
        console.log('drag', el, source);
      })
      drake.on('dragend', (el) => {
        console.log('dragend', el);
      })
      drake.on('drop', (el, container, source, sibling) => {
        console.log('drop', el, container, source, sibling);
      })
      drake.on('cancel', (el, container, source) => {
        console.log('cancel', el, container, source);
      })
      drake.on('remove', (el, container, source) => {
        console.log('remove', el, container, source);
      })
      drake.on('shadow', (el, container, source) => {
        console.log('shadow', el, container, source);
      })
      drake.on('over', (el, container, source) => {
        console.log('over', el, container, source);
      })
      
      // drake.on('out', (el, container, source) => {
      //   console.log('out', el, container, source);
      // })
      // drake.on('out', (el, container, source) => {
      //   console.log('out', el, container, source);
      // })
    }
  };

  return (
    <div className="pages dragula">
      <div className="container" ref={dragulaDecorator}>
        <div id="left" className="left">
          <div className="drag-block">Swap me around</div>
          <div className="drag-block">Swap her around</div>
          <div className="drag-block">Swap him around</div>
          <div className="drag-block">Swap them around</div>
          <div className="drag-block">Swap us around</div>
          <div className="drag-block">Swap things around</div>
          <div className="drag-block">Swap everything around</div>
        </div>
        <div id="right" className="drag-container right"></div>
        </div>
    </div>
  );
};

export default memo(DragulaPage);

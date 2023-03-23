import React, { FC, ReactElement, useState, useEffect, useCallback } from 'react';
import dragula from 'react-dragula';
import './draghook.scss';



const DragHook: FC = (props: any): ReactElement => {
  const [container, setContainer] = useState<HTMLDivElement>();

  // const handleDrop = useCallback(
  //   (el, target, source) => {
  //     const sourceId = source.classList.contains('card-body');
  //     const targetId = target.classList.contains('card-body');
  //     // onChange({
  //     //   source: { listId: sourceId, itemIds: 1 },
  //     //   target: { listId: targetId, itemIds: 2 }
  //     // });
  //   },
  //   // [onChange]
  //   []
  // );

  const handleDrag = useCallback(() =>{
    console.log('Drag');
  }, [container])
  const handleDrop = useCallback(() =>{
    console.log('Drop');
  }, [container])


  useEffect(() => {
    if(!container){
      return
    }
    const cards:any = Array.from(container.querySelectorAll('.container'));
    console.log(cards);
    const drake = dragula(cards , {
      moves(el, source, handle) {
        console.log('el', el);
        return source.classList.contains('container');
      }
    });
    drake.on("drop", handleDrop);

    return () => {
      drake.destroy()
    };
  }, [container]);

  const ref = (containerEl:HTMLDivElement) => {
    setContainer(containerEl);
  };

  return (
    <div className="pages dragclass" ref={ref}>
      <div id="left" className="container">
        <Card text="Card 3" />
        <Card text="Card 4" />
      </div>
      <div id="right" className="container">
        <Card text="Card 1" />
        <Card text="Card 2" />
      </div>
    </div>
  );
};

const Card: FC = (props: any): ReactElement => {
  return (
    <div className="card">
      <div className="header">
        <h3>Example Card Header</h3>
      </div>
      <div className="body">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default DragHook;

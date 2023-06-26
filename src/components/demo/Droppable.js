import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'ListContainer',
  });
  const style = {
    color: isOver ? 'green' : undefined,
    border: '1px solid grey',
    padding: '10px',
    width: '250px',
    height: '150px'
  };

  const ListStyle = {
    border: '1px solid grey',
    padding: '10px',
    width: '250px',
    height: '150px'
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
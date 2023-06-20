import { Item } from "./Item";
import { useDroppable } from '@dnd-kit/core';

const List = () => {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });

  const defualtStyle = {
    width: '500px',
    height: '500px',
    display: 'flex',
    gap: '10px',
    border: '1px solid red',
    color: isOver ? 'green' : '#d4d4d4',
  }

  return (
    <div ref={setNodeRef} style={defualtStyle }>
      <Item text="Imagine Dragons" itemId="imagine-dragons" />
      <Item text="Here comes the kraken" itemId="hctk" />
      <Item text="Bullet from my Valentine" itemId="bfmv"/>
      <Item text="Bring me the horizon" itemId="bring-me-the-horizon" />
    </div>
  );
};

export { List };

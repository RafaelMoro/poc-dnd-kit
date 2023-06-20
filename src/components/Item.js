import { useDraggable } from '@dnd-kit/core';

const Item = ({ text, itemId }) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: itemId,
  });

  const defaultStyles = {
    border: 'solid 1px black'
  }

  const itemStyles = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    color: 'green'
  } : { color: 'blue' };


  return (
  <div ref={setNodeRef} {...listeners} {...attributes} style={{...itemStyles, ...defaultStyles}}>
    { text }
  </div>
  );
};

export { Item };

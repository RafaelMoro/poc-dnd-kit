import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MoveIcon } from './MoveIcon';
import './SortableItem.styles.css'

const SortableItem = ({ text, itemId, animateLayoutChanges, disabled }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: itemId, animateLayoutChanges, disabled});

  console.log(transition);

  const sortableItemStyles = {
    transition,
    '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
    '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
    '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
    '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
  };

  return (
  <div
    className='Wrapper'
    style={sortableItemStyles}>
      <div className='Item'>
        <button
          ref={setNodeRef}
          {...listeners}
          {...attributes}
        >
          <MoveIcon />
        </button>
        { text }
      </div>
  </div>
  );
};

export { SortableItem };

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MoveIcon } from './MoveIcon';
import './SortableItem.styles.css'

const SortableItem = ({ text, itemId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: itemId});

  const sortableItemStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
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

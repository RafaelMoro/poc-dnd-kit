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

  const wrapperStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const wrapperClasses = isDragging ? 'Wrapper dragOverlay' : 'Wrapper'
  const itemClasses = isDragging ? 'Item dragOverlay' : 'Item'

  return (
  <div
    className={wrapperClasses}
    style={wrapperStyles}>
      <div className={itemClasses}>
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

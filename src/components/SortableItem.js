import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './SortableItem.styles.css'
import { MoveIcon } from './MoveIcon';

const SortableItem = ({ text, itemId, dragOverlay }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: itemId});

  const wrapperStyles = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const wrapperClasses = dragOverlay ? 'Wrapper dragOverlay' : 'Wrapper'
  const draggingClass = isDragging ? 'dragOverlay' : ''
  const dragOverlayClass = dragOverlay ? 'dragOverlay' : ''

  return (
  <div
    className={wrapperClasses}
    style={wrapperStyles}>
      <div className={`Item ${draggingClass} ${dragOverlayClass}`}>
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

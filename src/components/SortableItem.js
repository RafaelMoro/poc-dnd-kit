import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './SortableItem.styles.css'
import { Item } from './Item';

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
  <Item
    text={text}
    wrapperClasses={wrapperClasses}
    wrapperStyles={wrapperStyles}
    draggingClass={draggingClass}
    dragOverlayClass={dragOverlayClass}
    listeners={listeners}
    attributes={attributes}
    ref={setNodeRef}
  />
  );
};

export { SortableItem };

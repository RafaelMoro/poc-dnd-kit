import { useSortable } from '@dnd-kit/sortable';
import './SortableItem.styles.css'
import { Item } from './Item';

const SortableItem = ({ text, itemId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id: itemId});

  return (
  <Item
    text={text}
    transform={transform}
    transition={transition}
    isDragging={isDragging}
    listeners={listeners}
    attributes={attributes}
    ref={setNodeRef}
  />
  );
};

export { SortableItem };

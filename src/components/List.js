import {
  useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, closestCenter
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates, arrayMove, SortableContext, verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useState } from "react";
import { SortableItem } from "./SortableItem";

const List = () => {
  const defaultItems = [
    'Imagine Dragons',
    'Here comes the kraken',
    'Bullet from my Valentine',
    'Bring me the horizon'
  ]
  const [items, setItems] = useState(defaultItems)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        { items.map((item) => (
          <SortableItem key={item} itemId={item} text={item} />
        )) }
      </SortableContext>
    </DndContext>
  );
};

export { List };

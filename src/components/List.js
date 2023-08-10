import {
  useSensors, useSensor, PointerSensor, KeyboardSensor, DndContext, pointerWithin, closestCenter, DragOverlay
} from '@dnd-kit/core';
import {
  sortableKeyboardCoordinates, arrayMove, SortableContext, verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useState } from "react";

import { SortableItem } from "./SortableItem";
import './SortableItem.styles.css'

const List = () => {
  const defaultItems = [
    'Imagine Dragons',
    'Here comes the kraken',
    'Bullet from my Valentine',
    'Bring me the horizon'
  ]
  const [items, setItems] = useState(defaultItems)
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
  }

  const handleDragEnd = (event) => {
    const { active = {}, over = {} } = event;

    if ((active?.id) && (over?.id) && (active?.id !== over?.id)) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      })
      setActiveId(null);
    }
  }

  const handleDragMove = (event) => {
    // console.log(event.delta);
  }

  return (
    <DndContext
      sensors={sensors}
      onDragMove={handleDragMove}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <div className='items-container'>
          { items.map((item) => (
            <SortableItem key={item} itemId={item} text={item} />
          )) }
        </div>
      </SortableContext>
      <DragOverlay>
        { (!!activeId) && (<SortableItem itemId={activeId} text={activeId} />) }
      </DragOverlay>
    </DndContext>
  );
};

export { List };

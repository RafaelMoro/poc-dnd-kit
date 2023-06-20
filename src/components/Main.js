import { useState } from 'react';
import {DndContext} from '@dnd-kit/core';

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggble";

const Main = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );

  const resetDrop = () => setIsDropped(false);

  function handleDragEnd(event) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          {isDropped ? draggableMarkup : 'Drop here'}
        </Droppable>
      </DndContext>
      <div style={{ marginTop: '20px' }}>
        <button onClick={resetDrop}>Reset</button>
      </div>
    </>
  )
}

export { Main };

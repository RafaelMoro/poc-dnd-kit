import { memo, forwardRef } from "react";
import { CSS } from '@dnd-kit/utilities';

import { MoveIcon } from "./MoveIcon";

const Item = memo(
  forwardRef(
    ({
      text,
      transition,
      transform,
      listeners,
      attributes,
      isDragging,
      dragOverlay,
    }, ref) => {
      const wrapperStyles = {
        transform: CSS.Transform.toString(transform),
        transition,
      }
    
      const wrapperClasses = dragOverlay ? 'Wrapper dragOverlay' : 'Wrapper'
      const draggingClass = isDragging ? 'dragging' : ''
      const dragOverlayClass = dragOverlay ? 'dragOverlay' : ''
      return (
        <div className={wrapperClasses} style={wrapperStyles} ref={ref}>
          <div className={`Item ${draggingClass} ${dragOverlayClass}`}>
            <button { ...listeners } { ...attributes }>
              <MoveIcon />
            </button>
            { text }
          </div>
        </div>
      )
    }
  )
)

export { Item }

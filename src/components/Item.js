import { memo, forwardRef } from "react";
import { MoveIcon } from "./MoveIcon";

const Item = memo(
  forwardRef(
    ({
      text,
      wrapperClasses,
      wrapperStyles,
      draggingClass,
      dragOverlayClass,
      listeners,
      attributes
    }, ref) => (
      <div className={wrapperClasses} style={wrapperStyles} ref={ref}>
        <div className={`Item ${draggingClass} ${dragOverlayClass}`}>
          <button { ...listeners } { ...attributes }>
            <MoveIcon />
          </button>
          { text }
        </div>
      </div>
    )
  )
)

export { Item }

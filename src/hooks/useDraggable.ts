import { useEffect } from "react";
import type { UseDraggable } from "../types";

const useDraggable: UseDraggable = (ref, onDrag) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      element.style.left = `${e.clientX - offsetX}px`;
      element.style.top = `${e.clientY - offsetY}px`;
      onDrag?.(e.clientX - offsetX, e.clientY - offsetY); // call drag event callback
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    element.addEventListener("mousedown", onMouseDown);
    return () => {
      element.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref, onDrag]);
};
export default useDraggable;

import { useEffect } from "react";
import type { UseResizable } from "../types"; // ✅ 타입 import

const useResizable: UseResizable = (
  ref,
  setSize,
  { minWidth, minHeight },
  onResize,
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isResizing = false;

    const onMouseDown = (e: MouseEvent) => {
      isResizing = true;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = Math.max(
        minWidth,
        e.clientX - element.getBoundingClientRect().left,
      );
      const newHeight = Math.max(
        minHeight,
        e.clientY - element.getBoundingClientRect().top,
      );
      setSize({ width: newWidth, height: newHeight });
      onResize?.(newWidth, newHeight);
    };

    const onMouseUp = () => {
      isResizing = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    element
      .querySelector(".resize-handle")
      ?.addEventListener("mousedown", onMouseDown as unknown as EventListener);

    return () => {
      element
        .querySelector(".resize-handle")
        ?.removeEventListener(
          "mousedown",
          onMouseDown as unknown as EventListener,
        );
    };
  }, [ref, setSize, minWidth, minHeight, onResize]);
};

export default useResizable;

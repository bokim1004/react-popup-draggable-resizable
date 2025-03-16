import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import useDraggable from "../hooks/useDraggable";
import useResizable from "../hooks/useResizable";
import type { DraggablePopupProps } from "../types";

const DraggableAndResizablePopup = (props: DraggablePopupProps) => {
   const {
      title = "Popup",
      width = 400,
      height = 300,
      minWidth = 200,
      minHeight = 150,
      draggable = true,
      resizable = true,
      onClose,
      onDrag,
      onResize,
      style = {},
      children,
   } = props;

   const popupRef = useRef<HTMLDivElement | null>(null);
   const [size, setSize] = useState({ width, height });

   if (draggable) useDraggable(popupRef, onDrag);
   if (resizable)
      useResizable(popupRef, setSize, { minWidth, minHeight }, onResize);

   return ReactDOM.createPortal(
      <div style={styles.overlay}>
         <div
            ref={popupRef}
            style={{
               ...styles.popup,
               width: size.width,
               height: size.height,
               ...style,
            }}
         >
            <div style={styles.header}>
               <span>{title}</span>
               <button
                  onClick={onClose}
                  style={styles.closeButton}
                  type="button"
               >
                  X
               </button>
            </div>
            <div style={styles.content}>{children}</div>
            {resizable && (
               <div className="resize-handle" style={styles.resizeHandle} />
            )}
         </div>
      </div>,
      document.body,
   );
};

const styles: Record<string, React.CSSProperties> = {
   overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   popup: {
      position: "absolute",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
   },
   header: {
      padding: "10px",
      backgroundColor: "#007bff",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      cursor: "move",
   },
   closeButton: {
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
   },
   content: {
      padding: "15px",
      flexGrow: 1,
   },
   resizeHandle: {
      width: "10px",
      height: "10px",
      position: "absolute",
      right: "0",
      bottom: "0",
      cursor: "nwse-resize",
      backgroundColor: "#007bff",
   },
};

export default DraggableAndResizablePopup;

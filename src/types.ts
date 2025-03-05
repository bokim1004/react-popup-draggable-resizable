// popup size type
export interface PopupSize {
  width: number;
  height: number;
}

//basic popup props
export interface DraggablePopupProps {
  title?: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  draggable?: boolean;
  resizable?: boolean;
  onClose: () => void;
  onDrag?: (x: number, y: number) => void;
  onResize?: (width: number, height: number) => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

//drag type
export type UseDraggable = (
  ref: React.RefObject<HTMLDivElement | null>,
  onDrag?: (x: number, y: number) => void,
) => void;

// resize type
export type UseResizable = (
  ref: React.RefObject<HTMLDivElement | null>,
  setSize: React.Dispatch<React.SetStateAction<PopupSize>>,
  options: { minWidth: number; minHeight: number },
  onResize?: (width: number, height: number) => void,
) => void;

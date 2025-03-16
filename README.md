# @chloebok-dev/react-popup-draggable-resizable  

> A fully customizable, draggable, and resizable popup component for React.

## ✨ Features

- Draggable and resizable popup component
- Customizable size, position, and style
- Supports custom content through children
- Lightweight and fast performance

---

## 📦 Installation  

To install the package, use npm or yarn:

```bash
npm install @chloebok-dev/react-popup-draggable-resizable
# or
yarn add @chloebok-dev/react-popup-draggable-resizable
```

## 🚀 Usage

Here’s a quick example of how to use the popup component:

```js
import React, { useState } from "react";
import DraggableAndResizablePopup from "@chloebok-dev/react-popup-draggable-resizable";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      {isOpen && (
        <DraggableAndResizablePopup title="My Popup" onClose={handleClose}>
          <p>This is a draggable and resizable popup!</p>
        </DraggableAndResizablePopup>
      )}
    </div>
  );
};

export default App;

```

## 🎨 Styling

You can customize the popup's appearance by passing a style object:

```js
<DraggableAndResizablePopup
  title="Styled Popup"
  style={{ backgroundColor: "#f0f0f0", border: "2px solid #333" }}
>
  <p>Custom styled popup content</p>
</DraggableAndResizablePopup>
```

## 📝 Handling Events

Use the onDrag and onResize props to capture drag and resize events:

```js
<DraggableAndResizablePopup
  title="Event Handling"
  onDrag={(position) => console.log("Dragged to:", position)}
  onResize={(size) => console.log("Resized to:", size)}
/>

```

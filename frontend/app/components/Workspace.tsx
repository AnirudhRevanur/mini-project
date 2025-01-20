import { useState } from "react";
import { useDrop } from "react-dnd";

interface DragItem {
  name: string;
  type: string;
}

export default function Workspace() {
  const [droppedItems, setDroppedItems] = useState<string[]>([]);

  const addInstruction = (name: string) => (
    setDroppedItems((prev) => [...prev, name])
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "INSTRUCTION",
    drop: (item: DragItem) => addInstruction(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`h-full p-4 border ${isOver ? "bg-blue-100" : "bg-white"
        } transition-all`}
    >
      <div className="text-4xl font-semibold">Workspace</div>
      {droppedItems.length === 0
        ? <p className="text-gray-500">Drag instructions here</p>
        : (
          <ul>
            {droppedItems.map((item, index) => (
              <li
                key={index}
                className="p-2 mb-2 bg-gray-200 rounded-md border-2"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

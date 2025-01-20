import { useDrag } from "react-dnd";

export default function Instruction({ name }: { name: any }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "INSTRUCTION",
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 bg-white border rounded cursor-pointer shadow ${isDragging ? "opacity-50" : "opacity-100"
        }`}
    >
      {name}
    </div>
  );
}

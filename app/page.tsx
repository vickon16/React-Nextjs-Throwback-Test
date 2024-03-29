"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import React from "react";

const lists = [
  { id: "0", name: "List 0", description: "This is List 0" },
  { id: "1", name: "List 1", description: "This is List 1" },
  { id: "2", name: "List 2", description: "This is List 2" },
  { id: "3", name: "List 3", description: "This is List 3" },
  { id: "4", name: "List 4", description: "This is List 4" },
  { id: "5", name: "List 5", description: "This is List 5" },
];

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  const [newList, setNewList] = React.useState(lists);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function onDragEnd(result: any) {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(newList);
    console.log({ items });
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setNewList(items);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              className="space-y-4 p-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {newList.map((list, index) => (
                <Draggable key={list.id} draggableId={list.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="w-44 h-24 border-2 rounded-md flex flex-col gap-y-2 items-center justify-center"
                    >
                      <span>{list.name}</span>
                      <span className="text-sm text-white/40">
                        {list.description}
                      </span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

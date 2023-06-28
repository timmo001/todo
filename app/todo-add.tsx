"use client";
import { useState } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

import { createTodo } from "./todo-actions";

export default async function TodoAdd() {
  const [task, setTask] = useState<string>("");

  async function handleCreate() {
    await createTodo(task);
    setTask("");
  }

  function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  return (
    <div className="flex flex-row border-b py-2">
      <button className="rounded-md px-2 py-1 opacity-0" disabled>
        <CheckIcon className="h-6 w-6 text-slate-300" />
      </button>
      <input
        className="flex-1 bg-transparent focus:outline-none"
        value={task}
        type="text"
        onChange={handleUpdate}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleCreate();
        }}
      />
      <button
        className="rounded-md px-2 py-1 opacity-40 hover:opacity-100"
        onClick={handleCreate}
      >
        <PlusIcon className="h-6 w-6 text-slate-300" />
      </button>
    </div>
  );
}

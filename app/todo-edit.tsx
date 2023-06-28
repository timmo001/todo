"use client";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { TodoItem } from "./todo.type";
import { updateTodo } from "./todo-actions";

export default async function TodoEdit({ item }: { item: TodoItem }) {
  async function handleUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    await updateTodo(item.id, { task: e.target.value });
  }

  return (
    <div className="flex flex-row border-b py-2">
      <button className="rounded-md px-2 py-1 opacity-40 hover:opacity-100">
        <CheckIcon className="h-6 w-6 text-slate-300" />
      </button>
      <input
        className="flex-1 bg-transparent focus:outline-none"
        defaultValue={item.task}
        type="text"
        onChange={handleUpdate}
      />
      <button className="rounded-md px-2 py-1 opacity-40 hover:opacity-100">
        <XMarkIcon className="h-6 w-6 text-slate-300" />
      </button>
    </div>
  );
}

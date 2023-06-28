"use server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { TodoItem } from "./todo.type";

const supabase = createServerComponentClient({ cookies });

export async function createTodo(task: string): Promise<void> {
  supabase.from("todos").insert([
    {
      task,
      is_complete: false,
    },
  ]);
}

export async function updateTodo(
  id: number,
  updates: Partial<TodoItem>
): Promise<void> {
  supabase.from("todos").update(updates).match({ id });
}

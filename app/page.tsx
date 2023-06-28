import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { TodoItem } from "./todo.type";
import TodoAdd from "./todo-add";
import TodoEdit from "./todo-edit";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const items = await supabase.from("todos").select("*");

  console.log(items.data);

  return (
    <div className="flex min-h-screen min-w-full flex-1 flex-col">
      <div className="w-xl ml-auto mr-auto mt-4 flex flex-col bg-gray-900">
        {items.data?.map((item: TodoItem) => (
          <TodoEdit key={item.id} item={item} />
        ))}
        <TodoAdd />
      </div>
    </div>
  );
}

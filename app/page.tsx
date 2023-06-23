import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { CheckIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const items = await supabase.from("todo").select("*");

  return (
    <div className="flex min-h-screen min-w-full flex-1 flex-col">
      <div className="w-xl ml-auto mr-auto mt-4 bg-gray-900">
        {items.data?.map((item) => (
          <div className="flex flex-row border-b px-2 py-2">
            <button className="rounded-md px-2 py-1">
              <CheckIcon className="h-6 w-6 text-slate-300" />
            </button>
            <input type="text" className="flex-1 bg-transparent" value={} />
            <button className="rounded-md px-2 py-1">
              <XMarkIcon className="h-6 w-6 text-slate-300" />
            </button>
          </div>
        ))}
        <div className="mt-2 flex flex-row px-2 py-2">
          <div className="h-6 w-6 rounded-md px-2 py-1" />
          <input type="text" className="flex-1 bg-transparent" />
          <button className="rounded-md px-2 py-1">
            <PlusIcon className="h-6 w-6 text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

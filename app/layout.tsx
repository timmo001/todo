import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Auth from "./auth";

import "./globals.css";

export const metadata = {
  title: "TODO",
  description: "Todo app built with Next.js and Supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center bg-neutral-900">
          <div className="flex min-w-full flex-1 flex-col">
            <div className="max-w flex border-b px-4 py-3 text-sm text-neutral-100">
              <Auth user={user} />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

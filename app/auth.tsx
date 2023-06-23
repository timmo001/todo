"use client";
import {
  createClientComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Auth({ user }: { user: User | null }) {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <span className="ml-auto">
      {user ? (
        <span className="flex gap-4">
          Hi, {user.email}! <span className="border-r"></span>{" "}
          <button className="hover:underline" onClick={signOut}>
            Logout
          </button>
        </span>
      ) : (
        <Link href="/login" className="text-neutral-100 hover:underline">
          Login
        </Link>
      )}
    </span>
  );
}

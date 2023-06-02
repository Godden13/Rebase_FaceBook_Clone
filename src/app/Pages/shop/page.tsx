"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Shop() {
   const { logout } = useAuth();
  const router = useRouter();  

   const handleLogout = () => {
    logout()
    .then(router.push("/"));
   }
  return (
    <main>
      <h1>girl</h1>
      <button onClick={logout}>logout</button>
    </main>
  );
}

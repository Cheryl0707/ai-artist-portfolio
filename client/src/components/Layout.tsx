import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <MobileSidebar />
      <main className="md:ml-[220px]">{children}</main>
    </>
  );
}

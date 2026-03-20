import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import CoconutChat from "./CoconutChat";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <MobileSidebar />
      <main className="md:ml-[220px]">{children}</main>
      <CoconutChat />
    </>
  );
}

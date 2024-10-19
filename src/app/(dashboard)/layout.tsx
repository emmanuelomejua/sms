import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Management System",
    description: "School Management System - Dashboard",
  };
  
  export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="">
            {children}
            Whoo
        </div>
    );
  }
  
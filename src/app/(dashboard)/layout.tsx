// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w[14%] bg-white">l</div>
      <div className="w-[86%] md:[92%] lg:w-[84%] xl:w[86%] bg-slate-800">r</div>
    </div>
  );
}

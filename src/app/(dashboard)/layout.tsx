import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w[14%] bg-white p-2">
        <Link href='/' className="flex items-center justify-center gap-2 lg:justify-start">
          <Image src='/logo.png' alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block">VAULT SMS</span>
        </Link>
        <Menu/>
      </div>
      <div className="w-[86%] md:[92%] lg:w-[84%] xl:w[86%] bg-[#f7f8fa] overflow-y-scroll flex flex-col">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}

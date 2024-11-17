'use client';

import Image from "next/image";


interface formType {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModal = ({ table,type,data, id,}: formType) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-vYellow"
        : type === "update"
        ? "bg-sky"
        : "bg-vPurple";

    return(
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
            <Image src={`/${type}.png`} alt="" width={16} height={16} />
        </button>
    )
}

export default FormModal;

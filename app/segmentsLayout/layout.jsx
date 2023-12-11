"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import CommonButton from "../ui/commonButton/commonButton";
import Link from "next/link";

export default function Layout() {
  const segments = useSelectedLayoutSegments();
  const handle = () => console.log(segments);
  return (
    <div>
      <h2>{"useSelectedLayoutSegments"}</h2>
      <p>{"Возвращает массив посещенный сегментов, либо пустой массив"}</p>
      <p>
        {"app/layout.js -> /dashboard/settings = ['dashboard', 'settings']"}
      </p>
      <CommonButton onClick={handle}>check</CommonButton>
      <p></p>
      <Link href="/segmentsLayout/dashboard">dashboard</Link>
      <hr></hr>
      <Link href="/segmentsLayout/dashboard/settings">
        {"dashboard/settings"}
      </Link>
    </div>
  );
}

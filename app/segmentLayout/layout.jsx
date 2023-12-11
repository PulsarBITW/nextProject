"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import CommonButton from "../ui/commonButton/commonButton";
import Link from "next/link";

export default function Layout() {
  const segment = useSelectedLayoutSegment();
  const handle = () => console.log(segment);
  return (
    <div>
      <h2>{"useSelectedLayoutSegment"}</h2>
      <p>
        {
          "useSelectedLayoutSegment - выдает посещенный сегмент на один уровень ниже компонента в котором находится,  либо null"
        }
      </p>
      <p></p>
      <p>{"app/layout.jsx -> /dashboard	= 'dashboard'"}</p>
      <p>
        {
          "app/dashboard/layout.js -> /dashboard/analytics/monthly = 'analytics' "
        }
      </p>
      <CommonButton onClick={handle}>check</CommonButton>
      <p></p>
      <Link href="/segmentLayout/dashboard">dashboard</Link>
      <hr></hr>
      <Link href="/segmentLayout/settings">settings</Link>
    </div>
  );
}

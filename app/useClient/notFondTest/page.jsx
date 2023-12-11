import { notFound } from "next/navigation";

export default function Page() {
  const a = true;
  if (a) notFound();
  return (
    <div>
      <h3>{"notFound - из API"}</h3>
      <p>{""}</p>
    </div>
  );
}

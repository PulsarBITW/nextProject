export const metadata = {
  title: "metatest",
  description: "описание metatest",
  openGraph: {
    title: "og для metatest",
  },
};

export default function Page() {
  return (
    <div>
      <h2>metaTest</h2>
      <p>{"metadata - работает, как и наследование у js"}</p>
    </div>
  );
}

export const metadata = {
  title: "layout",
  description: "описание layout'a",
};
export default function DashboardLayout({ children }) {
  return (
    <>
      <h1>Layout for group </h1>
      {children}
    </>
  );
}

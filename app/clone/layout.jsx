export const metadata = {
  title: "layout",
  description: "описание наследуется от layout'a",
  openGraph: {
    title: "og title layput",
    description: "og layout",
    images: [
      {
        url: "https://i.postimg.cc/DwfwGF7t/3.png",
        width: 800,
        height: 500,
      },
    ],
  },
};
export default function DashboardLayout({ children }) {
  return <>{children}</>;
}

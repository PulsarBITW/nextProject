export const metadata = {
  openGraph: {
    title: " og title layout clone",
    description: "og description layout clone",
    images: [
      {
        url: "https://i.postimg.cc/DwfwGF7t/3.png",
        width: 800,
        height: 500,
      },
    ],
  },
};

export default function LayoutClone({ children }) {
  return <>{children}</>;
}

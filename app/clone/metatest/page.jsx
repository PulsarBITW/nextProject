import { secondOG } from "@/app/OGpatterns";
// OG - наследуется, НО перезатирается ЦЕЛИКОМ, а не отдельными полями
export const metadata = {
  title: "metatest",
  openGraph: {
    title: "OG metatest",
    ...secondOG,
  },
};

export default function Page() {
  return (
    <div>
      <h2>metaTest</h2>
      <p>{"metadata - работает, как и наследование у js"}</p>
      <p>
        {
          "НО OpenGraph - наследуется, НО перезатирается целиком, то есть если мы хотим поменять например title в OG - то прийдется вводить ВСЕ поля openGraph - так как OG - ПЕРЕЗАТИРАЕТСЯ ЦЕЛИКОМ"
        }
      </p>
    </div>
  );
}

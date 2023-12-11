import axios from "axios";
import MainForm from "./components/form/mainForm";
import styles from "./page.module.css";
import FormButton from "./ui/fromButton/formButton";
import Link from "next/link";
// const getData = async () => {
//   const res = await axios.get("http://localhost:57943/cates");
//   return res.data;
// };
export const metadata = {
  title: "Try Next",
};
export default function Home() {
  // const data = await getData();

  return (
    <>
      <h1>Hi,bro!!!</h1>
      <MainForm />
      <h2>{process.env.First_Token}</h2>
      {/* {data.map((el, index, arr) => (
        <h2 key={el.id}>{el.title}</h2>
      ))} */}
      <Link href="/segmentLayout/dashboard">{"useSelectedLayoutSegment"}</Link>
      <Link href="/segmentsLayout/dashboard">
        {"useSelectedLayoutSegments"}
      </Link>
    </>
  );
}

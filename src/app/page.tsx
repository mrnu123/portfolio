import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navigation/navbar";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <>

      <Image src="/home_intro.JPG" width={640} height={400} alt="image introduction" className="circle-image"></Image>
      <h1>Software Developer</h1>
    </>


  );
}

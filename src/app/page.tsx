import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navigation/navbar";
import { Box } from "@mui/material";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ margin: 20 }}>
          <div className="col col-m-12" style={{ alignItems: 'center' }}>
            <Image src="/home_intro.png" width={400} height={400} alt="image introduction" style={{ maxWidth: "80vw",maxHeight:"80vw",marginBottom:20 }} />
          </div>
          <div className="col col-m-12" style={{textAlign:"center",justifyItems:"center"}}>
            <h1>Software Developer</h1>
          </div>
        </div>

      </div>


    </>


  );
}

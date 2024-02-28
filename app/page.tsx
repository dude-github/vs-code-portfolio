import Titlebar from "@/components/Titlebar";
import styles from "../styles/Layout.module.css";
import Sidebar from "@/components/Sidebar";
import Explorer from "@/components/Explorer";
import Tabbar from "@/components/Tabbar";
import { ReactNode } from "react";

interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps) {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

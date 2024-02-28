"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Explorer.module.css";
import ChevronRight from "./icons/ChevronRight";
import Link from "next/link";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: "json_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
];
const Explorer = () => {
  const [pfOpen, setPfOpen] = useState(true);
  return (
    <div className={styles.explore}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={pfOpen}
          onChange={() => setPfOpen(!pfOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={pfOpen ? { transform: "rotate(90deg" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={pfOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />
                {""}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;

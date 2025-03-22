import React from "react";
import style from "./Backdrop.module.css";

const Backdrop = ({ open, backdropClick }) =>
  open && (
    <div onClick={() => backdropClick()} className={style.backdrop_main_div} />
  );

export default Backdrop;

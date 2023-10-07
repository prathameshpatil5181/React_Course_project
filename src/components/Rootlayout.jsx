import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from './Rootlayout.module.css'
const Rootlayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.Content}>
      <Outlet />
      </main>
    </>
  );
};

export default Rootlayout;

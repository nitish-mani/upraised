import apiData from "../data/data";
import Card from "./card";
import "../App.css";
import QuestionCard from "./questionCard";
import Result from "./result";
import { useState } from "react";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div className="homeP">
      <Outlet></Outlet>
    </div>
  );
}

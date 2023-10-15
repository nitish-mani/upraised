import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import QuestionCard from "./components/questionCard";
import Result from "./components/result";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [result, setResult] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Card />,
        },
        {
          path: "/question",
          element: <QuestionCard setResult={setResult} />,
        },
        {
          path: "/result",
          element: <Result result={result} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

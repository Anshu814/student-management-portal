import React from "react";
import AddStudent from "../components/MainComponents/AddStudent/AddStudent";
import Header from "../components/MainComponents/Header/Header";
import ViewStudentList from "../components/MainComponents/ViewStudent/ViewStudentList";

export default function Main() {
  return (
    <>
      <Header />
      <AddStudent />
      <ViewStudentList/>
    </>
  );
}

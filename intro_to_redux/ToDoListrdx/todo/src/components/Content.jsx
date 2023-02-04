import React from "react";
import ContentFooter from "./ContentFooter";
import Todolist from "./Todolist";
function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complate</label>

        <Todolist />
      </section>

      <ContentFooter />
    </>
  );
}

export default Content;

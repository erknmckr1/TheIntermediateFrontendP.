import React from "react";
import Form from "./Contact/Form";
import List from "./List/List";
import Header from "./Header/Header";

import "./page.css";
function Page() {
  return (
    <div>
      <Header/>
      <div className="index">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default Page;

import React, { Children } from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title"> 오늘의 할 일 ({todoLength}) </div>
      <div> {children} </div>
      {/* children 인자를 통하여 app.js 속 내용을 보여줌*/}
    </div>
  );
};

export default Template;

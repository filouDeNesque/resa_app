import { useState } from "react";
import LeftSideContainer from "./LeftSideContainer/LeftSideContainer";
import MainCenterContainer from "./MainCenterContainer/MainCenterContainer";
import Style from "./style.module.css"

const DashboardContainer = () => {
  const [content, setContent] = useState<"form" | "table">("table");

  const handleContentChange = (newContent: "form" | "table") => {
    setContent(newContent);
  };

  return (
    <>
      <div id="container-dashboard" className={Style.containerDashboard}>
        <LeftSideContainer style={Style.LeftSideContainer as string} onContentChange={handleContentChange}></LeftSideContainer>
        <MainCenterContainer style={Style.MainCenterContainer as string} content={content as "form" || "table"}
        ></MainCenterContainer>
      </div>
    </>
  );
};

export default DashboardContainer;
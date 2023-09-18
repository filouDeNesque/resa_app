import { useState } from "react";
import { type MenuType } from "./Dashboard.type";
import LeftSideContainer from "./LeftSideContainer/LeftSideContainer";
import MainCenterContainer from "./MainCenterContainer/MainCenterContainer";
import Style from "./style.module.css";


const DashboardContainer = () => {
  const [content, setContent] = useState<"form" | "table">("table");
  const handleContentChange = (newContent: "form" | "table") => {
    setContent(newContent);
  };
  const [menuType, setMenuType] = useState<MenuType>("horseListe")
  const changeMenu = (menuName: MenuType) => {
    setMenuType(menuName)
  }

  console.log("utilisation de dashboard container")

  return (
    <>
      <div id="container-dashboard" className={Style.containerDashboard}>
        <LeftSideContainer
          style={Style.LeftSideContainer as string}
          onContentChange={handleContentChange}
          changeMenu={changeMenu}
        />

        <MainCenterContainer
          style={Style.MainCenterContainer as string}
          content={content as "form" || "table"}
          menuType={menuType}
          changeMenu={handleContentChange}      
          handleSetMenuType= {changeMenu}
        />
      </div>
    </>
  );
};

export default DashboardContainer;
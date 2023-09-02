import { useState } from "react";
import LeftSideContainer from "./LeftSideContainer/LeftSideContainer";
import MainCenterContainer from "./MainCenterContainer/MainCenterContainer";
import Style from "./style.module.css"

type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'

const DashboardContainer = () => {
  const [content, setContent] = useState<"form" | "table">("table");
  const handleContentChange = (newContent: "form" | "table") => {
    setContent(newContent);
  };
  const [menuType, setMenuType] = useState<menuType>("horseListe")
  const changeMenu = (menuName: menuType) => {
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
        />
      </div>
    </>
  );
};

export default DashboardContainer;
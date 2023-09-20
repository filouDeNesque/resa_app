import LeftSideContainer from "./LeftSideContainer/LeftSideContainer";
import MainCenterContainer from "./MainCenterContainer/MainCenterContainer";
import Style from "./style.module.css";


const DashboardContainer = () => {
  return (
    <>
      <div id="container-dashboard" className={Style.containerDashboard}>
        <LeftSideContainer
          style={Style.LeftSideContainer as string}
        />

        <MainCenterContainer
          style={Style.MainCenterContainer as string}
        />
      </div>
    </>
  );
};

export default DashboardContainer;
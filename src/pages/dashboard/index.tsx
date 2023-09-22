import DashboardContainer from "~/components/Dashboard/DashBoardContainer";
import Layout from "~/components/Layout/Layout";
import { DashboardContextProvider } from "~/context/dashboard/dashboard.context";

const Dashboard = () => {
    return (
        <>
            <DashboardContextProvider>
                <Layout>
                    <DashboardContainer></DashboardContainer>
                </Layout>
            </DashboardContextProvider>
        </>
    );
};

export default Dashboard;
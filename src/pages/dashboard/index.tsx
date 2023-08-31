import DashboardContainer from "~/components/Dashboard/DashBoardContainer";
import Layout from "~/components/Layout/Layout";

const Dashboard = () => {
    return (
        <>
            <Layout>
                <DashboardContainer></DashboardContainer>
            </Layout>
            {/* boxliste Accès a la liste entière de chevaux  */}
            {/* title liste possibilité d'avoir un children le logo et le title peuvent changer/}
            {/* filtre accès a la liste des stabs dans la liste + filtre accès a la liste des noms dans la liste filtre avec les option  */}
            {/* liste toute les entrer possibilite peux diriger vers le form update ou delete /}
            {/* boxliste Accès a la liste entière + Accès au nom des ecurie par id */}
        </>
    );
};

export default Dashboard;
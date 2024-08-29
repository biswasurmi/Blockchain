// import { Space } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import "./admin.css";
import AppHeader from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/AppHeader";
import PageContent from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/PageContent";
import SideMenu from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/SideMenu";

function admin() {
    return (
        <div>
            <Navbar />
            <div className="admin" > 
                <AppHeader /> <div className="SideMenuAndPageContent" > <SideMenu></SideMenu> <PageContent></PageContent> </div> 
            </div>
        </div>
        
    );
}

export default admin;
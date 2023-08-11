import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


interface LayoutProps {
  children: ReactNode;
  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <main className="flex relative min-h-[100vh] ">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
          <div className={` w-full`} >
            {children}
          </div>
        </main>
        <Footer/>
    </>
  );
};

export default Layout;

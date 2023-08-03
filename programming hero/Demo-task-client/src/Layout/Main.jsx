import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Bar from "../components/Navbar/Bar";

const Main = () => {
  return (
    <div>
      <Bar></Bar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";

import { Header } from "../../widgets/Header/Header"
import Footer from "../../widgets/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

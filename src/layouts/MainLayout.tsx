import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import ScrollToHash from "../components/common/ScrollToHash";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <ScrollToHash />

      <main className="flex-1 bg-white">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
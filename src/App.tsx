import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import InnerSmilePage from "./pages/projects/InnerSmilePage";
import EnergieAppPage from "./pages/projects/EnergieAppPage";
import LocationFinderPage from "./pages/projects/LocationFinderPage"
import TaskProPage from "./pages/projects/TaskProPage";
import BudgetBossPage from "./pages/projects/BudgetBossPage";
import BorshchahivkaSpidersPage from "./pages/projects/BorshchahivkaSpidersPage";
import CocktailsProjectPage from "./pages/projects/CocktailsProjectPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/inner-smile" element={<InnerSmilePage />} />
        <Route path="/projects/energieapp" element={<EnergieAppPage />} />
        <Route path="/projects/location-finder" element={<LocationFinderPage />} />
        <Route path="/projects/taskpro" element={<TaskProPage />} />
        <Route path="/projects/budget-boss" element={<BudgetBossPage />} />
        <Route path="/projects/borshchahivka-spiders" element={<BorshchahivkaSpidersPage />} />
        <Route path="/projects/cocktails-project" element={<CocktailsProjectPage />} />
      </Route>
    </Routes>
  );
}
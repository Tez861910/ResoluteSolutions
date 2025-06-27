// Resolute Solutions - Modern Business Website
// Professional website showcasing our core business verticals

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HouseKeepingProducts from "./pages/HouseKeepingProducts";
import IngredientSourcing from "./pages/IngredientSourcing";
import RiskManagementAnalysis from "./pages/RiskManagementAnalysis";
import ProjectManagement from "./pages/ProjectManagement";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housekeeping" element={<HouseKeepingProducts />} />
          <Route path="/sourcing" element={<IngredientSourcing />} />
          <Route path="/risk" element={<RiskManagementAnalysis />} />
          <Route path="/projects" element={<ProjectManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

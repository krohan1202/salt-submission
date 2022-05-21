import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home/Home.jsx";

function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route
          exact
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;

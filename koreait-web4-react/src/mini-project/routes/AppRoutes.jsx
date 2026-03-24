import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { PUBLIC_ROUTES } from "../constants/menu";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {PUBLIC_ROUTES.map((route) => {
          return <Route 
            key={route.id}
            path={route.path}
            element={route.element}
          />
        })}
      </Route>

      {/* 404 처리 */}
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}

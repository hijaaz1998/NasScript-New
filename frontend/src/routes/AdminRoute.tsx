import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Service from "../pages/admin_pages/Service";

const AdminRoute = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Service />} />
      </Route>
    </Routes>
  );
};
export default AdminRoute;

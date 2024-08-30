import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { LoginPage } from "./pages/admin_pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route 
          path="/admin" 
          element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <LoginPage />} 
        />
        <Route element={<PrivateRoute />}>
          <Route path="/admin/dashboard" element={<AdminRoute />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

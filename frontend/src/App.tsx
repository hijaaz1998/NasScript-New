import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";
import { LoginPage } from "./pages/admin_pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

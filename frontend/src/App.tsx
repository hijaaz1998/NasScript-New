import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </Router>
  );
};

export default App;

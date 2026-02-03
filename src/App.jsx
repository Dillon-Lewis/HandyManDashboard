import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Projects from "./pages/Projects";
import Invoices from "./pages/Invoices";
import Profits from "./pages/Profits";
import Client from "./pages/Client";
import Crew from "./pages/Crew";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/invoices" element={<Invoices/>} />
          <Route path="/profits" element={<Profits/>} />
          <Route path="/clients" element={<Client/>} />
          <Route path="/crew" element={<Crew/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

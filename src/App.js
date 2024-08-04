// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Books from "./components/Books";
import LiveBook from "./components/LiveBook";
import MonthStat from "./components/MonthStat";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import SignupPage from "./components/Signup";
import Login from "./components/Login";

function Layout({ children }) {
  const location = useLocation();
  const showSidebarAndNavbar =
    location.pathname === "/dashboard" || location.pathname === "/books";

  return (
    <div className="flex h-screen overflow-hidden">
      {" "}
      {showSidebarAndNavbar && <Sidebar />}{" "}
      <div className="flex flex-col flex-1 overflow-hidden">
        {" "}
        {showSidebarAndNavbar && <Navbar />}{" "}
        <div className="flex-1 p-4 pt-20 overflow-y-auto no-scrollbar">
          {" "}
          {children}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <div className="flex flex-row items-start gap-6">
                <MonthStat />
                <div className="flex flex-col gap-6">
                  <LiveBook />
                  <Summary />
                </div>{" "}
              </div>{" "}
            </Layout>
          }
        />{" "}
        <Route
          path="/books"
          element={
            <Layout>
              <Books />
            </Layout>
          }
        />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;

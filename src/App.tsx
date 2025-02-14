import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Unauthorized from "./components/Unauthorized";
import LandingPage from "./pages/LandingPage";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";
import ViewJob from "./pages/ViewJob";
import Login from "./pages/Login";
import JobForm from "./pages/JobForm";
import Register from "./pages/Register";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = user?.isUserLoggedIn;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/jobs"
          element={isAuthenticated ? <Jobs /> : <Unauthorized />}
        />
        <Route
          path="/jobs/:id"
          element={isAuthenticated ? <ViewJob /> : <Unauthorized />}
        />
        <Route
          path="/jobs/edit/:id"
          element={isAuthenticated ? <JobForm /> : <Unauthorized />}
        />
        <Route
          path="/jobs/new"
          element={
            isAuthenticated && user.role === "admin" ? (
              <JobForm />
            ) : (
              <Unauthorized />
            )
          }
        />
        <Route path="/jobs/:id/edit" element={<UnderConstruction />} />
        <Route path="/jobs/:id/apply" element={<UnderConstruction />} />
        <Route path="/new-home" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

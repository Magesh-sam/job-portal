import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = user?.isUserLoggedIn;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const Logout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="bg-zinc-200 dark:bg-zinc-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
          <span className="bg-orange-400 px-2 py-1 text-black rounded-sm">
            Jobs
          </span>
          <span>Hub</span>
        </Link>
        <nav className=" ">
          <ul className="flex space-x-4 items-center ">
            {user.role === "user" && (
              <li>
                <Link to="/jobs" className="hover:underline">
                  Find Jobs
                </Link>
              </li>
            )}
            {user.role === "admin" && (
              <li>
                <Link to="/hire-talent" className="hover:underline">
                  Hire Talent
                </Link>
              </li>
            )}
            <li>
              {isAuthenticated ? (
                <Button size="sm" onClick={Logout}>
                  Logout
                </Button>
              ) : (
                <Button size="sm" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { useTheme } from "@/Context/ThemeProvider";
import { Moon, Sun, SunSnow } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-12">
        <Link to="/">
          <p className=" flex items-center gap-1 ">
            <span className="flex items-center">
              <SunSnow className="w-7 h-7" />
            </span>
            <span className="custom-font font-medium text-xl">Sun & Storm</span>
          </p>
        </Link>
        {/* search */}
        <div className="flex gap-4">
          <CitySearch />
          <div
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {/* theme toggle */}
            <div
              className="cursor-pointer"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="h-6 w-6 text-yellow-400 rotate-0 transition-all" />
              ) : (
                <Moon className="h-6 w-6 text-blue-900 rotate-0 transition-all" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

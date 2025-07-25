import { Link } from "react-router-dom";
import { UserCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white relative">
      <Link to="/" className="font-bold text-xl">
        Rescape
      </Link>

      <div className="flex items-center space-x-6">
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/trip">Plan Trip</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:opacity-80 transition"
          >
            <UserCircle2 size={28} className="text-white" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setDropdownOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/signin"
                className="block px-4 py-2 hover:bg-gray-100 border-b"
                onClick={() => setDropdownOpen(false)}
              >
                Logout
              </Link>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

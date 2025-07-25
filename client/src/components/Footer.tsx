import { Link } from "react-router-dom";
import { TwitterIcon, InstagramIcon, GithubIcon } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and slogan */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Rescape</h2>
          <p className="text-sm">Your AI-powered travel partner ✈️</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/trip" className="hover:underline">Plan Trip</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social media (you can replace with real icons later) */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:underline"><TwitterIcon /></a>
            <a href="#" className="hover:underline"><InstagramIcon /></a>
            <a href="#" className="hover:underline"><GithubIcon /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-400 mt-8 pt-4 text-sm text-center">
        © {new Date().getFullYear()} Rescape. All rights reserved.
      </div>
    </footer>
  );
}

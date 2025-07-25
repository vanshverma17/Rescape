import { Link } from "react-router-dom";
import { MapPinned, Notebook, Hotel, Sparkle, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome back, Traveler! 🌍</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Upcoming Trips */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <MapPinned className="text-blue-600" />
            <h2 className="text-lg font-semibold">Upcoming Trips</h2>
          </div>
          <p className="text-sm text-gray-600">No trips yet. <Link to="/trip" className="text-blue-600 hover:underline">Plan one now!</Link></p>
        </div>

        {/* Saved Itineraries */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Notebook className="text-green-600" />
            <h2 className="text-lg font-semibold">Saved Itineraries</h2>
          </div>
          <p className="text-sm text-gray-600">Drafts and past plans will appear here.</p>
        </div>

        {/* Saved Stays */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Hotel className="text-purple-600" />
            <h2 className="text-lg font-semibold">Saved Stays</h2>
          </div>
          <p className="text-sm text-gray-600">Hotels or stays you saved will show up here.</p>
        </div>

        {/* Trip Stats */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 col-span-1 xl:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle className="text-yellow-500" />
            <h2 className="text-lg font-semibold">Trip Stats</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li>Total Trips Planned: 0</li>
            <li>Favorite Destination: —</li>
            <li>Most Frequent Travel Style: —</li>
          </ul>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="text-gray-700" />
            <h2 className="text-lg font-semibold">Preferences</h2>
          </div>
          <p className="text-sm text-gray-600">Update your profile and travel preferences.</p>
        </div>
      </div>
    </div>
  );
}


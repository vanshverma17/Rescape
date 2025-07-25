import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Welcome to <span className="text-blue-600">Rescape</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Your AI-powered travel planner. Enter your dream destination, and let
          Rescape craft the perfect itinerary and recommend amazing stays just
          for you.
        </p>

        <Link to="/trip">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300 shadow-lg">
            Plan My Trip ✈️
          </button>
        </Link>
      </div>
    </section>
  );
}

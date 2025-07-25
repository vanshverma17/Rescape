import { useState } from "react";
import { Sparkle } from "lucide-react";

export default function TripForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, days, interests });
    // TODO: Send to backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <form
        className="bg-white shadow-lg rounded-2xl p-8 max-w-xl mx-auto space-y-6 border"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-2 text-blue-700">
          <Sparkle />
          <h1 className="text-3xl font-bold">Plan Your Trip</h1>
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Destination
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="e.g. Bali, Tokyo, Goa"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Days */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">
            Trip Duration (in days)
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            min="1"
            value={days}
            onChange={(e) => setDays(parseInt(e.target.value))}
          />
        </div>

        {/* Interests */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Select Interests
          </label>
          <div className="flex gap-2 flex-wrap">
            {["Nature", "Culture", "Food", "Adventure", "Relaxation"].map((interest) => (
              <button
                type="button"
                key={interest}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  interests.includes(interest)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-50"
                }`}
                onClick={() =>
                  setInterests((prev) =>
                    prev.includes(interest)
                      ? prev.filter((i) => i !== interest)
                      : [...prev, interest]
                  )
                }
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
          >
            Generate Itinerary
          </button>
        </div>
      </form>
    </div>
  );
}

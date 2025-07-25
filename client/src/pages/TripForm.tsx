import { useState } from "react";

export default function TripForm() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [interests, setInterests] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ destination, days, interests });
    // Later: Send to backend
  };

  return (
    <form className="p-6 max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Plan Your Trip</h1>

      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        className="w-full p-2 border rounded"
        type="number"
        placeholder="Days"
        value={days}
        onChange={(e) => setDays(parseInt(e.target.value))}
      />

      <div>
        <label className="font-semibold">Select Interests:</label>
        <div className="flex gap-2 mt-2 flex-wrap">
          {["Nature", "Culture", "Food", "Adventure", "Relaxation"].map((interest) => (
            <button
              type="button"
              key={interest}
              className={`px-3 py-1 border rounded-full ${
                interests.includes(interest) ? "bg-blue-500 text-white" : "bg-gray-200"
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

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Itinerary
      </button>
    </form>
  );
}

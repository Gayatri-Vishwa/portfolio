import { useState } from "react";

export default function AchievementCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 border rounded-lg text-center">
      
      <h3 className="text-xl font-semibold">Hackathon - 2nd Position</h3>

      <button
        onClick={() => setOpen(true)}
        className="mt-3 px-4 py-2 bg-purple-600 text-white rounded"
      >
        View Certificate
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          
          <div className="bg-white p-4 rounded-lg relative">
            
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-black"
            >
              ✖
            </button>

            <img
              src="/certificate.jpg"
              alt="certificate"
              className="max-w-md"
            />

          </div>

        </div>
      )}
    </div>
  );
}
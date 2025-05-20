import * as React from 'react';
import { useEffect, useState } from "react";

export default function Predictions() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetch("predictions.json")
      .then((res) => res.json())
      .then((data) => setPredictions(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Match Predictions</h1>
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Team</th>
            <th className="px-4 py-2">Opponent</th>
            <th className="px-4 py-2">Actual</th>
            <th className="px-4 py-2">Predicted</th>
            <th className="px-4 py-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((match) => (
            <tr key={match.index} className="border-t">
              <td className="px-4 py-2">{match.date}</td>
              <td className="px-4 py-2">{match.team_x}</td>
              <td className="px-4 py-2">{match.opponent_x}</td>
              <td className="px-4 py-2">{match.actual_x}</td>
              <td className="px-4 py-2">{match.predicted_x}</td>
              <td className="px-4 py-2">{match.result_x}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

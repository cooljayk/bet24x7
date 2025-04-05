import { useState } from 'react';
export default function AdminDashboard() {
  const [gameWinRates, setGameWinRates] = useState({
    slotMachine: 50, blackjack: 50, poker: 50, roulette: 50,
    diceRoll: 50, coinFlip: 50, colorPrediction: 50, aviator: 50, ludo: 50
  });
  const handleGameChange = (game, value) => {
    setGameWinRates((prev) => ({ ...prev, [game]: value }));
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="mt-4 bg-white shadow p-4 rounded">
        <h2 className="font-bold">Game-Specific Win Rates</h2>
        {Object.keys(gameWinRates).map((game) => (
          <div key={game} className="mb-2">
            <label>{game}</label>
            <input type="range" min="0" max="100" value={gameWinRates[game]} onChange={(e) => handleGameChange(game, e.target.value)} /> {gameWinRates[game]}%
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from 'react';
export default function LudoGame() {
  const [players, setPlayers] = useState(2);
  const [betAmount, setBetAmount] = useState(0);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ludo Game</h1>
      <label>Players:
        <select className="ml-2 p-1 border" value={players} onChange={(e) => setPlayers(Number(e.target.value))}>
          <option value={2}>2</option>
          <option value={4}>4</option>
        </select>
      </label>
      <input type="number" placeholder="Enter bet amount" value={betAmount} onChange={(e) => setBetAmount(e.target.value)} className="p-2 border rounded mt-2 block" />
      <button className="bg-blue-500 text-white p-2 rounded mt-4">Start Game</button>
    </div>
  );
}
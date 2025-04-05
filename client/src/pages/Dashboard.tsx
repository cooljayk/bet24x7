import { useEffect, useState } from 'react';
export default function DashboardPage() {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch('/api/wallet/balance').then(res => res.json()).then(data => setBalance(data.balance));
    fetch('/api/wallet/history').then(res => res.json()).then(data => setHistory(data));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">Coin Balance: {balance}</div>
        <div className="bg-white shadow rounded p-4">Daily Bonus: <button className="bg-yellow-400 px-2 py-1 rounded">Claim</button></div>
        <div className="bg-white shadow rounded p-4"><h2 className="font-bold">Leaderboard</h2><ul><li>User1 - 12000</li><li>User2 - 8500</li></ul></div>
      </div>
      <div className="mt-6"><h2 className="text-xl font-bold mb-2">Bet History</h2>
        <ul className="bg-white p-4 shadow rounded">{history.map((entry, i) => (
          <li key={i}>Game: {entry.game}, Amount: {entry.amount}, Result: {entry.result}</li>
        ))}</ul>
      </div>
    </div>
  );
}
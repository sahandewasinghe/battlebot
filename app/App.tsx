import { PlayerCard } from './components/PlayerCard';
import { Trophy, Users, Swords, Zap, Target } from 'lucide-react';

export default function App() {
  const player1 = {
    name: "Range Bot",
    avatar: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop",
    botNumber: 1,
    health: 850,
    maxHealth: 1000,
    range: 150,
    accuracy: 92,
    fireRate: 3.5,
    energy: 65,
    ultimatePower: {
      name: "Precision Strike",
      isReady: true,
    }
  };

  const player2 = {
    name: "Tank Bot",
    avatar: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=400&fit=crop",
    botNumber: 2,
    health: 720,
    maxHealth: 1000,
    range: 180,
    accuracy: 88,
    fireRate: 2.8,
    energy: 52,
    ultimatePower: {
      name: "Shield Fortress",
      isReady: false,
      cooldownTime: 12,
      maxCooldown: 30,
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-gray-100 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Target className="h-10 w-10 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Range Bot
            </h1>
            <Target className="h-10 w-10 text-orange-600" />
          </div>
          <p className="text-gray-600 text-lg">
            Long-Distance Combat Status
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Battle Status</p>
                <p className="text-2xl font-bold">LIVE</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Round</p>
                <p className="text-2xl font-bold">3 of 5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Player Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <PlayerCard {...player1} />
          </div>
          <div className="flex justify-center">
            <PlayerCard {...player2} />
          </div>
        </div>
      </div>
    </div>
  );
}
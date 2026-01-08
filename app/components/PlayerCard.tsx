import { User, Trophy, Target, Zap, Shield, Swords, Crosshair, Sparkles, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface UltimatePower {
  name: string;
  isReady: boolean;
  cooldownTime?: number;
  maxCooldown?: number;
}

interface PlayerCardProps {
  name: string;
  avatar: string;
  botNumber: number;
  health: number;
  maxHealth: number;
  range: number;
  accuracy: number;
  fireRate: number;
  energy: number;
  ultimatePower: UltimatePower;
}

export function PlayerCard({ name, avatar, botNumber, health, maxHealth, range, accuracy, fireRate, energy, ultimatePower }: PlayerCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');
  const healthPercentage = (health / maxHealth) * 100;
  const isLowHealth = healthPercentage < 30;
  const isMediumHealth = healthPercentage >= 30 && healthPercentage < 60;

  const cooldownPercentage = ultimatePower.cooldownTime && ultimatePower.maxCooldown 
    ? ((ultimatePower.maxCooldown - ultimatePower.cooldownTime) / ultimatePower.maxCooldown) * 100 
    : 100;

  return (
    <Card className="w-full max-w-md border-2">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              {name}
              <Crosshair className="h-5 w-5 text-orange-500" />
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Target className="h-3 w-3" />
                Range Bot #{botNumber}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Health Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-500" />
              Health Points
            </span>
            <span className="text-sm font-bold">
              {health}/{maxHealth}
            </span>
          </div>
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden border-2 border-gray-300">
            <div
              className={`h-full transition-all ${
                isLowHealth 
                  ? 'bg-red-500' 
                  : isMediumHealth 
                  ? 'bg-yellow-500' 
                  : 'bg-green-500'
              }`}
              style={{ width: `${healthPercentage}%` }}
            />
          </div>
        </div>

        {/* Ultimate Power */}
        <div className={`p-4 rounded-lg border-2 ${
          ultimatePower.isReady 
            ? 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-400 shadow-lg' 
            : 'bg-gray-100 border-gray-300'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className={`h-5 w-5 ${ultimatePower.isReady ? 'text-purple-600 animate-pulse' : 'text-gray-400'}`} />
              <span className="font-bold text-sm">
                {ultimatePower.name}
              </span>
            </div>
            {ultimatePower.isReady ? (
              <Badge className="bg-green-500 text-white">READY!</Badge>
            ) : (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Clock className="h-3 w-3" />
                <span>{ultimatePower.cooldownTime}s</span>
              </div>
            )}
          </div>
          {!ultimatePower.isReady && ultimatePower.maxCooldown && (
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 transition-all"
                style={{ width: `${cooldownPercentage}%` }}
              />
            </div>
          )}
        </div>

      </CardContent>
    </Card>
  );
}

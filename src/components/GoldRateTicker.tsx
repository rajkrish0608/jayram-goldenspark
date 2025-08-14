import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Bell } from 'lucide-react';

interface GoldRate {
  metal: string;
  rate: number;
  change: number;
  unit: string;
}

const GoldRateTicker = () => {
  const [goldRates, setGoldRates] = useState<GoldRate[]>([
    { metal: '24K Gold', rate: 6420, change: +25, unit: '₹/10g' },
    { metal: '22K Gold', rate: 5885, change: +23, unit: '₹/10g' },
    { metal: 'Silver', rate: 785, change: -12, unit: '₹/10g' },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate live rate updates (in real app, this would be API call)
      setGoldRates(prev => prev.map(rate => ({
        ...rate,
        change: rate.change + (Math.random() - 0.5) * 2
      })));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="gold-ticker">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">LIVE RATES</span>
            </div>
            <span className="text-xs opacity-80">
              Updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {goldRates.map((rate, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="font-semibold">{rate.metal}:</span>
                <span className="text-lg font-bold">{rate.rate.toLocaleString()}</span>
                <span className="text-xs">{rate.unit}</span>
                <div className={`flex items-center space-x-1 ${
                  rate.change >= 0 ? 'text-green-300' : 'text-red-300'
                }`}>
                  {rate.change >= 0 ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  <span className="text-xs font-medium">
                    {rate.change >= 0 ? '+' : ''}{rate.change.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300">
            <Bell size={16} />
            <span className="text-sm font-medium">Set Price Alert</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoldRateTicker;
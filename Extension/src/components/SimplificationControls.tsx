import React from 'react';
import { Sliders } from 'lucide-react';
import { SimplificationControlsProps } from '../types';

const SimplificationControls: React.FC<SimplificationControlsProps> = ({
  level,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="p-1.5 bg-purple-500/20 rounded-md">
          <Sliders className="w-4 h-4 text-purple-400" />
        </div>
        <h3 className="text-sm font-medium text-purple-200">Simplification Level</h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['basic', 'moderate', 'detailed'].map((option) => (
          <button
            key={option}
            onClick={() => onChange(option as SimplificationControlsProps['level'])}
            className={`
              relative group overflow-hidden rounded-lg
              px-3 py-2 text-sm font-medium
              transition-all duration-300 transform hover:scale-105
              ${level === option
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-800 text-purple-200 border border-purple-500/20 hover:border-purple-400/30 hover:shadow-md'
              }
            `}
          >
            <div className="relative z-10">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
            {level !== option && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimplificationControls;
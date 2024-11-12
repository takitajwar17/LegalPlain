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
        <div className="p-1.5 bg-indigo-100 rounded-md">
          <Sliders className="w-4 h-4 text-indigo-600" />
        </div>
        <h3 className="text-sm font-medium text-gray-700">Simplification Level</h3>
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
                ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:shadow-md'
              }
            `}
          >
            <div className="relative z-10">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
            {level !== option && (
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimplificationControls;
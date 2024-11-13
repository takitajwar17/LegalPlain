import React from 'react';
import { Languages } from 'lucide-react';
import { LanguageSelectorProps } from '../types';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selected,
  onChange,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="p-1.5 bg-purple-500/20 rounded-md">
          <Languages className="w-4 h-4 text-purple-400" />
        </div>
        <h3 className="text-sm font-medium text-purple-200">Target Language</h3>
      </div>
      <div className="relative">
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-purple-500/20 bg-gray-800 px-4 py-2.5 text-sm text-purple-200
            transition-all duration-300
            focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
            hover:border-purple-400/30 cursor-pointer"
        >
          {languages.map(({ code, name }) => (
            <option key={code} value={code} className="bg-gray-800">
              {name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Languages className="w-4 h-4 text-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
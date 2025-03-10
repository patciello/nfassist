import React from 'react';
import { Range } from '../types';

interface RangeSelectorProps {
  ranges: Range[];
  selectedRange?: string;
  onRangeSelect: (rangeId: string) => void;
}

export const RangeSelector: React.FC<RangeSelectorProps> = ({
  ranges,
  selectedRange,
  onRangeSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Number Ranges</h3>
      <div className="space-y-2">
        {ranges.map((range) => (
          <button
            key={range.id}
            onClick={() => onRangeSelect(range.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              selectedRange === range.id
                ? 'bg-blue-50 text-blue-700'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="font-medium">{range.label}</div>
            <div className="text-sm text-gray-500">
              {range.start} - {range.end}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
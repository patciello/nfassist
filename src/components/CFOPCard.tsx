import React, { useState } from 'react';
import { CFOP } from '../types';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface CFOPCardProps {
  cfop: CFOP;
}

export const CFOPCard: React.FC<CFOPCardProps> = ({ cfop }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (cfop.application) {
      setIsExpanded(!isExpanded);
    }
  };

  const showExpandedContent = isExpanded && cfop.application;

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all ${
        showExpandedContent ? 'col-span-full' : ''
      }`}
      onClick={cfop.application ? toggleExpand : undefined}
      style={{ cursor: cfop.application ? 'pointer' : 'default' }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cfop.code}</span>
                <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                  cfop.category === 'ENTRADA' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                  cfop.category === 'SAIDA' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                  'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                }`}>
                  {cfop.category}
                </span>
              </div>
              {cfop.application && (
                <button 
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand();
                  }}
                >
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              )}
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{cfop.description}</h3>
            
            {showExpandedContent && (
              <div className="mt-4 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div>
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Aplicação</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {cfop.application}
                  </p>
                </div>
              </div>
            )}

            {cfop.notes && (
              <div className="mt-4 flex items-start space-x-2">
                <FileText className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-500 dark:text-gray-400">{cfop.notes}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            {cfop.type}
          </span>
        </div>
      </div>
    </div>
  );
};
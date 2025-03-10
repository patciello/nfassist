import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { CFOPCard } from './components/CFOPCard';
import { ThemeToggle } from './components/ThemeToggle';
import { CFOPCategory, CFOPType } from './types';
import { cfopData } from './data/cfopData';
import { Search, BookOpen } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CFOPCategory>();
  const [selectedType, setSelectedType] = useState<CFOPType>();

  const filteredCFOPs = useMemo(() => {
    let filtered = [...cfopData];

    if (selectedType) {
      filtered = filtered.filter(cfop => cfop.type === selectedType);
    }

    if (selectedCategory) {
      filtered = filtered.filter(cfop => cfop.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(cfop => 
        cfop.code.toLowerCase().includes(query) ||
        cfop.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                NfAssist
              </span>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Buscar CFOP
            </h2>
            <div className="space-y-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
              />
              <FilterBar
                selectedCategory={selectedCategory}
                selectedType={selectedType}
                onCategoryChange={setSelectedCategory}
                onTypeChange={setSelectedType}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCFOPs.map((cfop, index) => (
              <CFOPCard 
                key={`${cfop.code}-${cfop.category}-${cfop.type}-${index}`} 
                cfop={cfop} 
              />
            ))}
            {filteredCFOPs.length === 0 && (
              <div className="col-span-full text-center py-12">
                <Search className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nenhum CFOP encontrado
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Tente ajustar seus filtros ou termo de busca.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
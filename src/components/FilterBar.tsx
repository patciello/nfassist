import React from 'react';
import { CFOPCategory, CFOPType } from '../types';

interface FilterBarProps {
  selectedCategory?: CFOPCategory;
  selectedType?: CFOPType;
  onCategoryChange: (category?: CFOPCategory) => void;
  onTypeChange: (type?: CFOPType) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedType,
  onCategoryChange,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
      <div className="flex-1">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Categoria
        </label>
        <select
          id="category"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md transition-colors"
          value={selectedCategory || ''}
          onChange={(e) => {
            const value = e.target.value as CFOPCategory | '';
            onCategoryChange(value || undefined);
          }}
        >
          <option value="">Todas as Categorias</option>
          <option value="ENTRADA">Entrada</option>
          <option value="SAIDA">Saída</option>
          <option value="DENTRO_ESTADO">Dentro do Estado</option>
          <option value="FORA_ESTADO">Fora do Estado</option>
          <option value="EXTERIOR">Exterior</option>
        </select>
      </div>

      <div className="flex-1">
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Tipo
        </label>
        <select
          id="type"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md transition-colors"
          value={selectedType || ''}
          onChange={(e) => {
            const value = e.target.value as CFOPType | '';
            onTypeChange(value || undefined);
          }}
        >
          <option value="">Todos os Tipos</option>
          <option value="VENDA">Venda</option>
          <option value="COMPRA">Compra</option>
          <option value="TRANSFERENCIA">Transferência</option>
          <option value="DEVOLUCAO">Devolução</option>
          <option value="REMESSA">Remessa</option>
          <option value="RETORNO">Retorno</option>
        </select>
      </div>
    </div>
  );
};
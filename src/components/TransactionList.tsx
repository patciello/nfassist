import React from 'react';
import { Transaction } from '../types';
import { formatDate } from '../utils/dateUtils';
import { 
  Table,
  ArrowUpDown,
  Search,
  FileDown,
  FileUp
} from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
  onSort: (field: keyof Transaction) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onSort,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="border-none focus:ring-2 focus:ring-blue-500 rounded-md"
          />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-3 py-2 text-sm bg-green-50 text-green-700 rounded-md hover:bg-green-100">
            <FileUp className="w-4 h-4 mr-2" />
            Import
          </button>
          <button className="flex items-center px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
            <FileDown className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
              onClick={() => onSort('date')}
            >
              <div className="flex items-center">
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Item ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Range
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {formatDate(transaction.date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.itemId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {transaction.rangeId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
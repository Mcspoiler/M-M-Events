import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Trash2, Plus, TrendingUp } from 'lucide-react';
import { BudgetCategory } from '../../types';
import { mockBudgetCategories } from '../../data/planningData';

const COLORS = ['#d97706', '#f59e0b', '#fbbf24', '#fcd34d', '#ca8a04', '#b45309', '#92400e'];

export default function BudgetPlanner() {
  const [budget, setBudget] = useState<BudgetCategory[]>(mockBudgetCategories);
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [budgetLimit, setBudgetLimit] = useState(2000000); // KES

  const totalBudget = budget.reduce((sum, cat) => sum + cat.amount, 0);
  const remaining = budgetLimit - totalBudget;
  const percentSpent = Math.round((totalBudget / budgetLimit) * 100);

  const addBudgetItem = () => {
    if (newCategory.trim() && newAmount) {
      const amount = parseFloat(newAmount);
      const newData = [...budget];
      newData.push({
        category: newCategory,
        amount: amount,
        percentage: 0
      });
      
      // Recalculate percentages
      const total = newData.reduce((sum, cat) => sum + cat.amount, 0);
      newData.forEach(cat => {
        cat.percentage = (cat.amount / total) * 100;
      });
      
      setBudget(newData);
      setNewCategory('');
      setNewAmount('');
    }
  };

  const removeBudgetItem = (index: number) => {
    const newData = budget.filter((_, i) => i !== index);
    const total = newData.reduce((sum, cat) => sum + cat.amount, 0);
    newData.forEach(cat => {
      cat.percentage = (cat.amount / total) * 100;
    });
    setBudget(newData);
  };

  const updateAmount = (index: number, newAmount: number) => {
    const newData = [...budget];
    newData[index].amount = newAmount;
    const total = newData.reduce((sum, cat) => sum + cat.amount, 0);
    newData.forEach(cat => {
      cat.percentage = (cat.amount / total) * 100;
    });
    setBudget(newData);
  };

  const chartData = budget.map(cat => ({
    name: cat.category,
    value: cat.amount
  }));

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Budget Planner</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart Section */}
        <div className="flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: KES ${value.toLocaleString()}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {budget.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `KES ${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 rounded-xl p-4">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-amber-700 font-semibold uppercase">Total Budget</p>
                <p className="text-3xl font-bold text-amber-900">KES {budgetLimit.toLocaleString()}</p>
              </div>
              
              <div className="border-t border-amber-200 pt-3">
                <p className="text-xs text-amber-600 font-medium flex justify-between mb-2">
                  <span>Total Spent</span>
                  <span className="font-bold">KES {totalBudget.toLocaleString()}</span>
                </p>
                <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-full transition-all"
                    style={{ width: `${percentSpent}%` }}
                  />
                </div>
                <p className="text-xs text-amber-600 font-medium mt-1">{percentSpent}% spent</p>
              </div>

              <div className="border-t border-amber-200 pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-amber-700 font-semibold">Remaining</p>
                    <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      KES {remaining.toLocaleString()}
                    </p>
                  </div>
                  {remaining < 0 && (
                    <TrendingUp className="h-8 w-8 text-red-500 rotate-45" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Budget Limit Control */}
          <div className="border-t border-slate-100 pt-4">
            <label className="text-xs font-semibold text-slate-400 uppercase block mb-2">
              Set Budget Limit
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={budgetLimit}
                onChange={(e) => setBudgetLimit(parseFloat(e.target.value) || 0)}
                className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
              />
              <span className="px-3 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg">
                Max
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Budget Items List */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Budget Categories</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
          {budget.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg group">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[idx % COLORS.length] }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700">{item.category}</p>
                <p className="text-xs text-slate-500">{item.percentage.toFixed(1)}% of total</p>
              </div>
              <input
                type="number"
                value={item.amount}
                onChange={(e) => updateAmount(idx, parseFloat(e.target.value) || 0)}
                className="w-24 px-2 py-1 border border-slate-200 rounded text-xs focus:outline-none focus:border-amber-500"
              />
              <span className="text-xs text-slate-600 font-medium">KES</span>
              <button
                onClick={() => removeBudgetItem(idx)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new budget item */}
        <div className="border-t border-slate-100 pt-4 space-y-3">
          <p className="text-xs font-semibold text-slate-400 uppercase">Add Budget Category</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category name..."
              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
            />
            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              placeholder="Amount..."
              className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={addBudgetItem}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

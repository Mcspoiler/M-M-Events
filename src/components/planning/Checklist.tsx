import { useState } from 'react';
import { CheckCircle2, Circle, Trash2, Plus } from 'lucide-react';
import { ChecklistItem } from '../../types';
import { mockChecklistItems } from '../../data/planningData';

export default function Checklist() {
  const [items, setItems] = useState<ChecklistItem[]>(mockChecklistItems);
  const [newItem, setNewItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newCategory, setNewCategory] = useState('Planning');

  const categories = ['All', 'Venue', 'Catering', 'Decor', 'Services', 'Entertainment', 'Transportation', 'Guests', 'Planning'];
  
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: Date.now().toString(),
        text: newItem,
        category: newCategory,
        checked: false
      }]);
      setNewItem('');
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const completedCount = items.filter(item => item.checked).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900">Planning Checklist</h2>
          <div className="text-right">
            <div className="text-3xl font-bold text-amber-600">{completedCount}/{items.length}</div>
            <div className="text-xs text-slate-500">tasks complete</div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 to-amber-600 h-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="text-xs text-slate-500 mt-2">{progressPercent}% complete</div>
      </div>

      {/* Category filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Checklist items */}
      <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex-shrink-0 focus:outline-none"
            >
              {item.checked ? (
                <CheckCircle2 className="h-5 w-5 text-amber-600" />
              ) : (
                <Circle className="h-5 w-5 text-slate-300 group-hover:text-amber-400" />
              )}
            </button>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${item.checked ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                {item.text}
              </p>
              <p className="text-xs text-slate-400">{item.category}</p>
            </div>
            
            <button
              onClick={() => removeItem(item.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded"
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Add new item */}
      <div className="border-t border-slate-100 pt-4 space-y-3">
        <p className="text-xs font-semibold text-slate-400 uppercase">Add New Task</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Task description..."
            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500"
          >
            {categories.filter(c => c !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={addItem}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

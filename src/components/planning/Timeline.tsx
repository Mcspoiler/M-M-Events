import { useState } from 'react';
import { Clock, GripVertical, Trash2 } from 'lucide-react';
import { TimelineMilestone } from '../../types';
import { mockTimeline } from '../../data/planningData';

export default function Timeline() {
  const [milestones, setMilestones] = useState<TimelineMilestone[]>(mockTimeline);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newMilestones = [...milestones];
    const draggedItem = newMilestones[draggedIndex];
    newMilestones.splice(draggedIndex, 1);
    newMilestones.splice(index, 0, draggedItem);
    
    setDraggedIndex(index);
    setMilestones(newMilestones);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const removeMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-lg p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Event Timeline</h2>
        <p className="text-sm text-slate-600">Drag to reorder milestones. Click to view details.</p>
      </div>

      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`group relative transition-all ${
              draggedIndex === index ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
              
              {/* Drag handle */}
              <div className="flex-shrink-0 pt-1">
                <button className="p-1 text-slate-300 hover:text-amber-600 transition-colors cursor-grab active:cursor-grabbing">
                  <GripVertical className="h-5 w-5" />
                </button>
              </div>

              {/* Timeline dot and line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 ring-4 ring-amber-50" />
                {index < milestones.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-amber-200 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        {milestone.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {milestone.desc}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeMilestone(index)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add new milestone */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <button
          onClick={() => setMilestones([
            ...milestones,
            {
              time: 'New milestone',
              title: 'Add title',
              desc: 'Add description'
            }
          ])}
          className="w-full px-4 py-3 border-2 border-dashed border-amber-200 rounded-xl hover:bg-amber-50 transition-colors text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          + Add Milestone
        </button>
      </div>

      {/* Timeline progress indicator */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-slate-400 uppercase">Timeline Progress</p>
          <p className="text-xs font-bold text-slate-900">45%</p>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all"
            style={{ width: '45%' }}
          />
        </div>
      </div>
    </div>
  );
}

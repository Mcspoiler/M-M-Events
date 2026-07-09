export interface EventTypeData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  checked: boolean;
}

export interface TimelineMilestone {
  time: string;
  title: string;
  desc: string;
}

export interface BudgetCategory {
  category: string;
  amount: number;
  percentage: number;
}

export interface EventBlueprint {
  name: string;
  invitationText: string;
  timeline: TimelineMilestone[];
  checklist: ChecklistItem[];
  budget: BudgetCategory[];
}

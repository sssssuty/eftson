import {
  Clock, Square, Circle, CircleCheck, Star,
} from 'lucide-react';

const STATUS_META = {
  New: { icon: Clock, tone: 'new' },
  Closed: { icon: Square, tone: 'closed' },
  'In Progress': { icon: Circle, tone: 'progress' },
  Completed: { icon: Circle, tone: 'completed' },
  Approved: { icon: CircleCheck, tone: 'approved' },
  AI: { icon: Star, tone: 'ai' },
  Paid: { icon: CircleCheck, tone: 'paid' },
};

export default function TableStatus({ value }) {
  const meta = STATUS_META[value] || { icon: Circle, tone: 'default' };
  const Icon = meta.icon;
  return (
    <span className={`table-status is-${meta.tone}`}>
      <Icon size={14} aria-hidden="true" />
      <span>{value}</span>
    </span>
  );
}

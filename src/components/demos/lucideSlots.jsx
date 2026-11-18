import {
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Eye,
  EyeOff,
  Inbox,
  Search,
  X,
} from 'lucide-react';

/** Shared Lucide icons for Ant Design molecule slots (Icon gallery). */
export const lucideSlots = {
  calendar: <Calendar size={14} aria-hidden="true" />,
  chevronDown: <ChevronDown size={14} aria-hidden="true" />,
  chevronLeft: <ChevronLeft size={14} aria-hidden="true" />,
  chevronRight: <ChevronRight size={14} aria-hidden="true" />,
  search: <Search size={14} aria-hidden="true" />,
  clear: <X size={12} aria-hidden="true" />,
  close: <X size={14} aria-hidden="true" />,
  closeSm: <X size={12} aria-hidden="true" />,
  eye: <Eye size={14} aria-hidden="true" />,
  eyeOff: <EyeOff size={14} aria-hidden="true" />,
  success: <CircleCheck size={16} aria-hidden="true" />,
  warning: <CircleAlert size={16} aria-hidden="true" />,
  empty: <Inbox size={48} aria-hidden="true" strokeWidth={1.25} />,
  check: <Check size={14} aria-hidden="true" />,
};

export function passwordIcon(visible) {
  return visible ? lucideSlots.eye : lucideSlots.eyeOff;
}

export function paginationItemRender(_, type, original) {
  if (type === 'prev') return lucideSlots.chevronLeft;
  if (type === 'next') return lucideSlots.chevronRight;
  return original;
}

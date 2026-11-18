export const designGroups = [
  { title: 'Eftson Design', items: ['Introduction', 'Design Values', 'Cases'] },
  { title: 'Global Styles', items: ['Colors', 'Layout', 'Font', 'Icons', 'Shadow'] },
  { title: 'Design Patterns', items: ['Overview', 'Global Rules', 'Feedback', 'Navigation', 'Data Entry', 'Data Display', 'Copywriting', 'Data format', 'Button', 'Data List'] },
  { title: 'Principles', items: ['Proximity', 'Alignment', 'Contrast', 'Repetition', 'Make it Direct', 'Stay on the Page', 'Keep it Lightweight', 'Provide an Invitation', 'Use Transition', 'React Immediately'] },
  { title: 'Template Document', items: ['Visualization Page', 'Detail Page'] },
  { title: 'Design Patterns (Research)', items: ['Overview', 'Template Document', 'Form Page', 'Workbench', 'List Page', 'Result Page', 'Exception Page', 'Global Rules', 'Navigation', 'Message and Feedback', 'Empty Status', 'Visualization'] },
  { title: 'Motion', items: ['Motion'] },
  { title: 'Illustrations', items: ['Illustrations'] },
];

export const designSlugs = {
  Introduction: 'introduce',
  'Design Values': 'values',
  Cases: 'cases',
  Colors: 'colors',
  Layout: 'layout',
  Font: 'font',
  Icons: 'icons',
  Shadow: 'shadow',
  Overview: 'overview',
  'Global Rules': 'rules',
  Feedback: 'feedback',
  Navigation: 'navigation',
  'Data Entry': 'data-entry',
  'Data Display': 'data-display',
  Copywriting: 'copywriting',
  'Data format': 'data-format',
  Button: 'buttons',
  'Data List': 'data-list',
  Proximity: 'proximity',
  Alignment: 'alignment',
  Contrast: 'contrast',
  Repetition: 'repetition',
  'Make it Direct': 'direct',
  'Stay on the Page': 'stay',
  'Keep it Lightweight': 'lightweight',
  'Provide an Invitation': 'invitation',
  'Use Transition': 'transition',
  'React Immediately': 'react',
  'Visualization Page': 'visualization-template',
  'Detail Page': 'detail-page',
  'Template Document': 'template',
  'Form Page': 'form-page',
  Workbench: 'workbench',
  'List Page': 'list-page',
  'Result Page': 'result-page',
  'Exception Page': 'exception-page',
  'Message and Feedback': 'message-feedback',
  'Empty Status': 'empty',
  Visualization: 'visual',
  Motion: 'motion',
  Illustrations: 'illustration',
};

export const designCopy = {
  'Design Values': ['Natural', 'Certain', 'Meaningful', 'Growing'],
  'Global Rules': ['Keep it clear', 'Keep it consistent', 'Respect the user', 'Make progress visible'],
  Overview: ['Efficiency', 'Clarity', 'Consistency', 'Adaptability'],
  Feedback: ['Success', 'Information', 'Warning', 'Error'],
  Navigation: ['Know where you are', 'Know where you can go', 'Move with confidence', 'Preserve context'],
  'Data Entry': ['Good defaults', 'Timely validation', 'Forgiving inputs', 'Clear completion'],
  'Data Display': ['Prioritize meaning', 'Support scanning', 'Reveal detail progressively', 'Keep comparisons aligned'],
  Proximity: ['Related items belong together', 'Spacing communicates relationships', 'Groups reduce cognitive load'],
  Alignment: ['Create a visual axis', 'Prefer intentional edges', 'Use grids to reveal structure'],
  Contrast: ['Lead attention', 'Make hierarchy visible', 'Reserve emphasis for what matters'],
  Repetition: ['Reuse patterns', 'Reinforce recognition', 'Build a coherent rhythm'],
};

export function designDescription(title, group) {
  const map = {
    Cases: 'Examples of Eftson Design in complex, real-world healthcare products.',
    Layout: 'Create stable page structures with consistent grids, spacing, and responsive behavior.',
    Icons: 'Use clear, geometric symbols to communicate actions and status at a glance.',
    Copywriting: 'Write concise interface language that helps people act with confidence.',
    'Data format': 'Format numbers, dates, time, and structured values consistently across products.',
    Button: 'Choose button hierarchy and placement according to the importance of the action.',
    'Data List': 'Organize repeated data so users can scan, compare, and act efficiently.',
    'Make it Direct': 'Reduce layers between intent and action so the interface feels immediate.',
    'Stay on the Page': 'Preserve context and let people complete related work without unnecessary navigation.',
    'Keep it Lightweight': 'Use the lightest interaction that fully supports the task.',
    'Provide an Invitation': 'Make possible actions visible through useful cues and affordances.',
    'Use Transition': 'Use motion to explain relationships and changes in state.',
    'React Immediately': 'Acknowledge every user action promptly and clearly.',
  };
  return map[title] || `${title} guidance for designing clear, consistent, and efficient healthcare experiences within ${group}.`;
}

export function principleDescription(title) {
  return `Use ${title.toLowerCase()} to reduce ambiguity, strengthen hierarchy, and help people understand the next useful action.`;
}

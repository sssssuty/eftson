import { componentNav, flattenNavNames } from './componentNav.js';

export { componentNav, flattenNavNames, navGroupForComponent } from './componentNav.js';

export const allComponents = flattenNavNames(componentNav);

export const componentGroups = [
  {
    title: 'Inputs',
    items: ['Chip', 'Date Picker', 'Filter Item', 'Input', 'Radio Selection', 'Slider', 'Toggle'],
  },
  {
    title: 'Data display',
    items: [
      'Card', 'Data Grid', 'Data Grid Cell', 'Data Table', 'Data Table Cell',
      'Data Visualization Axis', 'Display Form Text', 'Progress', 'Progress Indicator',
      'Quick Info', 'Text Paragraph',
    ],
  },
  {
    title: 'Navigation',
    items: ['Dropdown Menu', 'Filter Bar & Dropdown Menu', 'Footer', 'Navigation', 'Navigation Profile', 'Page Header', 'Pagination', 'Tabs'],
  },
  {
    title: 'Feedback',
    items: ['Message', 'Popup Window', 'Tooltips', 'Warning Banner'],
  },
  {
    title: 'Patterns',
    items: [
      'Conversational AI', 'Form List', 'Form List Row & Section', 'Log In', 'Upload & Download',
    ],
  },
];

export const componentSlugs = {
  'Conversational AI': 'conversational-ai',
  'Data Grid': 'data-grid',
  'Data Grid Cell': 'data-grid-cell',
  'Data Table': 'data-table',
  'Data Table Cell': 'data-table-cell',
  'Data Visualization Axis': 'data-visualization-axis',
  'Date Picker': 'date-picker',
  'Display Form Text': 'display-form-text',
  'Dropdown Menu': 'dropdown-menu',
  'Filter Bar & Dropdown Menu': 'filter-bar-dropdown-menu',
  'Filter Item': 'filter-item',
  'Form List': 'form-list',
  'Form List Row & Section': 'form-list-row-section',
  'Log In': 'log-in',
  'Navigation Profile': 'navigation-profile',
  'Page Header': 'page-header',
  'Popup Window': 'popup-window',
  'Progress Indicator': 'progress-indicator',
  'Quick Info': 'quick-info',
  'Radio Selection': 'radio-selection',
  'Text Paragraph': 'text-paragraph',
  'Upload & Download': 'upload-download',
  'Warning Banner': 'warning-banner',
};

/** Old Ant Design / prior docs URLs → canonical Figma titles */
export const slugRedirects = {
  table: 'Data Table',
  'table-cell': 'Data Table Cell',
  'table-body': 'Data Table',
  'table-header': 'Data Table Cell',
  'table-header-cell': 'Data Table Cell',
  'table-row': 'Data Table',
  dropdown: 'Dropdown Menu',
  'dropdown-menu': 'Dropdown Menu',
  'dropdown-menu-checkbox-item': 'Dropdown Menu',
  'dropdown-menu-divider': 'Dropdown Menu',
  'dropdown-menu-group': 'Dropdown Menu',
  'dropdown-menu-item': 'Dropdown Menu',
  'dropdown-menu-radio-group': 'Dropdown Menu',
  'dropdown-menu-radio-item': 'Dropdown Menu',
  'dropdown-menu-submenu': 'Dropdown Menu',
  switch: 'Toggle',
  tooltip: 'Tooltips',
  tooltips: 'Tooltips',
  alert: 'Warning Banner',
  modal: 'Popup Window',
  tag: 'Chip',
  upload: 'Upload & Download',
  datepicker: 'Date Picker',
  'date-picker': 'Date Picker',
  radio: 'Radio Selection',
  progress: 'Progress',
  card: 'Card',
  input: 'Input',
  slider: 'Slider',
  tabs: 'Tabs',
  pagination: 'Pagination',
  message: 'Message',
  button: 'Card',
};

export const componentDescriptions = {
  Card: 'Group related information and actions into a contained surface.',
  Chip: 'Compact label used to categorize, filter, or represent a selection.',
  'Conversational AI': 'Chat and assistant surfaces for guided healthcare workflows.',
  'Data Grid': 'Dense spreadsheet-style grid for structured operational data.',
  'Data Grid Cell': 'Atomic cell variants used inside a data grid.',
  'Data Table': 'Display rows of structured data with a branded header band and airy body.',
  'Data Table Cell': 'Header and content cells for text, actions, status, and embedded controls.',
  'Data Visualization Axis': 'Axis labels and scale treatments for charts and analytics.',
  'Date Picker': 'Choose a date or date range.',
  'Display Form Text': 'Read-only form field presentation for values and labels.',
  'Dropdown Menu': 'A menu revealed from a button or text trigger.',
  'Filter Bar & Dropdown Menu': 'Filter controls composed with dropdown menus for list refinement.',
  'Filter Item': 'A single filter chip or control inside a filter bar.',
  Footer: 'Page or app footer with secondary navigation and legal links.',
  'Form List': 'Stacked form sections for multi-field data entry.',
  'Form List Row & Section': 'Row and section building blocks inside a form list.',
  Input: 'A basic text input control.',
  'Log In': 'Authentication screen pattern for signing into Youlify products.',
  Message: 'Lightweight global feedback.',
  Navigation: 'Primary navigation for moving across product areas.',
  'Navigation Profile': 'Profile menu and account affordances in the app chrome.',
  'Page Header': 'Title, actions, and context for a product page.',
  Pagination: 'Split long data sets into pages.',
  'Popup Window': 'Modal dialog that focuses attention on a task or message.',
  Progress: 'Visualize the completion of an operation.',
  'Progress Indicator': 'Compact progress treatment for inline or cell contexts.',
  'Quick Info': 'Short explanatory content revealed near a trigger.',
  'Radio Selection': 'Choose a single value from a set of options.',
  Slider: 'Select a value across a continuous range.',
  Tabs: 'Switch between content in the same context.',
  'Text Paragraph': 'Body copy and supporting paragraph styles.',
  Toggle: 'Toggle between two states.',
  Tooltips: 'Explain an element on hover or focus.',
  'Upload & Download': 'Transfer files into or out of the product.',
  'Warning Banner': 'Surface an important warning without blocking the task.',
};

export const wideSpecimens = new Set([
  'Data Table',
  'Data Grid',
  'Form List',
  'Form List Row & Section',
  'Filter Bar & Dropdown Menu',
  'Upload & Download',
  'Conversational AI',
  'Log In',
  'Navigation',
  'Page Header',
]);

export function versionBadgeKind() {
  return null;
}

export const anatomyParts = {
  default: ['Root', 'Label', 'Icon', 'Content', 'Affordance'],
  'Data Table': ['Toolbar', 'Header', 'Row', 'Cell', 'Pagination'],
  'Data Table Cell': ['Container', 'Content', 'Affordance'],
  Input: ['Root', 'Prefix', 'Input field', 'Suffix', 'Clear'],
  'Dropdown Menu': ['Trigger', 'Menu', 'Item', 'Divider'],
  'Popup Window': ['Mask', 'Container', 'Header', 'Body', 'Footer'],
  'Warning Banner': ['Root', 'Icon', 'Title', 'Description', 'Close'],
  Tabs: ['List', 'Tab', 'Indicator', 'Panel'],
};

export const anatomyRows = {
  default: [
    ['Root', 'The outermost container for the component.'],
    ['Label', 'Primary visible text that names the control or content.'],
    ['Icon', 'Optional supporting glyph that reinforces meaning.'],
    ['Content', 'Main interactive or display region.'],
    ['Affordance', 'Secondary cue such as a chevron, badge, or spinner.'],
  ],
  'Data Table': [
    ['Toolbar', 'Optional actions and filters above the grid.'],
    ['Header', 'Column titles with gray band and vertical dividers.'],
    ['Row', 'A single record across columns.'],
    ['Cell', 'An individual value or control inside a row.'],
    ['Pagination', 'Controls for paging through large datasets.'],
  ],
  'Data Table Cell': [
    ['Container', 'Cell frame with padding and optional background state.'],
    ['Content', 'Text, control, or status content rendered in the cell.'],
    ['Affordance', 'Sort chevron, checkbox, or trailing action.'],
  ],
  Input: [
    ['Prefix', 'Leading adornment such as an icon or unit.'],
    ['Input field', 'Editable text region that receives keyboard input.'],
    ['Suffix', 'Trailing adornment such as an icon or action.'],
    ['Clear', 'Optional control that resets the field value.'],
  ],
  'Dropdown Menu': [
    ['Trigger', 'Control that opens the menu.'],
    ['Menu', 'Floating surface that holds menu items.'],
    ['Item', 'A selectable action inside the menu.'],
    ['Divider', 'Separator between groups of items.'],
  ],
  'Popup Window': [
    ['Mask', 'Dimmed backdrop that focuses attention on the dialog.'],
    ['Container', 'Floating surface that holds the dialog content.'],
    ['Header', 'Title and dismiss control.'],
    ['Body', 'Primary content and form fields.'],
    ['Footer', 'Action buttons that complete or cancel the task.'],
  ],
  'Warning Banner': [
    ['Icon', 'Status glyph that signals severity.'],
    ['Title', 'Short summary of the warning.'],
    ['Description', 'Supporting detail for the warning.'],
    ['Close', 'Optional dismiss control.'],
  ],
  Tabs: [
    ['List', 'Row of tab triggers.'],
    ['Tab', 'Individual tab label and optional icon.'],
    ['Indicator', 'Active underline or selected fill.'],
    ['Panel', 'Content region shown for the active tab.'],
  ],
};

export const contrastRows = {
  default: [
    ['Label on surface', '14.2:1', 'AAA'],
    ['Secondary text on surface', '7.1:1', 'AAA'],
    ['Primary action on surface', '5.4:1', 'AA'],
    ['Disabled text on surface', '3.2:1', 'Fail'],
  ],
};

export const bestPractices = {
  default: {
    do: [
      'Keep labels short and action-oriented.',
      'Preserve Youlify density and padding in primary workflows.',
      'Pair status color with text, never color alone.',
    ],
    dont: [
      'Mix conflicting sizes in the same action group.',
      'Hide critical actions behind nested menus without need.',
      'Invent components that are not in the Figma source file.',
    ],
  },
};

export const componentMeasurements = {
  default: {
    height: '40px',
    width: 'auto',
    padding: '0 16px',
    radius: '8px',
    border: '1px solid token',
    font: 'Elza Medium 14/22',
  },
  Input: {
    height: '40px',
    width: '100% (max content)',
    padding: '0 12px',
    radius: '8px',
    border: '1px solid #D4D7DD',
    font: 'Elza Medium 14/22',
  },
  Toggle: {
    height: '22px',
    width: '44px',
    padding: '2px',
    radius: '100px',
    border: 'none',
    font: 'Elza Medium 12/16',
  },
  Chip: {
    height: '24px',
    width: 'auto',
    padding: '0 8px',
    radius: '6px',
    border: '1px solid transparent',
    font: 'Elza Medium 12/16',
  },
  'Data Table Cell': {
    height: '56px',
    width: 'auto',
    padding: '18px 16px',
    radius: '0',
    border: 'none',
    font: 'Elza Medium 14/22',
  },
};

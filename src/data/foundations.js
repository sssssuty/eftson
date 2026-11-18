/** Foundation tokens sourced from Youlify / Eftson Figma. */

export const typographyDescription =
  'Text styles can be applied in Figma using styles in the properties panel on the right.';

export const TYPE_STYLES = [
  { style: 'Heading H1', size: 40, weight: 'Semibold', line: 48 },
  { style: 'Heading H2', size: 36, weight: 'Semibold', line: 44 },
  { style: 'Heading H3', size: 32, weight: 'Semibold', line: 40 },
  { style: 'Heading H4', size: 28, weight: 'Semibold', line: 36 },
  { style: 'Heading H5', size: 24, weight: 'Semibold', line: 32 },
  { style: 'Heading H6', size: 20, weight: 'Semibold', line: 24 },
  { style: 'Label XLarge Semibold', size: 18, weight: 'Semibold', line: 28 },
  { style: 'Label XLarge Medium', size: 18, weight: 'Medium', line: 28 },
  { style: 'Label Large Semibold', size: 16, weight: 'Semibold', line: 22 },
  { style: 'Label Large Medium', size: 16, weight: 'Medium', line: 22 },
  { style: 'Label Medium Semibold', size: 14, weight: 'Semibold', line: 18 },
  { style: 'Label Medium Medium', size: 14, weight: 'Medium', line: 18 },
  { style: 'Label Small Semibold', size: 12, weight: 'Semibold', line: 16 },
  { style: 'Label Small Medium', size: 12, weight: 'Medium', line: 16 },
  { style: 'Label Extra Small Semibold', size: 10, weight: 'Semibold', line: 12 },
  { style: 'Label Extra Small Medium', size: 10, weight: 'Medium', line: 12 },
  { style: 'Paragraph XLarge Regular', size: 18, weight: 'Regular', line: 22 },
  { style: 'Paragraph Large Regular', size: 16, weight: 'Regular', line: 20 },
  { style: 'Paragraph Medium Regular', size: 14, weight: 'Regular', line: 18 },
  { style: 'Paragraph Small Regular', size: 12, weight: 'Regular', line: 16 },
  { style: 'OVERLINE MEDIUM', size: 14, weight: 'Semibold', line: 18, overline: true },
  { style: 'OVERLINE SMALL', size: 12, weight: 'Semibold', line: 16, overline: true },
];

export const weightValue = {
  Semibold: 600,
  Medium: 500,
  Regular: 500,
};

export const colorsDescription =
  'Root tokens are linked to the brand color palette.';

export const COLOR_GROUPS = [
  {
    name: 'Main',
    tokens: [{ name: 'Indigo-default', hex: '#2D48DA' }],
  },
  {
    name: 'Blue',
    tokens: [
      { name: 'Blue-50', hex: '#F2F5FF' },
      { name: 'Blue-100', hex: '#E2E9FF' },
      { name: 'Blue-200', hex: '#C3D2FF' },
      { name: 'Blue-300', hex: '#99B5FF' },
      { name: 'Blue-500', hex: '#2B6FFF' },
      { name: 'Blue-800', hex: '#242982' },
      { name: 'Blue-900', hex: '#0D0B54' },
      { name: 'Blue-950', hex: '#03041F' },
    ],
  },
  {
    name: 'Yellow',
    tokens: [
      { name: 'Yellow-Light', hex: '#FFF9F2' },
      { name: 'Yellow-Light2', hex: '#FEF3D7' },
      { name: 'Yellow-Medium', hex: '#FBBF6E' },
      { name: 'Yellow-Medium2', hex: '#DB8702' },
      { name: 'Yellow-Dark', hex: '#A45313' },
    ],
  },
  {
    name: 'Lime',
    tokens: [
      { name: 'Lime-Light', hex: '#F9FAED' },
      { name: 'Lime-Light2', hex: '#F1F6D0' },
      { name: 'Lime-Medium', hex: '#DEF193' },
      { name: 'Lime-Dark', hex: '#5D870B' },
    ],
  },
  {
    name: 'Green',
    tokens: [
      { name: 'Green-Light', hex: '#F5FDF8' },
      { name: 'Green-Light2', hex: '#E1F7E8' },
      { name: 'Green-Medium', hex: '#A1E4B8' },
      { name: 'Green-Dark', hex: '#13803D' },
    ],
  },
  {
    name: 'Teal',
    tokens: [
      { name: 'Teal-Light', hex: '#F2FDFB' },
      { name: 'Teal-Light2', hex: '#D7F5F1' },
      { name: 'Teal-Medium', hex: '#94E5D8' },
      { name: 'Teal-Dark', hex: '#069FA3' },
    ],
  },
  {
    name: 'Purple',
    tokens: [
      { name: 'Purple-Light', hex: '#FBFCFE' },
      { name: 'Purple-Light2', hex: '#EEE5FD' },
      { name: 'Purple-Medium', hex: '#E7DBFF' },
      { name: 'Purple-Dark', hex: '#7F42D5' },
    ],
  },
  {
    name: 'Pink',
    tokens: [
      { name: 'Pink-Light', hex: '#FFF5F8' },
      { name: 'Pink-Light2', hex: '#FFE3EF' },
      { name: 'Pink-Medium', hex: '#FEB8D5' },
      { name: 'Pink-Dark', hex: '#D11062' },
    ],
  },
  {
    name: 'Red',
    tokens: [
      { name: 'Red-Light', hex: '#FFF3F3' },
      { name: 'Red-Light2', hex: '#FEE0E0' },
      { name: 'Red-Medium', hex: '#E65D5D' },
      { name: 'Red-Dark', hex: '#A31D16' },
    ],
  },
  {
    name: 'Gray',
    tokens: [
      { name: 'Gray-0', hex: '#FDFDFD' },
      { name: 'Gray-50', hex: '#F9F9F9' },
      { name: 'Gray-100', hex: '#EBEBEF' },
      { name: 'Gray-200', hex: '#D6D7DD' },
      { name: 'Gray-300', hex: '#B7B9C0' },
      { name: 'Gray-400', hex: '#A3A6B5' },
      { name: 'Gray-500', hex: '#8A8E9A' },
      { name: 'Gray-600', hex: '#6D707D' },
      { name: 'Gray-700', hex: '#4D515F' },
      { name: 'Gray-800', hex: '#2D303A' },
      { name: 'Gray-900', hex: '#141414' },
    ],
  },
];

export const spacingDescription =
  "Spacing refers to the amount of empty or 'white space' between and around interface elements to create visual structure, improve readability, and enhance user interaction.";

export const SPACING_TOKENS = [
  { token: 'Spacing-0', size: '0px' },
  { token: 'Spacing-4', size: '4px' },
  { token: 'Spacing-8', size: '8px' },
  { token: 'Spacing-12', size: '12px' },
  { token: 'Spacing-16', size: '16px' },
  { token: 'Spacing-24', size: '24px' },
  { token: 'Spacing-32', size: '32px' },
  { token: 'Spacing-40', size: '40px' },
  { token: 'Spacing-48', size: '48px' },
  { token: 'Spacing-56', size: '56px' },
  { token: 'Spacing-64', size: '64px' },
  { token: 'Spacing-72', size: '72px' },
];

export const cornerDescription =
  'Corner refers to border radius of rectangular shaped elements.';

export const CORNER_TOKENS = [
  { token: 'Corner-2', size: '2px' },
  { token: 'Corner-4', size: '4px' },
  { token: 'Corner-8', size: '8px' },
  { token: 'Corner-16', size: '16px' },
];

export const SHADOW_TOKENS = [
  {
    name: 'Small',
    blur: 10,
    x: 0,
    y: 4,
    spread: 0,
    opacity: '10%',
    color: '#11265F',
    css: '0 4px 10px 0 rgba(17, 38, 95, 0.1)',
  },
];

export const gridDescription =
  '12-column product layout grid with consistent gutters for page and workbench surfaces.';

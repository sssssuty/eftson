/** Foundation tokens sourced from Youlify / Eftson Figma. */

export const typographyDescription =
  'Text styles can be applied in Figma using styles in the properties panel on the right.';

export const TYPE_STYLES = [
  { style: 'Heading H1', size: 40, weight: 'Semibold', line: 48, className: 'eftson-type-h1' },
  { style: 'Heading H2', size: 36, weight: 'Semibold', line: 44, className: 'eftson-type-h2' },
  { style: 'Heading H3', size: 32, weight: 'Semibold', line: 40, className: 'eftson-type-h3' },
  { style: 'Heading H4', size: 28, weight: 'Semibold', line: 36, className: 'eftson-type-h4' },
  { style: 'Heading H5', size: 24, weight: 'Semibold', line: 32, className: 'eftson-type-h5' },
  { style: 'Heading H6', size: 20, weight: 'Semibold', line: 24, className: 'eftson-type-h6' },
  { style: 'Label XLarge Semibold', size: 18, weight: 'Semibold', line: 28, className: 'eftson-type-label-xlarge-semibold' },
  { style: 'Label XLarge Medium', size: 18, weight: 'Medium', line: 28, className: 'eftson-type-label-xlarge-medium' },
  { style: 'Label Large Semibold', size: 16, weight: 'Semibold', line: 22, className: 'eftson-type-label-large-semibold' },
  { style: 'Label Large Medium', size: 16, weight: 'Medium', line: 22, className: 'eftson-type-label-large-medium' },
  { style: 'Label Medium Semibold', size: 14, weight: 'Semibold', line: 18, className: 'eftson-type-label-medium-semibold' },
  { style: 'Label Medium Medium', size: 14, weight: 'Medium', line: 18, className: 'eftson-type-label-medium-medium' },
  { style: 'Label Small Semibold', size: 12, weight: 'Semibold', line: 16, className: 'eftson-type-label-small-semibold' },
  { style: 'Label Small Medium', size: 12, weight: 'Medium', line: 16, className: 'eftson-type-label-small-medium' },
  { style: 'Label Extra Small Semibold', size: 10, weight: 'Semibold', line: 12, className: 'eftson-type-label-extra-small-semibold' },
  { style: 'Label Extra Small Medium', size: 10, weight: 'Medium', line: 12, className: 'eftson-type-label-extra-small-medium' },
  { style: 'Paragraph XLarge Regular', size: 18, weight: 'Regular', line: 22, className: 'eftson-type-paragraph-xlarge' },
  { style: 'Paragraph Large Regular', size: 16, weight: 'Regular', line: 20, className: 'eftson-type-paragraph-large' },
  { style: 'Paragraph Medium Regular', size: 14, weight: 'Regular', line: 18, className: 'eftson-type-paragraph-medium' },
  { style: 'Paragraph Small Regular', size: 12, weight: 'Regular', line: 16, className: 'eftson-type-paragraph-small' },
  { style: 'OVERLINE MEDIUM', size: 14, weight: 'Semibold', line: 18, overline: true, className: 'eftson-type-overline-medium' },
  { style: 'OVERLINE SMALL', size: 12, weight: 'Semibold', line: 16, overline: true, className: 'eftson-type-overline-small' },
];

export const weightValue = {
  Semibold: 600,
  Medium: 500,
  Regular: 500,
};

export const colorsDescription =
  'Root tokens are linked to the brand color palette.';

function colorToken(name, hex) {
  const slug = name.toLowerCase();
  return {
    name,
    hex,
    className: `eftson-color-${slug}`,
    cssVar: `--eftson-${slug}`,
  };
}

export const COLOR_GROUPS = [
  {
    name: 'Main',
    tokens: [colorToken('Indigo-default', '#2D48DA')],
  },
  {
    name: 'Blue',
    tokens: [
      colorToken('Blue-50', '#F2F5FF'),
      colorToken('Blue-100', '#E2E9FF'),
      colorToken('Blue-200', '#C3D2FF'),
      colorToken('Blue-300', '#99B5FF'),
      colorToken('Blue-500', '#2B6FFF'),
      colorToken('Blue-800', '#242982'),
      colorToken('Blue-900', '#0D0B54'),
      colorToken('Blue-950', '#03041F'),
    ],
  },
  {
    name: 'Yellow',
    tokens: [
      colorToken('Yellow-Light', '#FFF9F2'),
      colorToken('Yellow-Light2', '#FEF3D7'),
      colorToken('Yellow-Medium', '#FBBF6E'),
      colorToken('Yellow-Medium2', '#DB8702'),
      colorToken('Yellow-Dark', '#A45313'),
    ],
  },
  {
    name: 'Lime',
    tokens: [
      colorToken('Lime-Light', '#F9FAED'),
      colorToken('Lime-Light2', '#F1F6D0'),
      colorToken('Lime-Medium', '#DEF193'),
      colorToken('Lime-Dark', '#5D870B'),
    ],
  },
  {
    name: 'Green',
    tokens: [
      colorToken('Green-Light', '#F5FDF8'),
      colorToken('Green-Light2', '#E1F7E8'),
      colorToken('Green-Medium', '#A1E4B8'),
      colorToken('Green-Dark', '#13803D'),
    ],
  },
  {
    name: 'Teal',
    tokens: [
      colorToken('Teal-Light', '#F2FDFB'),
      colorToken('Teal-Light2', '#D7F5F1'),
      colorToken('Teal-Medium', '#94E5D8'),
      colorToken('Teal-Dark', '#069FA3'),
    ],
  },
  {
    name: 'Purple',
    tokens: [
      colorToken('Purple-Light', '#FBFCFE'),
      colorToken('Purple-Light2', '#EEE5FD'),
      colorToken('Purple-Medium', '#E7DBFF'),
      colorToken('Purple-Dark', '#7F42D5'),
    ],
  },
  {
    name: 'Pink',
    tokens: [
      colorToken('Pink-Light', '#FFF5F8'),
      colorToken('Pink-Light2', '#FFE3EF'),
      colorToken('Pink-Medium', '#FEB8D5'),
      colorToken('Pink-Dark', '#D11062'),
    ],
  },
  {
    name: 'Red',
    tokens: [
      colorToken('Red-Light', '#FFF3F3'),
      colorToken('Red-Light2', '#FEE0E0'),
      colorToken('Red-Medium', '#E65D5D'),
      colorToken('Red-Dark', '#A31D16'),
    ],
  },
  {
    name: 'Gray',
    tokens: [
      colorToken('Gray-0', '#FDFDFD'),
      colorToken('Gray-50', '#F9F9F9'),
      colorToken('Gray-100', '#EBEBEF'),
      colorToken('Gray-200', '#D6D7DD'),
      colorToken('Gray-300', '#B7B9C0'),
      colorToken('Gray-400', '#A3A6B5'),
      colorToken('Gray-500', '#8A8E9A'),
      colorToken('Gray-600', '#6D707D'),
      colorToken('Gray-700', '#4D515F'),
      colorToken('Gray-800', '#2D303A'),
      colorToken('Gray-900', '#141414'),
    ],
  },
];

export const spacingDescription =
  "Spacing refers to the amount of empty or 'white space' between and around interface elements to create visual structure, improve readability, and enhance user interaction.";

export const SPACING_TOKENS = [
  { token: 'Spacing-0', size: '0px', className: 'eftson-space-0', cssVar: '--eftson-space-0' },
  { token: 'Spacing-4', size: '4px', className: 'eftson-space-4', cssVar: '--eftson-space-4' },
  { token: 'Spacing-8', size: '8px', className: 'eftson-space-8', cssVar: '--eftson-space-8' },
  { token: 'Spacing-12', size: '12px', className: 'eftson-space-12', cssVar: '--eftson-space-12' },
  { token: 'Spacing-16', size: '16px', className: 'eftson-space-16', cssVar: '--eftson-space-16' },
  { token: 'Spacing-24', size: '24px', className: 'eftson-space-24', cssVar: '--eftson-space-24' },
  { token: 'Spacing-32', size: '32px', className: 'eftson-space-32', cssVar: '--eftson-space-32' },
  { token: 'Spacing-40', size: '40px', className: 'eftson-space-40', cssVar: '--eftson-space-40' },
  { token: 'Spacing-48', size: '48px', className: 'eftson-space-48', cssVar: '--eftson-space-48' },
  { token: 'Spacing-56', size: '56px', className: 'eftson-space-56', cssVar: '--eftson-space-56' },
  { token: 'Spacing-64', size: '64px', className: 'eftson-space-64', cssVar: '--eftson-space-64' },
  { token: 'Spacing-72', size: '72px', className: 'eftson-space-72', cssVar: '--eftson-space-72' },
];

export const cornerDescription =
  'Corner refers to border radius of rectangular shaped elements. Corner-2 is for medium and small buttons only, Corner-8 is for Conversational AI Message blurbs only, and Corner-4 is the default for everything else.';

export const CORNER_TOKENS = [
  {
    token: 'Corner-2',
    size: '2px',
    className: 'eftson-corner-2',
    cssVar: '--eftson-corner-2',
    use: 'Medium and small buttons only',
  },
  {
    token: 'Corner-4',
    size: '4px',
    className: 'eftson-corner-4',
    cssVar: '--eftson-corner-4',
    use: 'Default for every other molecule surface',
  },
  {
    token: 'Corner-8',
    size: '8px',
    className: 'eftson-corner-8',
    cssVar: '--eftson-corner-8',
    use: 'Conversational AI Message blurbs only',
  },
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
    className: 'eftson-shadow-small',
    cssVar: '--eftson-shadow-small',
  },
];

export const gridDescription =
  '12-column product layout grid with consistent gutters for page and workbench surfaces.';

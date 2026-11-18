import {
  LayoutGrid, ClipboardList, Table, MessageSquare, LayoutTemplate, Palette, Type, Plus,
} from 'lucide-react';

export default function MiniPreview({ name }) {
  const icon = name.includes('Form') || ['Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'Toggle'].includes(name)
    ? <ClipboardList />
    : ['Table', 'Table Cell', 'Data Table', 'Data Grid', 'List', 'Listy', 'Card', 'Descriptions'].includes(name)
      ? <Table />
      : ['Alert', 'Message', 'Notification', 'Modal', 'Popup Window', 'Warning Banner'].includes(name)
        ? <MessageSquare />
        : ['Layout', 'Grid', 'Flex', 'Space', 'Splitter', 'Masonry', 'Spacing', 'Corner', 'Shadow'].includes(name)
          ? <LayoutTemplate />
          : ['ColorPicker', 'Colors'].includes(name)
            ? <Palette />
            : ['Typography', 'Text Paragraph', 'Icon'].includes(name)
              ? <Type />
              : ['Bar Chart', 'Pie Chart', 'Line Chart', 'Area Chart'].includes(name)
                ? <LayoutGrid />
                : ['Button', 'FloatButton'].includes(name)
                  ? <Plus />
                  : <LayoutGrid />;
  return <span>{icon}</span>;
}

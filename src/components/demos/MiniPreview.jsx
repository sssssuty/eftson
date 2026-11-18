import {
  AppstoreOutlined, FormOutlined, TableOutlined, MessageOutlined,
  LayoutOutlined, BgColorsOutlined, FontSizeOutlined, PlusOutlined,
} from '@ant-design/icons';

export default function MiniPreview({ name }) {
  const icon = name.includes('Form') || ['Input', 'Select', 'Checkbox', 'Radio', 'Switch'].includes(name)
    ? <FormOutlined />
    : ['Table', 'List', 'Listy', 'Card', 'Descriptions'].includes(name)
      ? <TableOutlined />
      : ['Alert', 'Message', 'Notification', 'Modal'].includes(name)
        ? <MessageOutlined />
        : ['Layout', 'Grid', 'Flex', 'Space', 'Splitter', 'Masonry'].includes(name)
          ? <LayoutOutlined />
          : ['ColorPicker'].includes(name)
            ? <BgColorsOutlined />
            : ['Typography'].includes(name)
              ? <FontSizeOutlined />
              : ['Button', 'FloatButton'].includes(name)
                ? <PlusOutlined />
                : <AppstoreOutlined />;
  return <span>{icon}</span>;
}

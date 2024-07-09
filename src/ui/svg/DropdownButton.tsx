type SvgProps = {
  _width?: number;
  _height?: number;
  _color?: string;
};

export const DropdownButton = ({
  _width = 12,
  _height = 13,
  _color = "#333333",
}: SvgProps) => {
  return (
    <svg
      width={_width}
      height={_height}
      viewBox="0 0 12 8"
      fill={_color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2085 0.854492L5.9155 5.14749L1.6225 0.854492L0.208496 2.26849L5.9155 7.97549L11.6225 2.26849L10.2085 0.854492Z"
        fill={_color}
      />
    </svg>
  );
};

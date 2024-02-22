export interface ITooltip {
    content: string;
    children?: JSX.Element;
    disabled: boolean;
    tooltipRef: React.MutableRefObject<any> | undefined;
  }
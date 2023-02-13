import { IconButtonWrapper } from './iconButton.styles';

export function IconButton({ icon: Icon, color, ...rest }) {
  return (
    <IconButtonWrapper {...rest}>
      <Icon size="100%" weight="fill" color={color ?? 'black'} />
    </IconButtonWrapper>
  );
}

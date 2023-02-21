import { IconStyled } from './icon.styles';
import { color as ssColor } from 'styled-system';
import { useTheme } from 'styled-components';

export function Icon({ icon: IconSvg, color = 'black', ...props }) {
  const theme = useTheme();

  return (
    <IconStyled {...props}>
      <IconSvg {...ssColor({ theme, color })} height="100%" width="100%" />
    </IconStyled>
  );
}

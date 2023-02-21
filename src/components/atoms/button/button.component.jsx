import { ButtonStyled, TextStyled } from './button.styles';
import { Icon } from '../icon';

export function Button({ label, textProps, icon, ...props }) {
  return (
    <ButtonStyled {...props}>
      {icon && <Icon icon={icon} color="gray.500" size={24} mr={1} />}
      <TextStyled
        fontSize="18px"
        fontWeight="bold"
        color="gray.500"
        {...textProps}
      >
        {label}
      </TextStyled>
    </ButtonStyled>
  );
}

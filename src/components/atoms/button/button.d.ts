import type { TextProps, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  label: string;
  textProps: TextProps;
};

export function Button(props: ButtonProps): JSX.Element;

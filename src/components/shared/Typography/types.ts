import { ReactNode } from 'react';
import { TextStyle } from 'react-native';

export type TypographyStyleProps = Partial<{
    type: 'body' | 'bodyLarge' | 'bodySmall' | 'label' | 'labelAlt' | 'h1' | 'h1-small' | 'h2' | 'h3' | 'h4';
    fontFamily: 'medium' | 'regular' | 'bold' | 'semiBold';
    color?:
        | 'primary'
        | 'secondary'
        | 'highlight-red'
        | 'highlight-gold'
        | 'outline'
        | 'muted'
        | 'light'
        | 'highlight-green'
        | 'dark'
        | 'colour-light';
    textAlign: 'left' | 'center' | 'right';
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}>;

export type TypographyProps = {
    children?: ReactNode;
    onPress?: () => void;
    textStyle?: TextStyle;
} & TypographyStyleProps;

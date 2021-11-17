import React from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import { TitleProps } from 'antd/lib/typography/Title';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import './styles.less';

const { Title: BaseTitle, Text: BaseText, Paragraph: BaseParagraph } = Typography;

type Props = {
    font?: 'proxima-nova' | null
}

function EnhancedTypography<T>( WrappedComponent: React.ComponentType<T>, style?: React.CSSProperties) {
    return (props: T & Props) => <WrappedComponent style={{...style}} {...props} className={`proposify-typography ${props.font ? props.font : ''}`} />
}

export const Title: React.FC<TitleProps & Props> = (props, style) => EnhancedTypography(BaseTitle, style)(props);

export const Text: React.FC<TextProps & Props> = (props, style) => EnhancedTypography(BaseText, style)(props);

export const Paragraph: React.FC<ParagraphProps & Props> = (props, style) => EnhancedTypography(BaseParagraph, style)(props);

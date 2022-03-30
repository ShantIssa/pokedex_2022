import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function DeleteOutlined(
    { fill = 'black', width = 30, height = 30 }: any,
    props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
        Readonly<SvgProps> &
        Readonly<{ children?: React.ReactNode }>,
) {
    return (
        <Svg width={width} height={height} viewBox="0 0 36 36" fill="none" {...props}>
            <Path
                d="M11.892 4.818h-.321a.322.322 0 00.321-.322v.322h12.215v-.322c0 .177.144.322.32.322h-.32V7.71h2.892V4.496a2.574 2.574 0 00-2.571-2.571H11.57a2.574 2.574 0 00-2.572 2.571v3.215h2.893V4.818zm20.25 2.893H3.857c-.712 0-1.286.574-1.286 1.285v1.286c0 .177.144.322.321.322H5.32l.992 21.013a2.574 2.574 0 002.568 2.45h18.24a2.568 2.568 0 002.568-2.45l.993-21.014h2.426a.322.322 0 00.322-.32V8.995c0-.71-.575-1.285-1.286-1.285zM26.81 31.175H9.189l-.972-20.572h19.567l-.973 20.572z"
                fill={fill}
                fillOpacity={0.85}
            />
        </Svg>
    );
}

export default DeleteOutlined;

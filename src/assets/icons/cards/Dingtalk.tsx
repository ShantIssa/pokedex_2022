import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Dingtalk = (
    { fill = 'black' }: any,
    props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
        Readonly<SvgProps> &
        Readonly<{ children?: React.ReactNode }>,
) => (
    <Svg width={30} height={30} viewBox="0 0 36 36" fill="none" {...props}>
        <Path
            d="M20.479 7.571c-6.075-2.214-14.963-6.26-14.963-6.26-.63-.164-.72.446-.72.446-.2 2.455 1.35 6.449 2.154 7.345.8.896 12.821 4.568 12.821 4.568s-9.245-1.864-11.475-2.507c-2.234-.643-1.522.715-1.522.715.458 2.48 2.607 5.296 4.307 5.561 1.695.265 8.843.16 8.843.16s-1.426.166-3.745.479c-1.715.233-3.897.502-4.463.715-1.33.502.964 2.515.964 2.515 3.403 3.086 5.211 2.03 5.211 2.03a47.104 47.104 0 013.423-.973l-1.185 4.918h3.4l-1.873 7.429 8.248-10.925h-4.319l.896-1.555c.012.02.016.033.016.033s3.066-4.906 4.24-7.41l.023-.04h-.004c.201-.433.346-.791.402-1.036.683-2.865-4.6-3.994-10.68-6.208z"
            fill={fill}
            fillOpacity={0.85}
        />
    </Svg>
);

export default Dingtalk;

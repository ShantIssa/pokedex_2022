import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

const Compass = (
    { fill = 'black' }: any,
    props: JSX.IntrinsicAttributes &
        JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
        Readonly<SvgProps> &
        Readonly<{ children?: React.ReactNode }>,
) => (
    <Svg width={30} height={30} viewBox="0 0 36 36" fill="none" {...props}>
        <G clipPath="url(#clip0_806_8537)">
            <Path
                d="M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0zm0 32.946C9.747 32.946 3.054 26.253 3.054 18S9.747 3.054 18 3.054 32.946 9.747 32.946 18 26.253 32.946 18 32.946zm7.971-23.629a1.286 1.286 0 00-.984.02L14.1 14.104 9.338 24.99c-.145.33-.145.703 0 1.033.136.313.39.558.71.683a1.271 1.271 0 00.984-.02l10.89-4.766 4.76-10.888a1.288 1.288 0 00-.71-1.716zM20.604 18.9l1.052 1.053-1.703 1.703-1.053-1.052-6.204 2.716 2.713-6.204-1.025-1.029 1.703-1.703 1.025 1.024 6.208-2.712-2.716 6.204zm-4.517-4.516l-1.703 1.703 1.024 1.03 3.492 3.487 1.053 1.052 1.703-1.703-1.052-1.053-3.488-3.491-1.029-1.025z"
                fill={fill}
                fillOpacity={0.85}
            />
        </G>
        <Defs>
            <ClipPath id="clip0_806_8537">
                <Path fill={fill} d="M0 0H36V36H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default Compass;

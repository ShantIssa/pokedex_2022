import { useEffect, useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { ImageColorsResult } from 'react-native-image-colors/lib/typescript/types';

import { CardColors } from './types';

const useImageColors = (uri: string) => {
    const [loading, setLoading] = useState(true);
    const [colors, setColor] = useState<CardColors>({
        primary: 'transparent',
        secondary: 'transparent',
        tertiary: 'transparent',
    });

    const colorSetter = (result: ImageColorsResult) => {
        switch (result.platform) {
            case 'android':
                setColor({
                    primary: result.dominant || 'transparent',
                    secondary: result.darkVibrant || 'transparent',
                    tertiary: result.lightVibrant || 'transparent',
                });
                break;
            case 'web':
                setColor({
                    primary: result.dominant || 'transparent',
                    secondary: result.darkVibrant || 'transparent',
                    tertiary: result.lightVibrant || 'transparent',
                });
                break;
            case 'ios':
                setColor({
                    primary: result.primary || 'transparent',
                    secondary: result.secondary || 'transparent',
                    tertiary: 'transparent' || result.detail,
                });
                break;
            default:
                throw new Error('Unexpected platform');
        }
    };

    const fetchColors = async () => {
        if (uri) {
            const result = await ImageColors.getColors(uri, {
                fallback: '#000000',
                quality: 'low',
                pixelSpacing: 5,
                cache: true,
                headers: {
                    authorization: 'Basic 123',
                },
            });
            colorSetter(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchColors();
    }, [uri]);

    return { picLoading: loading, colors };
};
export default useImageColors;

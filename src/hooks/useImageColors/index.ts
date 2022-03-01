import { useEffect, useState } from 'react';
import ImageColors from 'react-native-image-colors';

export type CardColors = {
    primary: string;
    secondary: string;
    tertiary: string;
};

const useImageColors = (uri: string) => {
    const [loading, setLoading] = useState(true);
    const [colors, setColor] = useState<CardColors>({
        primary: 'transparent',
        secondary: 'transparent',
        tertiary: 'transparent',
    });

    useEffect(() => {
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
                setLoading(false);
            }
        };
        fetchColors().then((r) => r);
    }, [uri]);

    return { picLoading: loading, colors };
};
export default useImageColors;

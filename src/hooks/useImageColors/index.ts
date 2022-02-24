import { useEffect, useState } from 'react';
import ImageColors from 'react-native-image-colors';

import { CardColors } from 'src/components/views/PokeCard/types';

const useImageColors = (uri: string) => {
    const [loading, setLoading] = useState(true);
    const [colors, setColor] = useState<CardColors>({ background: 'transparent' });

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
                            background: result.dominant || 'transparent',
                        });
                        break;
                    case 'web':
                        setColor({
                            background: result.dominant || 'transparent',
                        });
                        break;
                    case 'ios':
                        setColor({
                            background: result.secondary || 'transparent',
                        });
                        break;
                    default:
                        throw new Error('Unexpected platform');
                }
                setLoading(false);
            }
        };
        fetchColors();
    }, [uri]);

    return { picLoading: loading, colors };
};
export default useImageColors;

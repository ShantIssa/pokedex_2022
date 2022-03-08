import React from 'react';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate as PersistProvider } from 'redux-persist/integration/react';
import { Host } from 'react-native-portalize';

import { baseTheme } from 'src/theme';
import Navigation from 'src/navigation';
import store, { persistor } from 'src/redux/store';
import { ignoreLogs } from 'src/utils/IgnoreLogs';

const queryClient = new QueryClient();

const App = () => {
    LogBox.ignoreLogs(ignoreLogs);
    return (
        <ReduxProvider store={store}>
            <PersistProvider loading={null} persistor={persistor}>
                <ThemeProvider theme={baseTheme}>
                    <QueryClientProvider client={queryClient}>
                        <Host>
                            <Navigation />
                        </Host>
                    </QueryClientProvider>
                </ThemeProvider>
            </PersistProvider>
        </ReduxProvider>
    );
};

export default App;

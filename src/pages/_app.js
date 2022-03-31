import 'styles/globals.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../theme/emotionCache';
import {Provider} from 'react-redux';
import store from 'store';

const clientSideEmotionCache = createEmotionCache();
import {ApolloProvider} from '@apollo/client';
import client from "./api/apollo-client";

function MyApp({Component, pageProps, emotionCache = clientSideEmotionCache}) {
    return (

        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport"
                      content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>

                <ApolloProvider client={client}>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </ApolloProvider>

            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp

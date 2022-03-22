import { Box, Container, Paper } from "@mui/material";
import Head from 'next/head';

import Header from "components/navigation";
import { useSelector } from "react-redux";
import React from "react";
import { useRouter } from "next/router";

export default function PageContainer({ children, isNav = true }) {
    const { active } = useSelector((t)=>t.header);
    const { asPath } = useRouter();
    console.log(asPath);
    return (
        <Box sx={{ bgcolor: (t) => t.palette.common.white }}>
            <Container
                maxWidth="xl"
                sx={{
                    minHeight: '100vh',
                    display: 'grid',
                    placeItems: isNav ? 'top' : 'center',
                }}>
                <Head>
                    <title>{active}</title>
                    <meta name="description" content={`active page ${active}`} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Paper elevation={12} sx={{
                    bgcolor: (t) => t.palette.common.white,
                    height: "90vh",
                    width: '100%',
                    p: 2,
                    borderRadius: 0,
                }}>
                    { isNav && <Header /> }
                    {children}
                </Paper>
            </Container>
        </Box>
    )
}
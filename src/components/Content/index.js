import {Box, Container, Grid} from "@mui/material";
import {Header} from "../index";
import * as React from "react";
import { useRouter } from 'next/router';

const Content = ({children, props}) => {
    const { asPath } = useRouter();
    return (
        <Box sx={{flexGrow: 1}}>
            <Header login={asPath === '/'} />
            <Container color="secondary" sx={{pt: 6, bgcolor: (t) => t.palette.primary.main}} maxWidth="sm">
                <Grid sx={{minHeight: 'calc(100vh - 80px)', pt: 2, pb: 2}} container>
                    <Grid item xs={12} {...props}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Content;

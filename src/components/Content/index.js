import {Box, Container, Grid} from "@mui/material";
import {Header} from "../index";
import * as React from "react";

const Content = ({children, props}) => (
        <Box sx={{flexGrow: 1}}>
            <Header />
            <Container color="secondary" sx={{pt: 6, bgcolor: (t) => t.palette.primary.main}} maxWidth="sm">
                <Grid sx={{minHeight: 'calc(100vh - 80px)', pt: 2, pb: 2}} container>
                    <Grid item xs={12} {...props}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
export default Content;

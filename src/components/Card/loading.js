import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import {Card} from "@mui/material";

export default function Loading() {
    return (
        < Card elevation={2} sx={{ minHeight: 200, p: 10, mb: 1.6 }}>
            <Skeleton width={120}/>
            <Skeleton width={120} animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Card>
    );
}

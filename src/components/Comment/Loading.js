import React from 'react';
import {Card} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Loading = () => {
    const width = Math.random()*(80 - 40)+40
    return (
        < Card elevation={0} sx={{ minHeight: 60, p: 1, }}>
            <Stack alignItems="center" spacing={1} direction="row">
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton width={`${width}%`} height={40} />
            </Stack>
        </Card>
    );
};

export default Loading;

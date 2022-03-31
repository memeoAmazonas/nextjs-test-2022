import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import * as React from "react";

const CustomLink = ({onClick, children }) =>(
    <Link underline="none" sx={{ fontSize: 18, '&:hover':{
            fontSize: 20,
            border:(t) => `1px solid ${t.palette.common.black}`,
            p: 0.5
        },
        transition: 'font-size 0.5s, border 0.6s, padding 0.4s',
    }} component="button" onClick={onClick}>{ children }</Link>
    )
export default CustomLink;

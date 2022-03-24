import { IconButton, Typography } from "@mui/material";
const CustomIconButton = ({ icon, title, onclick }) => (
    <IconButton color="primary" sx={{ borderRadius: 0, minWidth: '25%' }}>
        {icon}
        <Typography>{title}</Typography>
    </IconButton >
);

export default CustomIconButton;

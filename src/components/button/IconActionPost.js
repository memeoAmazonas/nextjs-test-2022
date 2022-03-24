import { IconButton, Typography } from "@mui/material";
const CustomIconButton = ({ icon, title, onclick }) => (
    <IconButton color="primary" sx={{ borderRadius: 0, minWidth: '31%' }}>
        {icon}
        <Typography sx={{ ml: 0.3}}>{title}</Typography>
    </IconButton >
);

export default CustomIconButton;

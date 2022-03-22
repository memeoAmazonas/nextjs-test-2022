import { MenuItem } from "@mui/material";
import OnNavigate from "hooks/onNavigate";
import { useSelector } from "react-redux";

export default function MenuButton({ label, to }) {
    const { onSend } = OnNavigate(label, to);
    const { active } = useSelector((s) => s.header);

    return (
        <MenuItem
            disabled={label === active}
            onClick={onSend}
            sx={{
                mr: 2,
                minWidth: 100,
                justifyContent: 'center',
                color: (t) => t.palette.common.white,
                border: (t) => `1px solid ${t.palette.common.white}`,
                '&:hover': {
                    bgcolor: (t) => t.palette.common.white,
                    color: (t) => t.palette.primary.main,
                },

            }}>
            {label}
        </MenuItem>
    );
}
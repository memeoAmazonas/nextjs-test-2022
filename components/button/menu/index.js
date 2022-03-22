import { MenuItem } from "@mui/material";
import OnNavigate from "hooks/onNavigate";
import Link from "next/link";

export default function MenuButton({label, to}) {
    const { onSend } = OnNavigate(label, to);
    return (
        <MenuItem 
        onClick={onSend}
        sx={{
            mr: 2,
            minWidth: 100,
            justifyContent: 'center',
            color: (t) => t.palette.primary.main,
            border: (t) => `1px solid ${t.palette.primary.main}`,
            '&:hover': {
                bgcolor: (t) => t.palette.primary.main,
                    color: (t) => t.palette.common.white,
            }

        }}>
              { label }  
        </MenuItem>
    );
}
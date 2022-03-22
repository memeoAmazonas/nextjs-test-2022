import { MenuItem } from "@mui/material";
import Link from "next/link";

export default function MenuButton({label, to}) {
    return (
        <MenuItem sx={{
            a: {
                textDecoration: 'none',
                color: (t) => t.palette.primary.main,

            },
            mr: 2,
            border: (t) => `1px solid ${t.palette.primary.main}`,
            '&:hover': {
                bgcolor: (t) => t.palette.primary.main,
                a: {
                    color: (t) => t.palette.common.white,
                }
            }

        }}>
            <Link href={to}>
                {label}
            </Link>
        </MenuItem>
    );
}
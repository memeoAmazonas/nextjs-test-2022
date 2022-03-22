import { Toolbar } from "@mui/material";
import MenuButton from "components/button/menu";
import ROUTES from './routes';

const Header = () => (
        <Toolbar sx={{ display: 'flex', bgcolor: (t)=>t.palette.primary.dark}}>
            {ROUTES.map(({ label, to }) => (<MenuButton key={label} label={label} to={to} />))}
        </Toolbar>
    );

export default Header;

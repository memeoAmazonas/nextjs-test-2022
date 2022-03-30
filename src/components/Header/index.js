import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../../public/logo.jpeg';
import {useDispatch, useSelector} from "react-redux";
import {HTTP_STATUS} from "constant";
import Input from "components/Input";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import {useRouter} from "next/router";
import {setSession} from "store/slice/user";
import Avatar from "components/Avatar";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const Header = ({ props, login }) => {
    const router = useRouter();
    const[value, setValue] =React.useState('');
    const { loading } = useSelector((s)=>s.post)
    const { name } = useSelector((s) => s.user)
    const dispatch = useDispatch();
    const logout =() => {
        dispatch(setSession(''))
        router.push("/");
    }
    return(
        <ElevationScroll {...props}>
            <AppBar sx={{ height: 60 }} color="secondary">
                <Toolbar sx={{display: 'flex'}}>
                    <Image src={logo} alt="logo" layout="fixed" width={40} height={40} className="rounded-full"
                           quality={100}/>
                    { login && <Typography variant="h5" sx={{ pl:1, pr:1, color:(t) =>t.palette.common.white}}>Marawaka</Typography> }
                    {!login && <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <Input
                            value={value}
                            disabled={loading === HTTP_STATUS.PENDING}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    }
                    {name && <Stack  direction="row" sx={{flexGrow: 1}} alignItems="center" justifyContent="flex-end">
                        <Avatar name={name} />
                        <Typography variant="h6" sx={{pl: 1, pr: 1, color: (t) => t.palette.common.white}}>
                            {name}
                        </Typography>
                        <Link
                            component="button"
                            variant="body2"
                            sx={{ color: (t) => t.palette.common.black }}
                            onClick={logout}
                        >Logout</Link>
                    </Stack>
                    }
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
}
export default Header;

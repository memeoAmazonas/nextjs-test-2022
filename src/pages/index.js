import * as React from "react";
import {Content, Input} from "components";
import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {createUser, setSession} from "../store/slice/user";
import {HTTP_STATUS} from "../constant";

export default function App() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const {loading} = useSelector((s) => s.user);

    React.useEffect(() => {
        if (loading === HTTP_STATUS.FULFILLED) {
            dispatch(setSession(name));
            router.push('/home')
        }
    }, [loading])
    const onSend = () => {
        dispatch(createUser({name, email: ""}))
    }
    const onKeyPress = (e) => {
        if (e.code === "Enter") {
            onSend();
        }
    }

    return (
        <Content>
            <Stack className="content-login" sx={{minHeight: '90vh'}}>
                <Card sx={{textAlign: "center", maxHeight: 200, mt: '42vh', p: 2, opacity: 0.5}}>
                    <Typography variant="h5" color="primary">Welcome to Duida Marawaka</Typography>
                    <TextField
                        inputProps={{
                            sx: {textAlign: "center", fontSize: 19}
                        }} onChange={(e) => setName(e.target.value)}
                        placeholder="username"
                        fullWidth
                        onKeyPress={onKeyPress}
                    />
                    <Button
                        onClick={onSend}
                        disabled={name === ''}
                        sx={{
                            color: (t) => t.palette.primary.main,
                            border: (t) => "1px solid " + t.palette.primary.main,
                            mt: 2
                        }}>
                        Login
                    </Button>
                </Card>
            </Stack>
        </Content>
    )
}

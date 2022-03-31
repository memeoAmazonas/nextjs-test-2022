import * as React from "react";
import {Content, Toast, Link } from "components";
import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Service from "./login.service";


export default function Login() {

    const {setName, onKeyPress, onSend, onRegister, register, disabled, setEmail, msg, open, name, email, sv } = Service();
    return (
        <Content>
            <Stack className="content-login" sx={{minHeight: '90vh'}}>
                <Toast severity={sv} message={msg} open={open} />
                <Card sx={{textAlign: "center",  mt: '42vh', p: 2, opacity: 0.5}}>
                    <Typography variant="h5" color="primary">Welcome to Duida Marawaka</Typography>
                    {register && <TextField
                        sx={{mt: 1}}
                        value={email}
                        inputProps={{
                            autoComplete: 'off',
                            sx: {p:1, textAlign: "center", fontSize: 19}
                        }} onChange={(e) => setEmail(e.target.value)}
                        placeholder="email or username"
                        fullWidth
                    />}
                    <TextField
                        sx={{mt: 1}}
                        value={name}
                        inputProps={{
                            autoComplete: 'off',
                            sx: { p:1, textAlign: "center", fontSize: 19}
                        }} onChange={(e) => setName(e.target.value)}
                        placeholder={ register ? "name" : "email or username"}
                        fullWidth
                        onKeyPress={onKeyPress}
                    />

                    <Button
                        onClick={onSend}
                        disabled={disabled}
                        sx={{
                            width: '120px',
                            color: (t) => t.palette.primary.main,
                            border: (t) => "1px solid " + t.palette.primary.main,
                            mt: 2,
                            '&:hover':{
                                bgcolor: (t) =>t.palette.primary.main,
                                color: (t) =>t.palette.common.white,
                            }
                        }}>
                        Login
                    </Button>
                    <Stack direction="row" sx={{  pt: 1, }}>
                        <Link onClick={onRegister}>
                            {register ? "Login" : "Register"}
                        </Link>
                    </Stack>
                </Card>
            </Stack>
        </Content>
    )
}

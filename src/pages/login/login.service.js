import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {HTTP_STATUS} from "constant";
import {createUser, login} from "store/slice/user";

export default function Service() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const {loginLoading, name: userName, invalid, loading, id} = useSelector((s) => s.user);
    const [register, setRegister] = React.useState(false);
    const [msg, setMsg] = React.useState('Invalid email/username');
    const [open, setOpen] = React.useState(false);
    const [sv, setSv] = React.useState('error');
    React.useEffect(() => {
        if (loginLoading === HTTP_STATUS.FULFILLED || loading === HTTP_STATUS.FULFILLED) {
            router.push("/home");
        }
    }, [loginLoading, loading]);

    React.useEffect(() => {
        if (loading === HTTP_STATUS.REJECTED) {
                setSv('error');
                if (id === -1) {
                    setMsg('An error has occurred, please try again later. :/')
                } else {
                    setMsg('user is already registered. :s')
                }
            setOpen(true);
        }
    }, [loading]);

    React.useEffect(() => {
        if (open) {
            const timeout = setTimeout(() => {
                setOpen(false);
            }, 4500);
            return () => clearTimeout(timeout);
        }
        return null;
    }, [open]);

    React.useEffect(() => {
        if (invalid) {
            setOpen(true);
        }
    }, [invalid])

    const onSend = () => {
        if (register) {
            dispatch(createUser({name, email}))
        } else {
            dispatch(login(name))
        }
    }
    const onKeyPress = (e) => {
        if (e.code === "Enter") {
            onSend();
        }
    }
    const onRegister = () => {
        setName('');
        setEmail('');
        setRegister(!register);
    }
    const disabled = register ? email === '' || name === '' : name === '';

    return {setName, onKeyPress, onSend, name, onRegister, register, disabled, setEmail, msg, open, email, sv}
}

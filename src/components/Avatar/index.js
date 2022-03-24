import { Avatar } from '@mui/material';

const CustomAvatar = ({ name, alt='' }) => {
    if (name) {
    return (<Avatar
        sx={{
            bgcolor: (t) =>  alt ? t.palette.common.black : t.palette.primary.main,
            width: 25,
            height: 25,
            fontSize: 15,
        }}>{name[0].toUpperCase()}</Avatar>
    )
}
return (<Avatar
    sx={{
        bgcolor: (t) => alt ? t.palette.common.black : t.palette.primary.main,
        width: 25,
        height: 25,
        fontSize: 15,
    }} />
);
}
export default CustomAvatar;

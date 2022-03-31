import {Avatar} from '@mui/material';

const CustomAvatar = ({name, alt = ''}) => {
    if (name) {
        return (
            <Avatar
                sx={{
                    bgcolor: (t) => alt ? t.palette.common.black : t.palette.primary.main,
                    fontSize: 15,
                    height: 25,
                    width: 25,
                }}>
                {name[0].toUpperCase()}
            </Avatar>
        );
    }
    return (
        <Avatar
            sx={{
                bgcolor: (t) => alt ? t.palette.common.black : t.palette.primary.main,
                fontSize: 15,
                height: 25,
                width: 25,
            }}
        />
    );
}
export default CustomAvatar;

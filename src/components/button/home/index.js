import { Paper } from "@mui/material";
import OnNavigate from "hooks/onNavigate";

function HomeButton({ label, to }) {
    const { onSend } = OnNavigate(label, to);
    return (
        <Paper
            component="button" 
            onClick={onSend} 
            elevation={3} 
            sx={{ 
                bgcolor: (t) => t.palette.primary.main,
                 width: 120, 
                 height: 120, 
                 borderRadius: 0, 
                 border: 0,
                 fontSize: 30,
                 cursor: 'pointer',
                color: (t) => t.palette.common.white,
                 '&: hover':{
                        color: (t) =>t.palette.primary.main,
                        bgcolor: 'transparent',
                     border: (t) => `1px solid ${t.palette.primary.main}`,

                 }
                 }}>
                     { label }

        </Paper>
    );
}

export default HomeButton;
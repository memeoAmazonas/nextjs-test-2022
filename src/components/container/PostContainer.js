import React from "react";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/Message';
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";

export default function PostContainer({title, author, text, color, comments, onClick}) {
    const CustomBadge = ({children}) => {
        if (comments) {
            return (<Badge badgeContent={comments} color="secondary">
                {children}
            </Badge>)
        }
        return children;
    }
    return (
        <Grid item>
            <Card  elevation={3} sx={{maxWidth: 250, minHeight: 125, mb:2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{backgroundColor: color}}>
                            {author[0].toUpperCase()}
                        </Avatar>
                    }
                    title={title}
                    subheader={author}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={onClick} color="primary" sx={{ml: 'auto'}}>
                        <CustomBadge>
                            <MessageIcon/>
                        </CustomBadge>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

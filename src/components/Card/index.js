import React from "react";
import {useSelector} from "react-redux";

import {Card, Stack, Typography, Link, Divider, CardHeader, CardContent} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

import {Avatar, IconButton, Comment, CreateComment, LoadingComment } from "components";
import {HTTP_STATUS} from "constant";

const CustomCard = ({id, title = "", author = "", numberComents = 0, body = "", comments = [], onOpen}) => {
    const [open, setOpen] = React.useState(false);
    const {loading} = useSelector((s) => s.comment)
    const onOpenComment = () => {
        setOpen(!open);
        onOpen(id)
    }
    return (
        <Card elevation={2} sx={{minHeight: 120, p: 0, mb: 1.6}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: (t) => t.palette.primary.main}} name={author}/>
                }
                title={title}
                subheader={author}
            />
            <CardContent>
                <Typography variant="body2">
                    {body}
                </Typography>
            </CardContent>

            {numberComents > 0 &&
            <Stack alignItems="flex-end" sx={{pr: 1.6, pb: 1}}>
                <Link
                    underline="hover"
                    component="button"
                    variant="body2"
                    onClick={onOpenComment}
                >
                    {numberComents} comments
                </Link>
            </Stack>
            }
            <Stack sx={{pb: 1}}>
                <Divider color="primary" sx={{mb: 1}}/>
                <Stack justifyContent="center" direction="row" spacing={2}>
                    <IconButton
                        title="Like"
                        icon={<ThumbUpIcon fontSize="small"/>}
                        onClick={() => console.log('log')}
                    />
                    <IconButton title="Comment" icon={<ChatBubbleOutlineIcon />}
                                onClick={() => setOpen(!open)}/>
                    <IconButton title="Share" icon={<ShareIcon fontSize="small"/>} onClick={() => console.log('log')}/>
                </Stack>
                <Divider color="primary" sx={{mt: 1}}/>
            </Stack>
            {open && comments.length > 0 &&
            <CardContent>
                {comments.map((it) => (<Comment key={it.name} {...it} />))}
            </CardContent>
            }
            {open && comments.length === 0 && loading === HTTP_STATUS.PENDING
            && Array.from(Array(numberComents).keys()).map((i)=>(<LoadingComment key={`loading-${i}`} />))}
            <Stack sx={{p: 2}} direction="row" spacing={1}>
                <Avatar alt="user"/>
                <CreateComment/>
            </Stack>
        </Card>
    );
}
export default CustomCard;

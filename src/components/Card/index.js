import {Card, Stack, Typography, Link, Divider, CardHeader, CardContent} from "@mui/material";
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import {Avatar, IconButton, Comment, CreateComment} from "components";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../store/slice/comment";

/*
body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
comments: 5
id: 1
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
user:
name: "Leanne Graham"
 */
const CustomCard = ({id, title = "title", author = "Author", numberComents = 0, src, body = "soy un contendin mas cercano al solo no se puede llegar, esto se debe icaro a que te puede quemar"}) => {
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = React.useState();
    const {comments, loading } = useSelector((s) => s.comment)
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!comment) {
            if (open) {
                console.log("Object.keys(comments)",Object.keys(comments), comments[id], comment);
                if (Object.keys(comments).includes(id)) {
                    setComment(comments[id])
                } else {
                    dispatch(fetchComments(id));
                }
            }
        }
    },[open])

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
            {src && <Stack sx={{mb: 2, cursor: 'pointer'}}>
                <Image onClick={() => alert('woe')} alt="logo-post" src={logo} width={680} height={415}/>
            </Stack>}

            {numberComents > 0 && <Stack alignItems="flex-end" sx={{pr: 1.6, pb: 1}}>
                <Link
                    underline="hover"
                    component="button"
                    variant="body2"
                    onClick={() => setOpen(!open)}
                >
                    {numberComents} comments
                </Link>
            </Stack>}
            <Stack sx={{pb: 1}}>
                <Divider color="primary" sx={{mb: 1}}/>
                <Stack justifyContent="center" direction="row" spacing={2}>
                    <IconButton title="Like" icon={<ThumbUpIcon fontSize="small"/>} onClick={() => console.log('log')}/>
                    <IconButton title="Comment" icon={<ChatBubbleOutlineIcon fontSize="small"/>}
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
            <Stack sx={{p: 2}} direction="row" spacing={1}>
                <Avatar alt="user"/><CreateComment/>
            </Stack>
        </Card>
    );
}
export default CustomCard;

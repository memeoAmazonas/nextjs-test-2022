import * as React from "react";
import {Stack, Card as CCard} from "@mui/material";

import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";

import {Avatar, Card, Content, CreateComment, LoadingCard} from "components";
import {HTTP_STATUS} from "constant";
import {createComment, fetchComments} from "store/slice/comment";
import {createPost, fetchPost} from "store/slice/post";


export default function Home() {
    const {name, id} = useSelector((s) => s.user);
    const router = useRouter();
    const {loading, post} = useSelector((s) => s.post)
    const {comments, create} = useSelector((s) => s.comment)
    const [local, setLocal] = React.useState({})
    const [actual, setActual] = React.useState({});
    const [inOpen, setInOpen] = React.useState();
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!name) router.push("/");
    });
    React.useEffect(() => {
        if (create === HTTP_STATUS.FULFILLED) {
            const exist = comments[actual.postId] ? comments[actual.postId] : []
            if (exist.length > 0) {
                const s = [...exist, actual]
                setLocal({...local, [actual.postId]: s})
            } else {
                dispatch(fetchComments(actual.postId))
            }
            setInOpen(actual.postId);
        }
    }, [create]);

    React.useEffect(() => {
        if (!post) dispatch(fetchPost())
    }, []);

    const onOpen = (id) => {
        if (!comments[id]) {
            dispatch(fetchComments(id))
        }
    }
    const onSendComment = (value, id) => {
        const body = {
            body: value,
            name,
            postId: id,
        };
        setActual(body)
        dispatch(createComment(body))
    }

    function onCreateComment(value) {
        dispatch(createPost({
            userId: id,
            nameUser: name,
            body: value,
        }))
    }

    if (loading === HTTP_STATUS.PENDING && name) {
        return (
            <Content>
                <LoadingCard/>
                <LoadingCard/>
            </Content>
        )
    }
    if (post) {
        return (
            <Content>
                <CCard  elevation={2} sx={{p: 0, mb: 1.6, bgcolor: (t)=>t.palette.bgView.main}}>
                    <Stack sx={{p: 2}} direction="row" spacing={1}>
                        <Avatar name={name}/>
                        <CreateComment
                            placeholder={`What's on your mind, ${name}`}
                            onCreate={onCreateComment}
                            focus={focus}
                        />
                    </Stack>
                </CCard>
                {post.map((it) => (<Card
                    name={name}
                    key={uuidv4()}
                    title={it.title}
                    numberComents={local[it.id] ? local[it.id].length : it.comments}
                    author={it.user.name}
                    body={it.body}
                    comments={local[it.id] || comments[it.id] || []}
                    onOpen={onOpen}
                    id={it.id.toString()}
                    onCreateComment={onSendComment}
                    inOpen={inOpen}
                />))}
            </Content>
        );
    }
    return null;

}

import * as React from "react";
import {Card, Content, LoadingCard } from "components";
import {useDispatch, useSelector} from "react-redux";

import {HTTP_STATUS} from "constant";
import {fetchComments} from "store/slice/comment";
import {fetchPost} from "store/slice/post";
import {useRouter} from "next/router";


export default function App() {
    const { name } =  useSelector((s) => s.user);
    const router = useRouter();
    const { loading, post } = useSelector((s) => s.post)
    const { comments } = useSelector((s) =>s.comment)
    const dispatch = useDispatch();
    React.useEffect(() =>{
        if (!name) router.push("/");
    })
    React.useEffect(() => {
        if (!post) dispatch(fetchPost())
    }, []);
    if (loading === HTTP_STATUS.PENDING && name) {
        return (
            <Content>
                <LoadingCard />
                <LoadingCard />
            </Content>
        )
    }
    if (loading === HTTP_STATUS.FULFILLED) {

        const onOpen =(id) =>{
            if (!comments[id]) {
                dispatch(fetchComments(id))
            }
        }
        return (
            <Content>
                {post.map((it) => (<Card
                    key={it.id}
                    title={it.title}
                    numberComents={it.comments}
                    author={it.user.name}
                    body={it.body}
                    comments={comments[it.id] || [] }
                    onOpen={onOpen}
                    id={it.id.toString()}
                />))}
            </Content>
        );
    }
    return null
}

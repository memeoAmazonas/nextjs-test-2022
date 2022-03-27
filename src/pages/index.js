import {Container, Grid, Box} from "@mui/material";
import {Card, Header} from "components";
import {getPost} from "./api/post";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {HTTP_STATUS} from "constant";
import {fetchPost} from "store/slice/post";
import Loading from "../components/Card/loading";
import logo from "../../public/logo.jpeg";
import {getComments} from "./api/comment";

const Content = ({children}) => (
    <Box sx={{flexGrow: 1}}>
        <Header/>
        <Container color="secondary" sx={{pt: 6, bgcolor: (t) => t.palette.primary.main}} maxWidth="sm">
            <Grid sx={{minHeight: 'calc(100vh - 80px)', pt: 2, pb: 2}} container>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    </Box>
);
export default function App() {
    const {loading, post} = useSelector((s) => s.post)
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (!post) dispatch(fetchPost())
    }, []);
    console.log(post);
    if (loading === HTTP_STATUS.PENDING) {
        return (
            <Content>
                <Loading/>
                <Loading/>
            </Content>
        )
    }
    if (loading === HTTP_STATUS.FULFILLED) {
        return (
            <Content>
                {post.map((it) => (<Card key={it.id} title={it.title} numberComents={it.comments} author={it.user.name}
                                         body={it.body} id={it.id.toString()}/>))}
            </Content>
        );
    }
    return null
}

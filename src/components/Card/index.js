import { SendAndArchiveOutlined } from "@mui/icons-material";
import { Card, Stack, Typography, Link, Divider, Avatar, CardHeader } from "@mui/material";
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from "components";


const CustomCard = ({ title = "title", author = "Author", comments = [] }) => {
    return (
        <Card elevation={2} sx={{ minHeight: 120, p: 0, mb: 1.6 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: (t) => t.palette.primary.main }}>
                        A
                    </Avatar>
                }
                title={title}
                subheader={author}
            />
            <Stack sx={{ mb: 2, cursor: 'pointer' }}>
                <Image onClick={() => alert('woe')} alt="logo-post" src={logo} width={680} height={415} />
            </Stack>
            <Stack alignItems="flex-end" sx={{ pr: 1.6, pb: 1 }}>
                <Link
                    underline="hover"
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    {comments.length} comments
                </Link>
            </Stack>
            <Stack sx={{ pb: 1 }}>
                <Divider color="primary" sx={{ mb: 1 }} />
                <Stack justifyContent="center" direction="row" spacing={2}>
                    <IconButton title="Like" icon={<ThumbUpIcon fontSize="small" />} onClick={() => console.log('log')} />
                    <IconButton title="Comment" icon={<ChatBubbleOutlineIcon fontSize="small" />} onClick={() => console.log('log')} />
                    <IconButton title="Share" icon={<ShareIcon fontSize="small" />} onClick={() => console.log('log')} />
                </Stack>
                <Divider color="primary" sx={{ mt: 1 }} />

            </Stack>

        </Card>
    );
}
export default CustomCard;

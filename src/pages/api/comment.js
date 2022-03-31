import client from "./apollo-client";
import {gql} from "@apollo/client";

export const getComments = async (id) => {
    try {
        const {data} = await client.query({
            query: gql`query($id: String!)  {
                CommentByPost(id: $id) {
                    body
                    email
                    name
                }
            }`,
            variables: {
                id,
            }
        });
        return data.CommentByPost
    } catch (e) {
        console.log("error", e)
        return {
            props: {
                data: "error: " + e.message,
            }
        }
    }
}

const ADD_COMMENT = gql`query ($input: NewComment!){
    CreateComment(input: $input)
}`
export const SendComment = async (input) => {
    try {
        const {data} = await client.query({
            query: ADD_COMMENT,
            variables: {
                input,
            }
        });
        return data
    } catch (e) {
        console.log("error", e)
        return {
            props: {
                data: "error: " + e.message,
            }
        }
    }
}

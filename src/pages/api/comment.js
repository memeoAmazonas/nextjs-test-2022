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

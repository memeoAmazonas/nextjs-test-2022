import client from "./apollo-client";
import {gql} from "@apollo/client";

export const getPost = async () => {
    try {
        const {data} = await client.query({
            query: gql`
                query  {
                    Posts {
                        id
                        title
                        body
                        comments
                        user {
                            name
                        }
                    }
                }
            `
        });
        return data.Posts
    } catch (e) {
        console.log("error", e)
        return {
            props: {
                data: "error: " + e.message,
            }
        }
    }
}

const ADD_POST = gql`query ($input: NewPost!){
    CreatePost(input: $input)
}`
export const CreatePost = async (input) => {
    try {
        const {data} = await client.query({
            query: ADD_POST,
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

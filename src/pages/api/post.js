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

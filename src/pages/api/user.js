import client from "./apollo-client";
import {gql} from "@apollo/client";

const ADD_USER = gql`query ($input: NewUser!){
    CreateUser(input: $input)
}`
export const CreateUser = async (input) => {
    try {
        const {data} = await client.query({
            query: ADD_USER,
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


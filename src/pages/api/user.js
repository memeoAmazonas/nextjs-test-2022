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

const LOGIN = gql`query ($email: String!){
    GetUserByEmail(email: $email){
        name
        id
    }
}`
export const onLogin =  async (email) => {
    try {
        const {data} = await client.query({
            query: LOGIN,
            variables: {
                email,
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


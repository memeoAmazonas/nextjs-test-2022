export function NewPostMapper(payload) {
    const { nameUser, body, id } = payload;
    const title  = body.length > 10 ? body.substring(0,10) : body;
    const user = {
        name: nameUser,
    }
    return {
        body,
        title,
        comments: 0,
        user,
        id
    }

}

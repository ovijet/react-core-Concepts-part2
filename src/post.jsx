export default function Post({post}){
    let {title,body}=post
    return(
        <>
            <p>{title}</p>
            <p>{body}</p>
        </>
    )
}
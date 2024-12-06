function Post(props)
{
    return(
        <div>
            <fieldset>
                <legend style={{fontWeight:"bold"}}>{props.name}</legend>
                <p>{props.title}</p>
            </fieldset>
        </div>
    )
}
export default Post;
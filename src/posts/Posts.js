import Post from './Post';

function Posts(props)
{
    return(
        <>       
        <div>
        ********Посты, которые можно удалить********
        <br/>
        <br/>
            {
                props.posts.map(post => (
                    <Post
                        key={post.id}
                        name={post.name}
                        title={post.title}
                        id={post.id}
                        removePost={props.removePost}
                    />
                ))
            }
        </div>
        </>
        
    )
}
export default Posts;
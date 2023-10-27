import Post from '../Post/Post'
import './Posts.scss'

function Posts() {

    const posts = [
        {
            id: 1,
            userId: 1,
            name: "Heba Assy",
            desc: "FREE PALESTINE FREE PALESTINE FREE PALESTINE.✌️",
            img: "https://images.pexels.com/photos/11556007/pexels-photo-11556007.jpeg?auto=compress&cs=tinysrgb&w=600",
            profilePic: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            userId: 2,
            name: "Heba Assy",
            profilePic: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ]
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts
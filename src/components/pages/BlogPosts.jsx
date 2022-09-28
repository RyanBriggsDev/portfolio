import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from "../../firebase";
import { useEffect, useState } from "react";
import { query, collection, getDocs } from 'firebase/firestore';
import Post from '../Post';
import Header from '../layout/Header'

function BlogPosts() {

    const [ user, error ] = useAuthState(auth);

    const [ blogPosts, setBlogPosts ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getBlogPosts = async () => {
            try {
              const q = query(collection(db, 'blogPosts'))
              const docSnap = await getDocs(q)
              let posts = []
              docSnap.forEach((data) => {
                return posts.push({
                  id: data.id,
                  data: data.data()
                })
              })
              setBlogPosts(posts)
              setLoading(false)
            } catch (error) {
              console.log(error)
            }
          }
          getBlogPosts()
    }, [])

    if(loading) return <h1>Loading...</h1>

    if(blogPosts) return (
        <div className='content-grid'>
            <Header headerText='Blog Posts' 
                headerDesc="Check out my blog posts. See what I've been learning."
                btnText=''
                to=''
                display='none'
            />
            <div className='blog-posts'>
            {blogPosts.map((blogPost) => (
                <Post
                    title={blogPost.data.title}
                    content={blogPost.data.content}
                    datePosted={blogPost.data.datePosted}
                    key={blogPost.id}
                >
                </Post>
            ))}
            </div>
        </div>
    )
}

export default BlogPosts 
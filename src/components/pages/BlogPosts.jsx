import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from "../../firebase";
import { useEffect, useState } from "react";
import { query, collection, getDocs } from 'firebase/firestore';

function BlogPosts() {

    const [ user, error ] = useAuthState(auth);

    const [ blogPosts, setBlogPosts ] = useState(null)
    const [ loading, setLoading ] = useState(false)

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
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(() => {
        getBlogPosts()
    }, [])

    if(blogPosts) {
        {console.log(blogPosts);}
    }

  return (
    <div>BlogPosts</div>
  )
}

export default BlogPosts
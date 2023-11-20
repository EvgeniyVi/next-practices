import Image from 'next/image'
import './style.scss'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    console.log('error')
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  console.log(params)
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  }
}

const BlogId = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className="container">
      <div className="top">
        <div className="info">
          <h1 className="title">{data.title}</h1>
          <p className="desc">{data.desc}</p>
          <div className="author">
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className="avatar"
            />
            <span className="username">{data.username}</span>
          </div>
        </div>
        <div className="imageContainer">
          <Image src={data.img} alt="" fill className="image" />
        </div>
      </div>
      <div className="content">
        <p className="text">{data.content}</p>
      </div>
    </div>
  )
}

export default BlogId

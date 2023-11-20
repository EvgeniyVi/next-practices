import Link from 'next/link'
import Image from 'next/image'
import './style.scss'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    console.log('error')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className="mainContainer">
      {data.map((item) => (
        <Link
          href={`blog/${item.id}`}
          className="container__blog"
          key={item.id}
        >
          <div className="imageContainer">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="image"
            />
          </div>
          <div className="content">
            <h1 className="title">{item.title}</h1>
            <p className="desc">{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog

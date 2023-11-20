'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import './style.scss'
import Button from '../../components/Button/Button'
import { items } from './data'
import { imgLoader } from '../../utils/helpers'

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }
  return notFound()
}

function Category({ params }) {
  console.log(params)
  // console.log(params);
  const data = getData(params.category)
  return (
    <div>
      <h1 className="catTitle">{params.category}</h1>

      {data.map((item) => (
        <div className="item__id" key={item.id}>
          <div className="content">
            <h1 className="title__item">{item.title}</h1>
            <p className="desc">{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className="imgContainer">
            <Image
              className="img"
              fill
              src={item.image}
              alt={item.title}
              loader={() => imgLoader(item.image)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category

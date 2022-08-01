import React from 'react'
import Context from './Context'

type Props = {
    title: string,
    content: string,
    commentsQty: number,
    tags: string[]
    // 8 - Enum
    category : Category
}
export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P  = "Python"
}

const Destructuring = ({title, content, commentsQty, tags, category} : Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de Comentários: {commentsQty}</p>
        <div>
        {tags.map((tag) =>(
                <span>#{tag}</span>
        ))}
        </div>
        <h4>
          {category}
        </h4>

        
    </div>
  )
}

export default Destructuring
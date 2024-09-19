import React from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
  const { id } = useParams()

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{id}</p>
    </section>
  )
}

export default ProductDetail

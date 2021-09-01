import React from "react"
import PropTypes from "prop-types"
import defaultImage from "../../../assets/default-image.jpeg"

const Product = ({ image, name, price }) => {
  const url = image && image.url
  return (
    <article className="product">
      <h4>single item</h4>
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 0.0}</p>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
// Product.defaultProps = {
//   image: defaultImage,
//   name: "name",
//   price: 0,
// }

export default Product

import React from 'react'
import './index.css'

const EachProduct = ({eachItem, noColumns, searchInput}) => {
  const {productBadge, productImage, productTitle, productVariants} = eachItem

  const returnBgColour = (value, index) => {
    if (searchInput) {
      return (
        `{value['v'$(index + 1)].toLowerCase()}`.includes(
          searchInput.toLowerCase(),
        ) && 'special-green-bg'
      )
    }
    return ''
  }

  return (
    <div
      className={`each-item-card ${
        noColumns === 'two' ? 'each-item-card-column' : ''
      }`}
    >
      <div className="top-btn-card">
        <button
          type="button"
          className={`product-badge ${
            noColumns === 'two' ? 'btn-with-two-columns' : ''
          }`}
        >
          {productBadge}
        </button>
      </div>
      <div className="image-card">
        <img
          src={productImage}
          className={`cap ${noColumns === 'two' ? 'cap-for-two-column' : ''}`}
          alt="tharun"
        />
      </div>
      <div className="product-details">
        <h4 className="product-title">{productTitle}</h4>
        {productVariants.map((variant, i) => (
          <p
            className={`variant ${
              noColumns === 'two' && 'variant-two-column-bg'
            } ${returnBgColour(variant, i)}`}
          >
            {variant[`v${i + 1}`]}
          </p>
        ))}
      </div>
    </div>
  )
}

export default EachProduct

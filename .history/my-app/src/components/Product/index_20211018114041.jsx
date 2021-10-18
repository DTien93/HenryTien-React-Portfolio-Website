import React from 'react'
import '../Product/product.css'

const Product = ({img, link}) => {
    return (
        <div className='product'>
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
        </div>
    )
}

export default Product

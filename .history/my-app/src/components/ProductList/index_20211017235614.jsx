import React from 'react'
import Product from '../Product'
import '../ProductList/productlist.css'

const ProductList = () => {
    return (
        <div className='product-list'>
            <div className="product-list__texts">
                <h1 className="product-list__heading">My Project I built</h1>
                <p className="product-list__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, qui ipsa cumque quo aperiam modi laboriosam tempore, molestiae, neque deserunt necessitatibus. Praesentium cum maxime amet nihil quaerat dolorem illum in.
                </p>
            </div>
            <div className="product-list__projects">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product/>
            </div>
        </div>
    )
}

export default ProductList

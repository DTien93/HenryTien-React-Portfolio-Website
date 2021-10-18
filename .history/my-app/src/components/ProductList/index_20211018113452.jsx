import React from 'react'
import Product from '../Product'
import '../ProductList/productlist.css'
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className='product-list'>
            <div className="product-list__texts">
                <h1 className="product-list__heading">My Project from Henry Tien</h1>
                <p className="product-list__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, qui ipsa cumque quo aperiam modi laboriosam tempore, molestiae, neque deserunt necessitatibus. Praesentium cum maxime amet nihil quaerat dolorem illum in.
                </p>
            </div>
            <div className="product-list__projects">
                {
                    products.map(product => (

            ))}
            </div>
        </div>
    )
}

export default ProductList

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
                    This is my project i make after leaning HTML, CSS, Javascript, ReactJS, Node JS
                </p>
            </div>
            <div className="product-list__projects">
                {
                    products.map((product) => (
                        <Product key={product.id} img={product.img} link={product.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList

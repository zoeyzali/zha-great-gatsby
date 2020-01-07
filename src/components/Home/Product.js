import React from 'react'
import Img from 'gatsby-image'


const Product = ( { product } ) => {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
                <Img fluid={product.image.fluid} className="card-img-top" />
                <div className="card-body">
                    <h6 className="text-capitalize">{product.title}</h6>
                    <h6>${product.price}</h6>
                    <button type="button" className="btn btn-pink">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
import React from 'react'
import Img from 'gatsby-image'


const Product = ( { product } ) => {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
                <div style={{ maxHeight: "426px" }}>
                    <Img fluid={product.image.fluid} className="card-img-top" />
                    <div className="card-body text-center">
                        <h6 className="text-capitalize">{product.title}</h6>
                        <h6>${product.price}</h6>
                        <button type="button" className="btn btn-pink snipcart-add-item"
                            data-item-id={product.id}
                            data-item-name={product.title}
                            data-item-price={product.price}
                            data-item-image={product.image.fluid.src}
                            data-item-url="https://coffeeeshop-gatsby.netlify.com/"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
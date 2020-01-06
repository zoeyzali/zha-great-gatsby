import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'


const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <Title title="our story" />
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio libero, consectetur eget nunc id, ullamcorper porta lacus. Maecenas bibendum turpis augue, non euismod nunc cursus id. Vestibulum at velit at neque pretium vehicula. Sed id molestie ligula, non consequat justo. Morbi sit amet elementum neque. In ultrices auctor mollis. Nunc aliquam velit lectus, nec tincidunt ex placerat eu.
                        </p>
                        <Link to="/about/">

                            <button className="btn btn-pink text-uppercase">About Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info

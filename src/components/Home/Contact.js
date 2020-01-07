import React from 'react'
import Title from '../Globals/Title'


const Contact = () => {
    return (
        <section className="contact py-5 mt-5">
            <Title title="Contact Me" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/zoeecoding@gmail.com" method="POST">
                        <div className="form-group">
                            <input
                                type="text" className="form-control" name="name" id="name" placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <input
                                type="email" className="form-control" name="email" id="email" placeholder="jane@idk.com" />
                        </div>
                        <div className="form-group">
                            <textarea type="message" className="form-control" name="message" id="message" placeholder="Try sending a message, it works!" rows="5" />
                        </div>
                        <button type="submit" className="btn btn-pink btn-block text-uppercase mt-3">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
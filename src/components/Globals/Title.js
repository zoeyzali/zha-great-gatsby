import React from 'react'


const Title = ( { title } ) => {
    return (
        <div className="row">
            <div className="col text-center mb-3">
                <h3 className="display-4 text-uppercase">{title}</h3>
            </div>
        </div>
    )
}

export default Title

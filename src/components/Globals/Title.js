import React from 'react'


const Title = ( { title } ) => {
    return (
        <div className="row">
            <div className="col text-center mb-2">
                <h3 className="title display-4 text-uppercase">{title}</h3>
            </div>
        </div>
    )
}

export default Title

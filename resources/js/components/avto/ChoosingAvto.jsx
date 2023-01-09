import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';

function ChoosingAvto () {
    const getCars = () => {
        axios.get('/get-cars')
            .then((res) => console.log('res', res))
            .catch((err) => console.log('error', err))
    }

    useEffect(() => {
        getCars()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChoosingAvto;

if (document.getElementById('app')) {
    ReactDOM.render( <ChoosingAvto/>, document.getElementById('main'));
}


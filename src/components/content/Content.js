import React from 'react';
import './Content.css'
import Map from './Map'
import FormOrder from './FormOrder'


class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-7 pb-2">
                        <Map />
                    </div>
                    <div className="col-md-5">
                        <div className="shadow-sm p-3 bg-white">
                          <FormOrder />
                        </div>
                        <div className="shadow-sm p-3 bg-white mt-3">
                            ok
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Content;

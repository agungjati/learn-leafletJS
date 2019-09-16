import React from 'react';
import './Post.css'
import Map from './Map'
import FormPost from './FormPost'
import FormSearch from './FormSearch'

class Post extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-7 pb-2">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <FormSearch />
                                <hr />
                                <Map />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <FormPost />
                    </div>
                </div >
            </div >
        );
    }
}

export default Post;

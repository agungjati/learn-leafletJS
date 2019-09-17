import React from 'react';
import './Post.css'
import Map from './Map'
import FormPost from './FormPost'

class Post extends React.Component {
    render() {
        return (
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-7 pb-2">
                        
                                <Map />
                        
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

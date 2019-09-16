import React from 'react';

class FormSearch extends React.Component {
    render() {
        return (
            <div className="d-flex">
                <input className="form-control" /> &nbsp;
                <button className="btn btn-primary">Search</button>
            </div>
        );
    }
}

export default FormSearch;

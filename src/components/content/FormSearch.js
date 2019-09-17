import React from 'react';

class FormSearch extends React.Component {
    render() {
        return (
            <form className="d-flex" onSubmit={this.props.onSubmit}>
                <input
                    className="form-control"
                    value={this.props.search}
                    onChange={this.props.onChange}
                /> &nbsp;
            <button type="submit" className="btn btn-primary">Search</button>
            </form>
        );
    }
}

export default FormSearch;

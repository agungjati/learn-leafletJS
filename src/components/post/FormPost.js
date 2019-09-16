import React from 'react';
import './FormPost.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FormPost extends React.Component {
    state = {
        startDate : new Date()
    }

    setStartDate = (date) => {
        this.setState({ startDate : date })
    }

    render() {
        return (
            <div className="shadow-sm p-3 bg-white">
                        <h5>Spot Description</h5>
                            <hr />
                    <div className="form">
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <label className="px-2 label">Spot name </label>
                            <input name="name" type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <label className="px-2 label">Street </label>
                            <input name="street" type="text" className="form-control" placeholder="Enter street" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <label className="px-2 label">Date </label>
                            <DatePicker 
                            className="form-control"
                            selected={this.state.startDate} 
                            onChange={this.setStartDate}  />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <label className="px-2 label">Time </label>
                            <input name="time" type="time" className="form-control" placeholder="Enter time" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <label className="px-2 label">Price </label>
                            <input name="price" type="number" className="form-control" defaultValue="100.000" />
                        </div>
                        <div className="d-flex align-items-center justify-content-end mt-2">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default FormPost;

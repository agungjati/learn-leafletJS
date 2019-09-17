import React from 'react';
import './FormOrder.css'

class FormOrder extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="px-3 label">Name </label>
                    <input name="name" type="text" className="form-control" placeholder="Enter name" />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="px-3 label">Email </label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="px-3 label">Date </label>
                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="px-3 label">Time </label>
                    <select name="time" className="custom-select">
                        <option>10:00 - 10:30 (30 minutes)</option>
                        <option>10:00 - 11:30 (1 hours 30 minutes)</option>
                        <option>13:00 - 14:00 (2 hours)</option>
                    </select>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <label className="px-3 label">Price </label>
                    <input name="price" type="number" className="form-control border-0" disabled value="100.000" />
                </div>
                <div className="d-flex align-items-center justify-content-end mt-2">
                    <button className="btn btn-primary">Order now</button>
                </div>
            </div>
        );
    }
}

export default FormOrder;
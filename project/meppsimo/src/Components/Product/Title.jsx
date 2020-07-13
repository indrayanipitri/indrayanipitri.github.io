import React from 'react';
import './Title.css';

export default function Title({ title }) {
    return (
        <div className="row">
            <div className="col mx-auto text-center text-title">
                <h5 className=" font-weight-bold">
                    {title}
                </h5>
                <hr />
            </div>
        </div>
    )
}
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const DVideoCourse = () => {
    return (
        <div className='container-fluid'>
            <div className="d-flex">

                <div className="col-sm-2">
                    <Sidebar />
                </div>

                <div className="col-sm-10">

                    Content Goes Here
                </div>
            </div>
        </div>
    );
};

export default DVideoCourse;
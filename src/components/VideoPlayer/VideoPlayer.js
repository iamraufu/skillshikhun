import React from 'react';
import webData from '../../data/video/webdevelopment.json';

const VideoPlayer = () => {

    console.log(webData);

    return (
        // All Modules 
        <div>
            <div className="milestones">
                <div className="milestone border-b">
                    <div className="flex">
                        <div className="checkbox"><input type="checkbox" /></div>
                        <div>
                            <p>
                                Milestone 1 name
                                <span><i className='fas fa-chevron-down'></i></span>
                            </p>
                        </div>
                    </div>
                    <div className="hidden_panel">
                        <div className="module border-b">
                            <p>Module Name</p>
                        </div>
                    </div>
                </div>

                <div className="milestone border-b">
                    <div className="flex">
                        <div className="checkbox"><input type="checkbox" /></div>
                        <div>
                            <p>
                                Milestone 1 name
                                <span><i className='fas fa-chevron-down'></i></span>
                            </p>
                        </div>
                    </div>
                    <div className="hidden_panel">
                        <div className="module border-b">
                            <p>Module Name</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="doneList">
                {/* Done List will Load here */}
            </div>
        </div>
    );
};

export default VideoPlayer;
//  https://www.youtube.com/watch?v=ZCvemsUfwPQ

import React from "react";
import "./Modal.css";

const Modaldetails = ({ modalOpen, setModalOpen }) => {

    return (
        <div>
            <h1>Hey, click on the button to open the modal.</h1>

            {modalOpen &&
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                            >
                                X
                            </button>
                        </div>
                        <div className="title">
                            <h1>Are You Sure You Want to Continue?</h1>
                        </div>
                        <div className="body">
                            <p>The next page looks amazing. Hope you want to go there!</p>
                        </div>
                        <div className="footer">
                            <button
                                onClick={() => {
                                    setModalOpen(false);
                                }}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>
                            <button>Continue</button>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default Modaldetails;
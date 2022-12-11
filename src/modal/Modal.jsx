import React, { useState} from "react";
import Modaldetails from "./Modaldetails";

const Modal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <div>
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Open
                </button>
            </div>
            <Modaldetails modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    );
}

export default Modal;

import React from 'react'

//CSS
import Style from './Modal.module.css';

type Props = {
    children: React.ReactNode;
}

const Modal = ({children}: Props) => {

    const colseModal = (e: React.MouseEvent): void =>{
        const modal = document.querySelector('#modal');
        modal!.classList.add("hide");

    };



    return (
        <div id='modal' className='hide'>
            <div className={Style.fade}  onClick={colseModal}>

            </div>
            <div className={Style.modal}>
                <h2>Texto Modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal
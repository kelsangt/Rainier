import React from 'react';
import { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }){
    const mRef = useRef();
    const [value, setValue] = useState();

    useEffect(()=> {
        setValue(mRef.current)
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={mRef} />
        </>
    );
}

export function Modal({ whenClosing, children }){
    const modalActual = useContext(ModalContext);
    
    if(!modalActual) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="backgroundModal"  />
            <div id="contentModal" onMouseLeave={whenClosing}>           
                {children}
            </div>
        </div>,
        modalActual 
    )
}
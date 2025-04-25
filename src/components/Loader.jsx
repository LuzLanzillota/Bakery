import React from 'react';
import { BeatLoader } from 'react-spinners';

function Loader() {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'white'
    };

    return (
        <div style={loaderStyle}>
            <BeatLoader
                size={15}
                margin={5}
                color="#E92E3B"
                loading={true}
            />
        </div>
    );
}

export default Loader;

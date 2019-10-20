import React from 'react';
import { Button } from '@bootstrap-styled/v4';
//import BootstrapProvider from '@bootstrap-styled/provider';

export default function MorphButton({
    isMorphReady
}) {
    const morphedButtonStyleContainer = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px'
    };

    if (isMorphReady) {
        return (
            <div style={morphedButtonStyleContainer}>
                <Button color="primary" size="lg">Morph</Button>
            </div>
        );
    }

    return (
        <div style={morphedButtonStyleContainer}>
            <Button color="primary" size="lg" disabled>Morph</Button>
        </div>
    );
}

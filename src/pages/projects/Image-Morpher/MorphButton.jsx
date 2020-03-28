import React from 'react';
import _ from 'lodash';
import { Button } from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import axios from 'axios';
import { startMorph, morphSuccess, morphFailure } from '../../../scripts/Redux/actions/imageMorpher';
import logMorphError from './logMorphError';
const morph_endpoint = 'https://sammyjaved.com/morph'

function MorphButton({
    isMorphButtonClickable,
    isLoading,
    isSuccess,
    isFailure,
    onMorphStart,
    onMorphSuccess,
    onMorphFailure,
    morphedImageURL,
}) {
    const morphedButtonStyleContainer = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px'
    };

    const onMorphClick = () => {
        onMorphStart();
        let data = new FormData() ;
        const leftDropzoneInput = document.getElementById('left-dropzone-input').files[0];
        const rightDropzoneInput = document.getElementById('right-dropzone-input').files[0];
        data.append('Image-1', leftDropzoneInput);
        data.append('Image-2', rightDropzoneInput);
        data.append('isSequence', 'True');
        data.append('stepSize', '20');

        axios.post(morph_endpoint, data, {headers: {'Authorization': 'ImageMorpherV1'}})
        .then(response => {
            console.log(response);
            let imgSrc = response.data;
            onMorphSuccess(imgSrc);
        })
        .catch(error => {
            logMorphError(error.message)
            console.error(error)
            onMorphFailure();
        });
      }

    
    if (isSuccess) {
        return (
            <div style={morphedButtonStyleContainer}>
                <Button color="primary" size="lg">
                <a href={morphedImageURL}>
                    <span style={{color: 'white'}}>
                        {morphedImageURL}
                    </span>
                </a>
                </Button>
            </div>
        );
    }

    if (isFailure) {
        return (
            <div style={morphedButtonStyleContainer}>
                <Button color="primary" size="lg" disabled>Morph Failure!</Button>
            </div>
        );
    }

    if (isMorphButtonClickable) {
        if (isLoading) {
            return (
                <div>
                    <div style={morphedButtonStyleContainer}>
                        <Button color="primary" size="lg">
                            Loading...
                        </Button>
                    </div>
                </div>
            );
        }

        return (
            <div style={morphedButtonStyleContainer}>
                <Button color="primary" size="lg" onClick={onMorphClick}>
                    Morph
                </Button>
            </div>
        );
    }

    return (
        <div style={morphedButtonStyleContainer}>
            <Button color="primary" size="lg" disabled>Morph</Button>
        </div>
    );
}

const mapStateToProps = state => ({
    isMorphButtonClickable: _.get(state, 'imageMorpher.leftImage') && _.get(state, 'imageMorpher.rightImage'),
    isLoading: _.get(state, 'imageMorpher.ui.isLoading'),
    isSuccess: _.get(state, 'imageMorpher.ui.isSuccess'),
    isFailure: _.get(state, 'imageMorpher.ui.isFailure'),
    morphedImageURL: _.get(state, 'imageMorpher.ui.responseData'),
});

const mapDispatchToProps = dispatch => ({
    onMorphStart: () => dispatch(startMorph()),
    onMorphSuccess: (responseData) => dispatch(morphSuccess(responseData)),
    onMorphFailure: () => dispatch(morphFailure()),
});

export default connect (
    mapStateToProps,
    mapDispatchToProps
    )(MorphButton);

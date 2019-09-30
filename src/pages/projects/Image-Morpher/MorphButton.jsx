import React from 'react';
import _ from 'lodash';
import { Button } from '@bootstrap-styled/v4';
import { connect } from 'react-redux';
import axios from 'axios';
import { startMorph, morphSuccess, morphFailure } from '../../../scripts/Redux/actions/imageMorpher';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const base_url = 'http://sammyjaved.com:8088';
const morph_endpoint = base_url + '/morph/';

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

    const appendImage = (imgSrc, id) => {
        var imgElement = document.getElementById(id);
        var image = new Image();
        image.src = imgSrc;
        imgElement.appendChild(image);
    }

    const onMorphClick = () => {
        onMorphStart();
        console.log('hey');
        let data = new FormData() ;
        const leftDropzoneInput = document.getElementById('left-dropzone-input').files[0];
        const rightDropzoneInput = document.getElementById('right-dropzone-input').files[0];
        data.append('Image-1', leftDropzoneInput);
        data.append('Image-2', rightDropzoneInput);

        axios.post(morph_endpoint, data, {headers: {'Authorization': 'ImageMorpherV1'}})
        .then(response => {
            console.log(response);
            let imgSrc = response.data;
            appendImage(imgSrc, "morphed-img");
            morphedImageURL = imgSrc;
            console.log("Success!");
            onMorphSuccess(imgSrc);
        })
        .catch(error => {
            console.error(error)
            onMorphFailure();
        });

        console.log('submitting...')
        // event.preventDefault();
        return 1;
      }

    
    if (isSuccess) {
        return (
            <div style={morphedButtonStyleContainer}>
                <Alert variant="success">
                    <a href={morphedImageURL}>
                        <span>
                            {morphedImageURL}
                        </span>
                    </a>
                </Alert>
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
                            Morph
                        </Button>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
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
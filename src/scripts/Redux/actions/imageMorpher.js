import { 
    UPLOAD_IMAGE_LEFT,
    UPLOAD_IMAGE_RIGHT,
    START_MORPH,
    MORPH_SUCCESS,
    MORPH_FAILURE,
} from './actionTypes';

export function uploadImageLeft(acceptedFiles) {
    return {
        type: UPLOAD_IMAGE_LEFT,
        acceptedFiles,
    };
}

export function uploadImageRight(acceptedFiles) {
    return {
        type: UPLOAD_IMAGE_RIGHT,
        acceptedFiles,
    };
}

export function startMorph() {
    return {
        type: START_MORPH,
        isLoading: true,
    };
}

export function morphSuccess(responseData) {
    return {
        type: MORPH_SUCCESS,
        isLoading: false,
        responseData: responseData
    };
}

export function morphFailure() {
    return {
        type: MORPH_FAILURE,
        isLoading: false,
    };
}

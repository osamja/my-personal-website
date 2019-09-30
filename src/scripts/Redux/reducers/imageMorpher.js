import { 
    UPLOAD_IMAGE_LEFT,
    UPLOAD_IMAGE_RIGHT,
    START_MORPH,
    MORPH_SUCCESS,
    MORPH_FAILURE,
} from '../actions/actionTypes';

export default function imageMorpher(state = {}, action) {
    switch (action.type) {
        case UPLOAD_IMAGE_LEFT:
            console.log('UPLOAD_IMAGE_LEFT Action')
            return { 
                ...state,
                leftImage: {
                    isLeftImageUploaded: true,
                    file: action.acceptedFiles,
                }
                
                
            }
        case UPLOAD_IMAGE_RIGHT:
            console.log('UPLOAD_IMAGE_RIGHT Action')
            return {
                ...state,
                rightImage: {
                    isRightImageUploaded: true,
                    file: action.acceptedFiles,
                }
                
            }
        case START_MORPH:
            console.log('START_MORPH Action')
            return {
                ...state,
                ui: {
                    isLoading: action.isLoading,
                }
            }
        case MORPH_SUCCESS:
            console.log('MORPH_SUCCESS Action')
            return {
                ...state,
                ui: {
                    isLoading: action.isLoading,
                    isSuccess: true,
                    responseData: action.responseData
                }
            }
        case MORPH_FAILURE:
            console.log('MORPH_FAILURE Action')
            return {
                ...state,
                ui: {
                    isLoading: action.isLoading,
                    isFailure: true,
                }
            }
        default:
            return state;
    }
}

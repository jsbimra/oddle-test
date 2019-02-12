import * as types from './actionTypes';

export function openModal(payload) {
    // console.log('ACTION: openModal ', movie);
    if (Object.keys(payload).length) {
        const detailContainer = document.querySelector('.modal-wrapper');
        detailContainer.classList.add('expand');
        // console.log('yes found object');
        return {
            type: types.OPEN_MODAL,
            modalData: payload
        }
    }
}
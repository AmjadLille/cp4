import { STICKER_LIST_REQUEST, STICKER_LIST_SUCCESS, STICKER_LIST_FAIL, STICKER_DETAILS_REQUEST, STICKER_DETAILS_SUCCESS, STICKER_DETAILS_FAIL } from '../types/stickerTypes';

export const stickerListReducer = (state = { stickers: [], loading: null, error: null }, action) => {
  switch (action.type) {
    case STICKER_LIST_REQUEST:
      return {
        loading: true,
        stickers: [],
      };
    case STICKER_LIST_SUCCESS:
      return {
        loading: false,
        stickers: action.payload,
      };
    case STICKER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const stickerDetailsReducer = (state = { sticker: { reviews: [] } }, action) => {
  switch (action.type) {
    case STICKER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case STICKER_DETAILS_SUCCESS:
      return {
        loading: false,
        sticker: action.payload,
      };
    case STICKER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

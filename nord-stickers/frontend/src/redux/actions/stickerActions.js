import { STICKER_LIST_REQUEST, STICKER_LIST_SUCCESS, STICKER_LIST_FAIL, STICKER_DETAILS_REQUEST, STICKER_DETAILS_SUCCESS, STICKER_DETAILS_FAIL } from '../types/stickerTypes';
import axios from 'axios';

export const listStickers = () => async (dispatch) => {
  try {
    dispatch({ type: STICKER_LIST_REQUEST });

    const { data } = await axios.get('/api/stickers');

    dispatch({
      type: STICKER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STICKER_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const listStickerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STICKER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/stickers/${id}`);

    dispatch({
      type: STICKER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STICKER_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

import axios from 'axios';
import { eventsFail, eventsRequest, eventsSuccess } from '../slices/eventsSlice';

export const getEvents = async (dispatch) => {
  try {
    dispatch(eventsRequest());
    const { data } = await axios.get('/api/v1/event');
    dispatch(eventsSuccess(data));
  } catch (error) {
    dispatch(eventsFail(error.response.data.message));
  }
};

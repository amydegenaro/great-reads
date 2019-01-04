import axios from 'axios'

const GOT_RESULTS_BY_TITLE = 'GOT_RESULTS_BY_TITLE'

const gotResultsByTitle = list => ({
  type: GOT_RESULTS_BY_TITLE,
  list
})

export const getResultsByTitle = search => async dispatch => {
  try {
    const {data} = await axios.post('/api/search/title', {search})
    dispatch(gotResultsByTitle(data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GOT_RESULTS_BY_TITLE:
      return action.list
    default:
      return state
  }
}

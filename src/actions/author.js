const LIST_AUTHORS = 'AUTHORS/LIST_AUTHORS';
const ADD_AUTHOR = 'AUTHORS/ADD_AUTHORS';
const UPDATE_AUTHORS = 'AUTHORS/UPDATE_AUTHORS';
const DELETE_AUTHORS = 'AUTHORS/DELETE_AUTHORS';


const listAuthors = authors => {
  return {
    type: LIST_AUTHORS,
    authors
  }
}

const deleteAuthor = authors => {
  return {
    type: DELETE_AUTHORS,
    authors
  }
}

const addAuthor = author => {
  return {
    type: ADD_AUTHOR,
    author
  }
}

const updateAuthor = author => {
  return {
    type: UPDATE_AUTHORS,
    author
  }
}

export {
  LIST_AUTHORS,
  ADD_AUTHOR,
  UPDATE_AUTHORS,
  DELETE_AUTHORS,
  listAuthors,
  deleteAuthor,
  addAuthor,
  updateAuthor
}

import {
  listAuthors,
  LIST_AUTHORS,
  deleteAuthor,
  DELETE_AUTHORS,
  addAuthor,
  ADD_AUTHOR,
  updateAuthor,
  UPDATE_AUTHORS
} from "../author";

describe('Author Actions Test', () => {

  it('should return list authors action object', () => {
    const authors = [{
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }]

    const listAuthorsAction = listAuthors(authors);

    expect(listAuthorsAction.authors).toEqual(authors);
    expect(listAuthorsAction.type).toEqual(LIST_AUTHORS);
  });

  it('should return delete author action object', () => {
    const index = 'firstName-lastName'

    const deleteAuthorAction = deleteAuthor(index);

    expect(deleteAuthorAction.index).toEqual(index);
    expect(deleteAuthorAction.type).toEqual(DELETE_AUTHORS);
  });

  it('should return add author action object', () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }

    const addAuthorAction = addAuthor(author);

    expect(addAuthorAction.author).toEqual(author);
    expect(addAuthorAction.author).toHaveProperty("id");
    expect(addAuthorAction.author).toHaveProperty("firstName");
    expect(addAuthorAction.author).toHaveProperty("lastName");
    expect(addAuthorAction.type).toEqual(ADD_AUTHOR);
  });

  it('should return update author action object', () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }

    const updateAuthorAction = updateAuthor(author);

    expect(updateAuthorAction.author).toEqual(author);
    expect(updateAuthorAction.author).toHaveProperty("id");
    expect(updateAuthorAction.author).toHaveProperty("firstName");
    expect(updateAuthorAction.author).toHaveProperty("lastName");
    expect(updateAuthorAction.type).toEqual(UPDATE_AUTHORS);
  });

});

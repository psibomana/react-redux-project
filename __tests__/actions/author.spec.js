import configureStore from 'redux-mock-store'
import * as AuthorActions from '../../src/actions/author'

describe('Author Actions Test', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureStore();
    const initialState = {
      AuthorReducer: [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        },
        {
          id: 'dan-wahlin',
          firstName: 'Dan',
          lastName: 'Wahlin'
        }
      ]
    };
    store = mockStore(initialState);
  })

  it('should return list authors action object', () => {
    const authors = [{
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }]

    store.dispatch(AuthorActions.listAuthors(authors));
    const action = store.getActions()[0];
    expect(action.authors).toEqual(authors);
    expect(action.type).toEqual(AuthorActions.LIST_AUTHORS);
  });

  it('should return delete author action object', () => {
    const authors = [{
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }]

    store.dispatch(AuthorActions.deleteAuthor(authors));
    const action = store.getActions()[0];
    expect(action.authors).toEqual(authors);
    expect(action.type).toEqual(AuthorActions.DELETE_AUTHORS);
  });

  it('should return add author action object', () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }

    store.dispatch(AuthorActions.addAuthor(author));
    const action = store.getActions()[0];
    expect(action.author).toEqual(author);
    expect(action.author).toHaveProperty("id");
    expect(action.author).toHaveProperty("firstName");
    expect(action.author).toHaveProperty("lastName");
    expect(action.type).toEqual(AuthorActions.ADD_AUTHOR);
  });

  it('should return update author action object', () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }

    store.dispatch(AuthorActions.updateAuthor(author));
    const action = store.getActions()[0];

    expect(action.author).toEqual(author);
    expect(action.author).toHaveProperty("id");
    expect(action.author).toHaveProperty("firstName");
    expect(action.author).toHaveProperty("lastName");
    expect(action.type).toEqual(AuthorActions.UPDATE_AUTHORS);
  });

});

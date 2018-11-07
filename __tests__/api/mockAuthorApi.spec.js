import AuthorApi from '../../src/api/mockAuthorApi'

describe('Author API', () => {
  it('should return a list of authors', async () => {
    const authors = await AuthorApi.getAllAuthors();
    expect(authors.length).toEqual(3);
  })

  it('should return an author', async () => {
    const author =
      await AuthorApi.getAuthorByID('scott-allen');
    expect(author)
      .toEqual(
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        });
  })

  it('should return the newly created author', async () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'firstName',
      lastName: 'lastName'
    }
    const savedAuthor = await AuthorApi.saveAuthor(author);
    expect(savedAuthor).toEqual(author);
  })
})

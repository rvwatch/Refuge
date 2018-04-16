import { getCurrentUser } from '../getCurrentUser';
  
describe('getCurrentUser', () => {
  let user;
  beforeEach(() => {
    user = { username: 'rick' };
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve( user );
        })
    }));
  });

  it('should fetch with the correct params', async () => {
    const url = `http://localhost:3000/currentuser`;
    const fetchBody = {
      method: "GET",
      credentials: 'include'
    }
    await getCurrentUser();
    expect(window.fetch).toHaveBeenCalledWith(url, fetchBody);
  });

  it('should return a user on successful post', async () => {
    const expected = {"username": "rick"};
    const result = await getCurrentUser(user);
    expect(result).toEqual(expected);
  });

  it('should return an error message if the fetch breaks', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: 'error'
      })
    );
    const expected = "error";
    const result = getCurrentUser(user);
    expect(result).rejects.toEqual(expected);
  });

});
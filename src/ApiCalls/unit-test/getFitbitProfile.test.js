import {getFitbitProfile} from '../getFitbitProfile';

describe('getFitbitProfile', () => {
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
    const url = `http://localhost:3000/fb-profile`;

    await getFitbitProfile();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a user id on successful post', async () => {
    const expected = {"username": "rick"};
    const result = await getFitbitProfile(user);
    expect(result).toEqual(expected);
  });

  it('should return a message if the email already exists', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: 'error'
      })
    );
    const expected = "error";
    const result = getFitbitProfile(user);
    expect(result).rejects.toEqual(expected);
  });

});
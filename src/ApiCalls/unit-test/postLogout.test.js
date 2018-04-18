import { postLogout } from '../postLogout';
import * as mock from '../../MockData/';

describe('postLogout', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve({});
        })
    }));
  });

  it('should fetch with the correct params', async () => {
    const url = `http://localhost:3000/logout`;
    const fetchBody = { "method": "POST"};
    await postLogout();
    expect(window.fetch).toHaveBeenCalledWith(url, fetchBody);
  });

  it('should return an empty object', async () => {
    const expected = {};
    const result = await postLogout();
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
    const result = postLogout();
    expect(result).rejects.toEqual(expected);
  });

});
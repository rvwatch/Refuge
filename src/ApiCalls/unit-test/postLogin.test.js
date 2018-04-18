import { postLogin } from '../postLogin';
  
describe('postLogin', () => {
  let mockStepsTaken;
  beforeEach(() => {
    mockStepsTaken = { time: '12:00:00', value: '100' };
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve( mockStepsTaken );
        })
    }));
  });

  it('should fetch with the correct params', async () => {
    const url = `http://localhost:3000/login`;
    const fetchBody = {"body": "username=undefined&password=undefined", "headers": {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}, "method": "POST"};
    await postLogin();
    expect(window.fetch).toHaveBeenCalledWith(url, fetchBody);
  });

  it('should return a user on successful post', async () => {
    const expected = mockStepsTaken;
    const result = await postLogin(mockStepsTaken);
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
    const result = postLogin(mockStepsTaken);
    expect(result).rejects.toEqual(expected);
  });

});
import { getSteps } from '../getSteps';
  
describe('getSteps', () => {
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
    const url = `http://localhost:3000/steps-taken`;
  
    await getSteps();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a user on successful post', async () => {
    const expected = mockStepsTaken;
    const result = await getSteps(mockStepsTaken);
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
    const result = getSteps(mockStepsTaken);
    expect(result).rejects.toEqual(expected);
  });

});
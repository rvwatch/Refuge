import { getHeartRate } from '../getHeartRate';
  
describe('getHeartRate', () => {
  let mockHeartRate;
  beforeEach(() => {
    mockHeartRate = { time: '12:00:00', value: '67' };
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve( mockHeartRate );
        })
    }));
  });

  it('should fetch with the correct params', async () => {
    const url = `http://localhost:3000/hr-data`;
  
    await getHeartRate();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a user on successful post', async () => {
    const expected = mockHeartRate;
    const result = await getHeartRate(mockHeartRate);
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
    const result = getHeartRate(mockHeartRate);
    expect(result).rejects.toEqual(expected);
  });

});
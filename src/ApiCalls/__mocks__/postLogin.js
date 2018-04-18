export const postLogin = jest.fn().mockImplementation(() => ({
  status: 200,
  json: () =>
    new Promise(resolve => {
      resolve({user: 'ricardo'});
    })
}));

import axios from 'axios';

describe('GET /', () => {
  xit('should return a message', async () => {
    const res = await axios.get(`/article/all`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});

describe('Beach forecast functional tests', () => {
  it('should return a hello by node template repo', async () => {
    const { body, status } = await global.testRequest.get('/template');
    expect(status).toBe(200);
    // Make sure we use toEqual to check value not the object and array itself
    expect(body).toEqual([
      {
        msg: 'Hello node-template repo!',
      },
    ]);
  });
});

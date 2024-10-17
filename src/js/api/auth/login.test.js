// src/js/api/auth/login.test.js

import { login } from './login';
import * as storage from '../../storage/index.js';

// Mock fetch
global.fetch = jest.fn();

jest.mock('../../storage/index.js', () => ({
  load: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
}));

describe('login function', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should store a token when provided with valid credentials', async () => {
    // Mock fetch response
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: 'testToken', name: 'Test User' }),
      })
    );

    // Mock load to simulate localStorage having no token initially
    storage.load.mockReturnValue(null);

    await login('test@example.com', 'password123');

    // Verify save is called to store the token
    expect(storage.save).toHaveBeenCalledWith('token', 'testToken');
  });

  it('should throw an error when the response is not ok', async () => {
    // Mock fetch response as failed
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    // Expect an error to be thrown when login is called with wrong credentials
    await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow('Unauthorized');
  });
});

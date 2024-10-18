import { logout } from './logout';
import * as storage from '../../storage/index';

// Mocking local storage functions
jest.mock('../../storage/index', () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear the token and profile from storage', () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');
  });
});

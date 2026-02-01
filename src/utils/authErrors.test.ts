import { describe, it, expect } from 'vitest';
import { getAuthErrorMessage } from './authErrors';

describe('getAuthErrorMessage', () => {
  it('should return correct message for email-already-in-use error', () => {
    const error = { code: 'auth/email-already-in-use' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('This email is already registered. Please use a different email or log in.');
  });

  it('should return correct message for invalid-email error', () => {
    const error = { code: 'auth/invalid-email' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Invalid email address. Please check your email and try again.');
  });

  it('should return correct message for weak-password error', () => {
    const error = { code: 'auth/weak-password' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Password is too weak. Please use a stronger password (at least 6 characters).');
  });

  it('should return correct message for user-not-found error', () => {
    const error = { code: 'auth/user-not-found' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('No account found with this email address. Please sign up first.');
  });

  it('should return correct message for wrong-password error', () => {
    const error = { code: 'auth/wrong-password' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Incorrect password. Please try again.');
  });

  it('should return correct message for invalid-credential error', () => {
    const error = { code: 'auth/invalid-credential' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Invalid email or password. Please check your credentials and try again.');
  });

  it('should return correct message for network-request-failed error', () => {
    const error = { code: 'auth/network-request-failed' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Network error. Please check your internet connection and try again.');
  });

  it('should return correct message for too-many-requests error', () => {
    const error = { code: 'auth/too-many-requests' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Too many failed attempts. Please try again later.');
  });

  it('should return correct message for user-disabled error', () => {
    const error = { code: 'auth/user-disabled' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('This account has been disabled. Please contact support.');
  });

  it('should return correct message for operation-not-allowed error', () => {
    const error = { code: 'auth/operation-not-allowed' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('This operation is not allowed. Please contact support.');
  });

  it('should return error message when error has message but unknown code', () => {
    const error = { code: 'auth/unknown-error', message: 'Custom error message' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Custom error message');
  });

  it('should return default message when error has no code and no message', () => {
    const error = {};
    const result = getAuthErrorMessage(error);
    expect(result).toBe('An error occurred. Please try again.');
  });

  it('should return default message when error is undefined', () => {
    const error = { code: undefined, message: undefined };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('An error occurred. Please try again.');
  });

  it('should return message when error has only message property', () => {
    const error = { message: 'Some custom error' };
    const result = getAuthErrorMessage(error);
    expect(result).toBe('Some custom error');
  });
});

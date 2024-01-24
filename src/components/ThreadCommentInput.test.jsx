/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadCommentInput from './ThreadCommentInput';

expect.extend(matchers);

describe('ThreadCommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle content typing correctly', async () => {
    // Arrange
    render(<ThreadCommentInput giveComment={() => {}} />);
    const contentInput = await screen.getByTestId('content');

    // Action
    await userEvent.click(contentInput);
    await userEvent.keyboard('contenttest');

    // Assert
    expect(contentInput.textContent).toBe('contenttest');
  });

  it('should call giveComment function when give comment button is clicked', async () => {
    // Arrange
    const mockGiveComment = vi.fn();
    render(<ThreadCommentInput giveComment={mockGiveComment} />);
    const contentInput = await screen.getByTestId('content');
    await userEvent.click(contentInput);
    await userEvent.keyboard('contenttest');
    const giveCommentButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(giveCommentButton);

    // Assert
    expect(mockGiveComment).toBeCalledWith({
      content: 'contenttest',
    });
  });
});

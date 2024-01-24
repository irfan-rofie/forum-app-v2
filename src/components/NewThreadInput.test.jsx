/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  describe, it, expect, afterEach, vi,
} from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import NewThreadInput from './NewThreadInput';

expect.extend(matchers);

describe('NewThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<NewThreadInput newThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await userEvent.type(titleInput, 'judultest');

    // Assert
    expect(titleInput).toHaveValue('judultest');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<NewThreadInput newThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'kategoritest');

    // Assert
    expect(categoryInput).toHaveValue('kategoritest');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<NewThreadInput newThread={() => {}} />);
    const bodyInput = await screen.getByTestId('body');

    // Action
    await userEvent.click(bodyInput);
    await userEvent.keyboard('boditest');

    // Assert
    expect(bodyInput.textContent).toBe('boditest');
  });

  it('should call newThread function when new thread button is clicked', async () => {
    // Arrange
    const mockNewThread = vi.fn();
    render(<NewThreadInput newThread={mockNewThread} />);
    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'judultest');
    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'kategoritest');
    const bodyInput = await screen.getByTestId('body');
    await userEvent.click(bodyInput);
    await userEvent.keyboard('boditest');
    const newThreadButton = await screen.getByRole('button', { name: 'Buat' });

    // Action
    await userEvent.click(newThreadButton);

    // Assert
    expect(mockNewThread).toBeCalledWith({
      title: 'judultest',
      category: 'kategoritest',
      body: 'boditest',
    });
  });
});

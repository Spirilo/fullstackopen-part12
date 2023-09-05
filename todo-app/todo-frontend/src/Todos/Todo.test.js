import React from "react"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from "./Todo"

describe('Todo tests', () => {
  test('todo is visible', () => {
    const testTodo = {
      text: 'Testing todo',
      done: false
    }

    const onClickDelete = () => () => {
      return null
    }

    const onClickComplete = () => () => {
      return null
    }

    render(<Todo todo={testTodo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />)

    const todoText = screen.getByText('Testing todo')
    expect(todoText).toBeDefined()
    const todoDlt = screen.getByText('Delete')
    expect(todoDlt).toBeDefined()
    const todoComp = screen.getByText('Set as done')
    expect(todoComp).toBeDefined()
  })
})
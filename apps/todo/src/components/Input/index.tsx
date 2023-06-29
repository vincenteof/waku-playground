'use client'

import {  useRef } from 'react'
import { mutate } from "waku/client";

const ENTER = 'Enter'

export default function Input(props: {
  createTodo: (content: string) => Promise<any>
}) {
  const { createTodo } = props
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <input
      className="w-full"
      placeholder="What needs to be done?"
      onKeyDown={(event) => {
        const key = event.key
        mutate(async () => {
          if (key === ENTER) {
            const content = inputRef.current?.value ?? ''
            if (inputRef.current?.value) {
              inputRef.current.value = ''
            }
            try {
              await createTodo(content)
            } catch (err) {
              console.log(err)
            }
          } 
        })
      }}
      ref={inputRef}
    />
  )
}

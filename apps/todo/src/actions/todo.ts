'use server'

import { prisma } from '../service/prisma.js'

export async function createTodo(content: string) {
  return prisma.todo.create({
    data: {
      content,
    },
  })
}

export async function queryAllTodo() {
    return prisma.todo.findMany()
}

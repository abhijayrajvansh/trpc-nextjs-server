'use client'

import { trpc } from '@/client'
import React from 'react'

export default function page() {
  
  const allTodos = trpc.todoAPI.getTodos.useQuery()
  
  return (
    <div className='h-[90vh] flex items-center justify-center'>
      {JSON.stringify(allTodos.data)}
    </div>
  )
}

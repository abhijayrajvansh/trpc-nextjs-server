import { trpc } from "@/client/trpc/ssr";
import React from "react";

export default async function page() {
  const allTodos = await trpc.todoAPI.getTodos();

  return (
    <div className="h-[90vh] flex items-center justify-center">
      {JSON.stringify(allTodos)}
    </div>
  );
}

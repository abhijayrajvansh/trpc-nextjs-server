"use client";

import { trpc } from "@/client/trpc/csr";
import React from "react";

export default function page() {
  const { data, isLoading, isError } = trpc.todoAPI.getTodos.useQuery();

  if (isLoading) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-[90vh] flex items-center justify-center">
      {JSON.stringify(data)}
    </div>
  );
}

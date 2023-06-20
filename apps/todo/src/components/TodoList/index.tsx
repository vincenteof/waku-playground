"use client";

import { useGlobalState } from "../Provider/index.js";

type Props = {};

export default function TodoList(props: Props) {
  const { state } = useGlobalState();
  return (
    <div>
      {state.todoItems.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}

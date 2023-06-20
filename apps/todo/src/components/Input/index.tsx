"use client";

import { KeyboardEventHandler, useCallback, useRef } from "react";
import { useGlobalState } from "../Provider/index.js";

type Props = {};

const ENTER = "Enter";

export default function Input(props: Props) {
  const { dispatch } = useGlobalState();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (event.key === ENTER) {
        dispatch({
          type: "ADD",
          payload: {
            content: inputRef.current?.value ?? "",
          },
        });
        if (inputRef.current?.value) {
          inputRef.current.value = "";
        }
      }
    },
    []
  );

  return (
    <input
      className="w-full"
      placeholder="What needs to be done?"
      onKeyDown={handleKeyDown}
      ref={inputRef}
    />
  );
}

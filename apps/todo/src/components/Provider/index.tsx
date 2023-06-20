"use client";

import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { produce } from "immer";

type TodoItem = {
  id: string
  content: string;
};

type State = {
  todoItems: TodoItem[];
};

const INITIAL_STATE: State = { todoItems: [] };

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};
const GlobalContext = createContext<ContextType>({
  state: INITIAL_STATE,
  dispatch: () => {
    console.error("There is no `Provider`!");
  },
});

type Action = {
  type: "ADD";
  payload: {
    content: string;
  };
};

function reducer(draft: State, action: Action) {
    switch (action.type) {
        case "ADD":
            draft.todoItems.push({
                content: action.payload.content,
                id: `${Math.random()}`
            })
            break
        default:
            break
    }
}

type Props = {
  children: ReactNode;
};

export default function Provider(props: Props) {
  const [state, dispatch] = useReducer(produce(reducer), INITIAL_STATE);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export function useGlobalState() {
    return useContext(GlobalContext)
}
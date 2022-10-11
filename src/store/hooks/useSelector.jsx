import { useEffect, useState } from "react";
import { useStore } from "./useStore";

export const useSelector = (selector) => {
  const store = useStore();

  const selectedState = selector(store.getState());

  const [state, setState] = useState(selectedState);

  useEffect(() => {
    const unsubscirbe = store.subscribe(() => {
      const selectedState = selector(store.getState());
      setState(selectedState);
    });

    return unsubscirbe;
  }, [store, selector]);

  return state;
};

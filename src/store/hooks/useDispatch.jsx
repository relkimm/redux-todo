import { useStore } from "./useStore";

export const useDispatch = () => {
  const store = useStore();
  return store.dispatch;
};

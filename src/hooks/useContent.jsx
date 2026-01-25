
import { usePreference } from "./usePreference";


export const useContent = () => {
  const { content,loading } = usePreference();
  return {content,loading};
};
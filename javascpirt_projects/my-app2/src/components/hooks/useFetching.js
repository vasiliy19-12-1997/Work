import { useState } from "react";
//callback это запрос перед которым крутилку надо показать
const useFetching = (callback) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [error, setError] = useState("");
  const fetching = async () => {
    try {
      //загрузка крутилка
      setIsPostLoading(true);
      await callback();
    } catch (error) {
      setError(error.message);
    } finally {
      //загрузка крутилка заканчиваем
      setIsPostLoading(false);
    }
  };
  return [fetching, isPostLoading, error];
};

export default useFetching;

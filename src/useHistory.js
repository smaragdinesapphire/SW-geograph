import { useCallback, useState } from "react";

/**
 * 紀錄操作
 */
const useHistory = () => {
  const [history, setHistory] = useState([]);

  // 新增步驟
  const appendHistory = useCallback(
    (step) => setHistory((prev) => [...prev, step]),
    []
  );

  // 複寫步驟，用於跳到特定步驟後進行新的操作
  const updateHistory = useCallback(
    (nextHistory) => setHistory(nextHistory),
    []
  );

  return { history, appendHistory, updateHistory };
};

export default useHistory;

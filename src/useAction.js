import { useCallback, useState } from "react";
import initState from "../config/initState.json";
import pointConfig from "../config/pointConfig.json";

const pointGrow = (point, max) => (point + 1 > max ? max : point + 1);
// 行為操作，將會被記錄於 history
const useAction = () => {
  const [data, setData] = useState({ ...initState });

  /**
   * 進入 init 階段時，根據道具是否展開決定是否獲得 point
   */
  const initStep = useCallback((state) => {
    if (state.geograph)
      setData((prev) => ({
        ...prev,
        points: ["sky", "ground", "human"].reduce(
          (result, key) => ({
            ...result,
            [key]: pointGrow(prev.points[key], pointConfig[key])
          }),
          {}
        )
      }));
  }, []);

  // switch geograph
  // set skill
  // update charactor list
  // select charactor who includes
  // decide the skill work or cancel
};

export default useAction;

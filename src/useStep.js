import { useCallback, useState } from "react";

export const STEP_INIT = "init";
export const STEP_SELECT_SKILL = "selectSkill";
export const STEP_SELECT_TARGET = "selectTarget";
export const STEP_SKILL_EFFECT = "skillEffect";

const STEP_LIST = [
  STEP_INIT, // 依據當前狀態決定是否自動追加 point
  STEP_SELECT_SKILL, // 決定本次使用的技能
  STEP_SELECT_TARGET, // 決定範圍內的人
  STEP_SKILL_EFFECT // 決定那些人是否受技能引響
];
const useStep = () => {
  const [step, setStep] = useState(STEP_LIST[0]);

  const goNextStep = useCallback(
    () =>
      setStep((prev) => {
        const index = STEP_LIST.indexOf(prev);
        if (index === STEP_LIST.length - 1) return STEP_LIST[0];
        return STEP_LIST[index + 1];
      }),
    []
  );
  const gotoStep = useCallback((nextStep) => setStep(nextStep), []);

  return { step, goNextStep, gotoStep };
};

export default useStep;

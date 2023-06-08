import React, { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from "react";

interface InputCodeProps {
  length: number;
  loading: boolean;
  onComplete: (code: string) => void;
}

const InputCode: React.FC<InputCodeProps> = ({ length, loading, onComplete }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const inputClassName = "border border-solid border-[black] w-[95px] rounded-lg text-[32px] p-9"

  const processInput = (e: ChangeEvent<HTMLInputElement>, slot: number) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1]?.focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>, slot: number) => {
    if (e.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1]?.focus();
    }
  };

  useEffect(() => {
    inputs.current = inputs.current.slice(0, length);
  }, [length]);

  return (
    <div className="code-input">
      <div className="code-inputs flex h-[90px] gap-[20px] justify-center mt-[55px]">
        {code.map((num, idx) => (
          <input
            className={inputClassName}
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && idx === 0}
            readOnly={loading}
            onChange={(e) => processInput(e, idx)}
            onKeyUp={(e) => onKeyUp(e, idx)}
            ref={(ref) => (inputs.current[idx] = ref)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputCode;

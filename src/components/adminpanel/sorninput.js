import { useEffect, useState } from "react";

export default function SortInput({
  name,
  valueRetriever,
  inputName,
  defaultValue,
}) {
  const [value1, setValue] = useState("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div>
      <p className="text-sm text-gray-500 mb-3 dark:text-gray-300">{name}</p>
      <input
        className="w-[100px] rounded-[8px] outline-none h-[35px] pl-[5px] "
        type="number"
        value={value1}
        name={inputName}
        onChange={(e) => {
          valueRetriever(e.target.value, inputName);
        }}
      />
    </div>
  );
}

import { useEffect, useState } from "react";

export default function TextInput({
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
    <div className="">
      <p className="text-sm text-gray-500 mb-3 dark:text-gray-300">{name}</p>
      <input
        type="text"
        value={value1}
        name={inputName}
        onChange={(e) => {
          valueRetriever(e.target.value, inputName);
        }}
        className="border outline-none focus:border-slate-300 w-full h-[40px] 
                rounded-lg pl-2 outline-0 
             "
      ></input>
    </div>
  );
}

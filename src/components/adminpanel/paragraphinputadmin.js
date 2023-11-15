import { useEffect, useState } from "react";

export default function TextArea({
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
    <div className="mt-6">
      <p className="text-sm text-gray-500 mb-3">{name}</p>
      <textarea
        value={value1}
        name={inputName}
        onChange={(e) => {
          valueRetriever(e.target.value, inputName);
        }}
        className="widthblogtextscroll min-h-[200px] pt-3 input-file-style border outline-none focus:border-slate-300 w-full pl-3 
            rounded-lg 
             "
      ></textarea>
    </div>
  );
}

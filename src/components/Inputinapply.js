import { useEffect, useState } from "react";

export default function Inputinapply({ placeholder, lang, setName }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setName(value);
  }, [value]);

  const handelChangeValiue = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={(e) => handelChangeValiue(e)}
      type="text"
      placeholder={placeholder}
      className={`w-full max-[500px]:w-full outline-none border-[1px] h-full px-[10px] rounded-[8px] ${
        lang === "Arabic" && "text-end"
      }`}
    />
  );
}

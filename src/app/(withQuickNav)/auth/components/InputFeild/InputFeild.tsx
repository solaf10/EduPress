"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { InputInfo } from "../AuthForm/AuthForm";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

const InputFeild = <D extends Record<string, any>>({
  inp,
  data,
  onHandleSetData,
}: {
  inp: InputInfo;
  data: D;
  onHandleSetData: Dispatch<SetStateAction<D>>;
}) => {
  const [isShow, setIsShow] = useState(false);
  return inp.type == "checkbox" ? (
    <div className="rememberPassword">
      <input
        type={inp.type}
        id={inp.label}
        checked={data[inp.name]}
        onChange={(e) =>
          onHandleSetData((prev) => ({
            ...prev,
            [inp.name]: e.target.checked,
          }))
        }
      />
      <label htmlFor={inp.label}>{inp.label}</label>
    </div>
  ) : inp.type == "password" ? (
    <div className="password-holder">
      <input
        type={isShow ? "text" : "password"}
        required
        value={data[inp.name] ?? ""}
        placeholder={inp.placeHolder}
        onChange={(e) =>
          onHandleSetData((prev) => ({
            ...prev,
            [inp.name]: e.target.value,
          }))
        }
      />
      <div className="icon-holder" onClick={() => setIsShow((prev) => !prev)}>
        {isShow ? <LuEyeClosed className="icon" /> : <FaEye className="icon" />}
      </div>
    </div>
  ) : (
    <input
      type={inp.type}
      required
      value={data[inp.name] ?? ""}
      placeholder={inp.placeHolder}
      onChange={(e) =>
        onHandleSetData((prev) => ({
          ...prev,
          [inp.name]: e.target.value,
        }))
      }
    />
  );
};

export default InputFeild;

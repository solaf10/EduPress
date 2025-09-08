import InputFeild from "../InputFeild/InputFeild";
import "./AuthForm.css";
import { SetStateAction, Dispatch, FormEvent } from "react";

export interface InputInfo {
  id: number;
  type: string;
  placeHolder?: string;
  label?: string;
  name: string;
}

const AuthForm = <D extends Record<string, any>>({
  inps,
  data,
  sendBtn,
  onHandleSetData,
  onHandleSubmitData,
}: {
  inps: Array<InputInfo>;
  data: D;
  sendBtn: string;
  onHandleSetData: Dispatch<SetStateAction<D>>;
  onHandleSubmitData: (e: FormEvent) => void;
}) => {
  const inputs = inps.map((inp) => (
    <InputFeild<D>
      inp={inp}
      key={inp.id}
      data={data}
      onHandleSetData={onHandleSetData}
    />
  ));
  return (
    <form onSubmit={onHandleSubmitData}>
      {inputs}
      <input type="submit" value={sendBtn} className="button" />
    </form>
  );
};

export default AuthForm;

import { InputHTMLAttributes } from "react";

import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input({ ...props }: InputProps): JSX.Element {
  return <input className="input" {...props} />
}
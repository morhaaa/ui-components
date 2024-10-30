import React from "react";

export type InputTypes =
  | "text"
  | "password"
  | "email"
  | "search"
  | "tel"
  | "url";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-gray-700 font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        `}
      />
    </div>
  );
};

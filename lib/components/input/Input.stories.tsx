import { Input, type InputTypes } from "./Input";
import { type Meta, type StoryObj } from "@storybook/react";
import React, { useState } from "react";

interface InputWrapperProps {
  label: string;
  placeholder: string;
  type: InputTypes;
  disabled: boolean;
}

const InputWrapper: React.FC<InputWrapperProps> = function ({
  label,
  placeholder,
  type,
  disabled,
}) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <Input
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};

const meta: Meta<typeof InputWrapper> = {
  component: InputWrapper,
  args: {},
  argTypes: {
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    type: {
      options: ["text", "password", "email", "search", "tel", "url"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputWrapper>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Username",
    disabled: false,
    type: "text",
  },
};

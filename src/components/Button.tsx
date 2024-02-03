import { ButtonHTMLAttributes, ReactElement } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonClass: "primary" | "secondary" | "danger";
  icon?: ReactElement;
}

export default function Button(props: ButtonProps) {
  let buttonStyle =
    "text-white active:text-neutral-300 flex justify-center gap-2 p-2 text-sm rounded-md items-center transition-all border-2 border-solid disabled:cursor-not-allowed disabled:opacity-50";
  switch (props.buttonClass) {
    case "primary":
      buttonStyle +=
        " bg-blue-500 active:bg-blue-600 border-t-blue-400 border-l-blue-400 border-r-blue-600 border-b-blue-600 active:border-t-blue-700 active:border-l-blue-700 active:border-r-blue-500 active:border-b-blue-500";
      break;
    case "secondary":
      buttonStyle +=
        " bg-gray-500 active:bg-gray-600 border-t-gray-400 border-l-gray-400 border-r-gray-600 border-b-gray-600 active:border-t-gray-700 active:border-l-gray-700 active:border-r-gray-500 active:border-b-gray-500";
      break;
    case "danger":
      buttonStyle +=
        " bg-red-500 active:bg-red-600 border-t-red-400 border-l-red-400 border-r-red-600 border-b-red-600 active:border-t-red-700 active:border-l-red-700 active:border-r-red-500 active:border-b-red-500";
      break;
  }

  return (
    <button {...props} className={buttonStyle}>
      {props.icon}
      {props.title}
    </button>
  );
}

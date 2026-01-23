import { ErrorInfo } from "react";

export const LogError = (error: unknown, info: ErrorInfo) => {
  console.log(info.componentStack, "Component Stack!!!!");
  console.log(error);
};

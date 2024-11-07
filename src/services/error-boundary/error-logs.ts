import { ErrorInfo } from "react";

export const LogError = (error: Error, info: ErrorInfo) => {
  console.log(info.componentStack, "Component Stack!!!!");
  console.log(error);
};

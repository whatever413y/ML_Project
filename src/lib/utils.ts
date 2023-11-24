import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { QuestionType } from "./constant"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function enumerateQuestionType(key: string): QuestionType | undefined {
  switch (key) {
    case "opn":
      return QuestionType.opn;
    case "csn":
      return QuestionType.csn;
    case "ext":
      return QuestionType.ext;
    case "agr":
      return QuestionType.agr;
    case "est":
      return QuestionType.est;
    default:
      return undefined;
  }
}
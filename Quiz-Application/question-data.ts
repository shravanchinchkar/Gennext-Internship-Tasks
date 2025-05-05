interface Question {
  statement: string;
  options: string[];
  answer: string;
}

interface Questions {
  [key: string]: Question;
}

export const Quiz_Questions: Questions = {
  question1: {
    statement: "What is TypeScript primarily used for?",
    options: [
      "Adding static types to JavaScript",
      "Creating server-side applications only",
      "Styling web pages",
      "Managing databases",
    ],
    answer: "Adding static types to JavaScript",
  },
  question2: {
    statement: "Which of the following is a valid TypeScript type?",
    options: ["number", "integer", "float", "char"],
    answer: "number",
  },
  question3: {
    statement: "How do you define an interface in TypeScript?",
    options: [
      "interface Person { name: string; age: number; }",
      "class Person { name: string; age: number; }",
      "type Person = { name: string; age: number; }",
      "struct Person { name: string; age: number; }",
    ],
    answer: "interface Person { name: string; age: number; }",
  },
  question4: {
    statement: "What does the any type in TypeScript represent?",
    options: [
      "A type that can only be a string or number",
      "A type that disables type checking",
      "A type that enforces strict type checking",
      "A type used only for arrays",
    ],
    answer: "A type that disables type checking",
  },
  question5: {
    statement:
      "Which keyword is used to specify that a class cannot be extended in TypeScript?",
    options: ["sealed", "final", "private", "protected"],
    answer: "final",
  },
};

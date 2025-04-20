import { MathJaxContext } from "better-react-mathjax";

export const ClockContent = () => {
  return <MathJaxContext>{"$$\\frac{2*\\sum_{n=1}^{360} n}{720} = 180.5$$"}</MathJaxContext>;
};

export const Information = () => {
  return (
    <MathJaxContext>{`$$ 10^3 $$ (1 Thousand) seconds is 16 minutes.

$$ 10^6 $$ (1 Million) seconds is 11 days.

$$ 10^9 $$ (1 Billion) seconds is 31 years.`}</MathJaxContext>
  );
};

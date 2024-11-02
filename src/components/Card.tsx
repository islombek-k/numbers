import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-5 shadow-sm">
      {children}
    </div>
  );
};

export default Card;

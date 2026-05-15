import type { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
};

export function Tooltip({ children, text, position = "right" }: TooltipProps) {
  const positionClass = {
    top: "tooltip-top",
    bottom: "tooltip-bottom",
    left: "tooltip-left",
    right: "tooltip-right",
  };

  return (
    <div className="tooltip-group">
      {children}
      <div className={`tooltip-content ${positionClass[position]}`}>
        {text}
        <div className="tooltip-arrow" />
      </div>
    </div>
  );
}

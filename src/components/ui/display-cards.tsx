// components/ui/display-cards.tsx
"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;

  /** NEW: control gradient hues to sync the border with the background */
  from?: string; // e.g. "#007BFF"
  to?: string;   // e.g. "#137dc5"
}
function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  from = "#0ea5e9",
  to = "#2563eb",
}: DisplayCardProps) {
  const style: React.CSSProperties = {
    ["--from" as any]: from,
    ["--to" as any]: to,
    ["--card-border" as any]:
      "color-mix(in srgb, var(--from) 55%, var(--to) 45%)",
  };

  return (
    <div
      style={style}
      className={cn(
        "relative flex h-36 w-[28rem] -skew-y-[8deg] select-none flex-col justify-between",
        "rounded-xl border bg-[linear-gradient(135deg,var(--from),var(--to))]",
        "border-[var(--card-border)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
        "px-4 py-3 transition-all duration-700",
        "ring-1 ring-inset ring-white/10",
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        "opacity-85 hover:opacity-100", // 👈 add here
        className
      )}
    >
      <div>
        <span
          className={cn(
            "relative inline-block rounded-full/3xl p-1",
            iconClassName
          )}
        >
          {icon}
        </span>
        <p
          className={cn(
            "text-lg font-medium text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]",
            titleClassName
          )}
        >
          {title}
        </p>
      </div>
      <p className="whitespace-nowrap text-lg text-white/90">{description}</p>
      <p className="text-white/70">{date}</p>
    </div>
  );
}


interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      className: "[grid-area:stack] hover:-translate-y-10",
      from: "#007BFF",
      to: "#137dc5",
      iconClassName: "text-white",
      titleClassName: "text-white",
    },
    {
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1",
      from: "#137dc5",
      to: "#007BFF",
      iconClassName: "text-white",
      titleClassName: "text-white",
    },
    {
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
      from: "#bf1922",
      to: "#137dc5",
      iconClassName: "text-white",
      titleClassName: "text-white",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}


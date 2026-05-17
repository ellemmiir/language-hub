type AccentBlobProps = {
  color: string;
};

export function AccentBlob({ color }: AccentBlobProps) {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full
        pointer-events-none overflow-hidden z-1
      `}
    >
      <div
        className={`
          absolute top-0 left-1/2 -translate-x-1/2
          w-200 h-200 md:w-350 md:h-350
          rounded-full blur-3xl opacity-20
          ${color}
        `}
        style={{
          transform: "translateX(60%) translateY(60%)",
        }}
      />
    </div>
  );
}

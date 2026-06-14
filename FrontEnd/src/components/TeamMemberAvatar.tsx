type TeamMemberAvatarProps = {
  initials: string;
  name: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-16 w-16 text-lg",
  md: "h-24 w-24 text-xl",
  lg: "h-32 w-32 text-2xl",
} as const;

export function TeamMemberAvatar({
  initials,
  name,
  size = "md",
}: TeamMemberAvatarProps) {
  return (
    <div
      role="img"
      aria-label={`${name} avatar`}
      className={`flex shrink-0 items-center justify-center rounded-md bg-xone-accent-muted font-semibold text-xone-violet ${sizeClasses[size]}`}
    >
      {initials}
    </div>
  );
}

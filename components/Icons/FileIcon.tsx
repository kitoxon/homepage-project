import { useHoverStore } from "@/app/store";
type props = {
  defaultFill?: string;
};
const gradientId = "file-icon";
export default function FileIcon({ defaultFill }: props) {
  const { active, from } = useHoverStore();
  const fillColor =
    active && from === "note" ? `url(#${gradientId})` : defaultFill || "#000";
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill={fillColor}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c6fb" />
          <stop offset="100%" stopColor="#005bea" />
        </linearGradient>
      </defs>
      <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
    </svg>
  );
}

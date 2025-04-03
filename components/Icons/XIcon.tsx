import { useHoverStore } from "@/app/store";
type props = {
  defaultFill?: string;
};
const gradientId = "x-icon";
export default function XIcon({ defaultFill }: props) {
  const { active, from } = useHoverStore();
  const fillColor =
    active && from === "twitter"
      ? `url(#${gradientId})`
      : defaultFill || "#000";
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={fillColor}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c6fb" />
          <stop offset="100%" stopColor="#005bea" />
        </linearGradient>
      </defs>
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
}

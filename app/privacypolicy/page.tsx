import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
export default function PrivacyPolicyPage() {
  const file = fs.readFileSync(
    path.join(process.cwd(), "content/privacy-policy.md"),
  );
  return (
    <div className="mt-36">
      <div className="max-w-[80%] md:container mx-auto whitespace-break-spaces">
        <h1 className="text-6xl font-semibold mb-10 text-[#333]">
          プライバシーポリシー
        </h1>
        <div className="mb-20 text-[#333]">
          <ReactMarkdown>{file.toString()}</ReactMarkdown>
        </div>
      </div>

      <div className="bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] w-full h-1"></div>
    </div>
  );
}

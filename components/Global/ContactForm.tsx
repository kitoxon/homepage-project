// components/ContactForm.tsx
"use client";

import { ChangeEvent, useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  subject: string;
  message: string;
  contactType: string;
  file: File | null;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    subject: "",
    message: "",
    contactType: "",
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      onFileChange(file);
    } else {
      setFileName("");
      onFileChange(null);
    }
  };
  const onFileChange = (file: File | null) => {
    setForm((prev) => ({ ...prev, file }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send form to API
    console.log(form);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 p-6 text-[#333]"
    >
      <div>
        <label className="block font-medium mb-2">
          貴社名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          required
          value={form.company}
          onChange={handleChange}
          placeholder="貴社名をご記入ください"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          お名前<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="お名前をご記入ください"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="xxx@example.com"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          電話番号 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="phone"
          required
          value={form.phone}
          placeholder="00-0000-0000"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-2">
          部署 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="department"
          required
          value={form.department}
          placeholder="〇〇部"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-2">
          役職 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="position"
          required
          value={form.position}
          placeholder="課長"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 p-2 hover:bg-[#fafafa] cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value="brandInsight"
              checked={form.contactType === "brandInsight"}
              onChange={handleChange}
              required
            />
            <span>Brand Insight（ブランドインサイト）について</span>
          </label>

          <label className="flex items-center gap-2 p-2 hover:bg-[#fafafa] cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value="spoship"
              checked={form.contactType === "spoship"}
              onChange={handleChange}
              required
            />
            <span>SpoShip（スポシップ）メディアについて</span>
          </label>

          <label className="flex items-center gap-2 p-2 hover:bg-[#fafafa] cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value="nonService"
              checked={form.contactType === "nonService"}
              onChange={handleChange}
              required
            />
            <span>サービス以外</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-2">
          お問い合わせ詳細 <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 h-40 resize-none"
        />
      </div>
      <div className="w-1/2">
        <p className="block font-medium mb-2">ファイル</p>
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col justify-center w-full border-1 border-gray-300 border-dashed rounded-l-xs cursor-pointer hover:bg-gray-100 ${fileName ? "border-solid" : ""}`}
        >
          <div className="p-[15px]">
            <p className="text-sm text-gray-500 break-all">
              {fileName || "ファイルを選択する"}
            </p>
          </div>
          <input
            id="dropzone-file"
            onChange={handleFileChange}
            type="file"
            className="hidden"
          />
        </label>
      </div>

      <div className="mt-12 text-sm">
        <label>
          <input
            type="checkbox"
            name="terms"
            required
            onChange={handleChange}
            className="mr-2"
          />
          ご提供いただく
          <a href="/privacy-policy" className="underline">
            個人情報の取り扱い方針
          </a>
          に同意する{" "}
          <span className="text-red-500 font-medium text-[15px]">*</span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 w-full bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] text-white py-3 rounded font-bold cursor-pointer transition-all transform hover:translate-y-1 duration-300"
      >
        送信する
      </button>

      {submitted && (
        <p className="text-green-500 text-center mt-4">
          送信されました。ありがとうございました！
        </p>
      )}
    </form>
  );
}

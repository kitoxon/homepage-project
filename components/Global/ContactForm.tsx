// components/ContactForm.tsx
"use client";

import { ChangeEvent, useState, useRef } from "react";
import Alert from "./Alert";
type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  message: string;
  inquiryType: string;
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
    message: "",
    inquiryType: "",
    file: null,
  });
  const [alert, setAlert] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const showError = (msg: string) => setAlert({ message: msg, type: "error" });
  const showSuccess = (msg: string) =>
    setAlert({ message: msg, type: "success" });
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const agreeRef = useRef<HTMLInputElement>(null);
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
  const phoneRegex = /^0\d{9}$|^0\d{2,4}-\d{2,4}-\d{4}$/;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!phoneRegex.test(form.phone)) {
    //   showError(
    //     "電話番号の形式が正しくありません。例: 0901234567 または 090-1234-5678",
    //   );
    //   return;
    // }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("company", form.company);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);
      formData.append("department", form.department);
      formData.append("position", form.position);
      formData.append("inquiryType", form.inquiryType);
      if (form.file) {
        formData.append("file", form.file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        // setSubmitted(true);
        showSuccess("送信されました。ありがとうございました！");
        setForm({
          company: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          department: "",
          position: "",
          inquiryType: "",
          file: null,
        });
        if (agreeRef.current) {
          agreeRef.current.checked = false;
        }
      } else {
        showError("送信に失敗しました。");
      }
    } catch (error) {
      showError("送信に失敗しました。");
    } finally {
      setLoading(false);
    }
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
          required
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
              name="inquiryType"
              value="Brand Insight(ブランドインサイト)について"
              checked={
                form.inquiryType === "Brand Insight(ブランドインサイト)について"
              }
              onChange={handleChange}
              required
            />
            <span>Brand Insight(ブランドインサイト)について</span>
          </label>

          <label className="flex items-center gap-2 p-2 hover:bg-[#fafafa] cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value="SpoShip(スポシプ)メディアについて"
              checked={form.inquiryType === "SpoShip(スポシプ)メディアについて"}
              onChange={handleChange}
              required
            />
            <span>SpoShip(スポシプ)メディアについて</span>
          </label>

          <label className="flex items-center gap-2 p-2 hover:bg-[#fafafa] cursor-pointer">
            <input
              type="radio"
              name="inquiryType"
              value="サービス以外"
              checked={form.inquiryType === "サービス以外"}
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
            ref={agreeRef}
            required
            onChange={handleChange}
            className="mr-2"
          />
          ご提供いただく
          <a href="/privacypolicy" className="underline">
            個人情報の取り扱い方針
          </a>
          に同意する{" "}
          <span className="text-red-500 font-medium text-[15px]">*</span>
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] text-white py-3 rounded font-bold cursor-pointer transition-all transform hover:translate-y-1 duration-300"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 animate-spin text-white"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="transparent"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span>送信中...</span>
          </div>
        ) : (
          "送信する"
        )}
      </button>

      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </form>
  );
}

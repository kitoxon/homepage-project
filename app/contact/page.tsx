import ContactForm from "@/components/Global/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-36 pb-20 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-10">
        お問い合わせ
      </h1>
      <ContactForm />
    </div>
  );
}

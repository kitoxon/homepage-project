type props = {
  title: string;
};

export default function ComingSoon({ title }: props) {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <p className="text-4xl">現在、準備中です</p>
    </div>
  );
}

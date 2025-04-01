import GradientText from "../Global/GradientText";
export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div className="flex relative w-full h-screen">
        <div className="absolute h-full flex flex-col justify-center left-5 md:left-[120px]">
          <GradientText text="Innovating for a" />
          <GradientText text="Better Tomorrow." />
        </div>
        <div className="bg-[url(/assets/hero-img.jpg)] w-[70%] h-[100%] max-w-[70%] ml-auto bg-cover bg-center rounded-bl-[150px]"></div>
      </div>
    </div>
  );
}

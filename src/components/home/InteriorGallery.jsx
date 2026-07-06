import { images } from "@/data/images";
import { textStyles } from "@/styles/styles";

export default function InteriorGallery() {
  return (
    <section className="bg-white px-5 pb-[50px] pt-[67px]">
      <div className="text-center">
        <p className="font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#616161]">
          Share your setup with
        </p>

        <h2 className={textStyles.sectionTitle}>#FurniroFurniture</h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.gallery.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`Furniro furniture setup ${index + 1}`}
            className="h-[260px] w-full rounded-[4px] object-cover md:h-[300px]"
          />
        ))}
      </div>
    </section>
  );
}
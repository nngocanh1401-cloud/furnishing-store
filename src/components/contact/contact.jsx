export default function Contact() {
  return (
    <section className="px-5 py-[98px]">
      <div className="mx-auto max-w-[1058px] text-center">
        <h2 className="font-['Poppins'] text-[36px] font-semibold text-black">
          Get In Touch With Us
        </h2>

        <p className="mx-auto mt-2 max-w-[644px] font-['Poppins'] text-[16px] text-[#9F9F9F]">
          For more information about our product and services, please feel free
          to drop us an email. Our staff will always be there to help you out.
          Do not hesitate!
        </p>
      </div>

      <div className="mx-auto mt-[82px] grid max-w-[1058px] gap-10 lg:grid-cols-[393px_1fr]">
        <div className="space-y-10 font-['Poppins']">
          <div>
            <h3 className="text-[24px] font-medium text-black">Address</h3>
            <p className="mt-1 max-w-[212px] text-[16px] leading-[24px] text-black">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>

          <div>
            <h3 className="text-[24px] font-medium text-black">Phone</h3>
            <p className="mt-1 text-[16px] leading-[24px] text-black">
              Mobile: +(84) 546-6789
            </p>
            <p className="text-[16px] leading-[24px] text-black">
              Hotline: +(84) 456-6789
            </p>
          </div>

          <div>
            <h3 className="text-[24px] font-medium text-black">
              Working Time
            </h3>
            <p className="mt-1 text-[16px] leading-[24px] text-black">
              Monday-Friday: 9:00 - 22:00
            </p>
            <p className="text-[16px] leading-[24px] text-black">
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>

        <form className="grid gap-9">
          <label className="grid gap-[22px]">
            <span className="font-['Poppins'] text-[16px] font-medium text-black">
              Your name
            </span>
            <input
              className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 outline-none"
              placeholder="Abc"
            />
          </label>

          <label className="grid gap-[22px]">
            <span className="font-['Poppins'] text-[16px] font-medium text-black">
              Email address
            </span>
            <input
              type="email"
              className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 outline-none"
              placeholder="Abc@def.com"
            />
          </label>

          <label className="grid gap-[22px]">
            <span className="font-['Poppins'] text-[16px] font-medium text-black">
              Subject
            </span>
            <input
              className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 outline-none"
              placeholder="This is optional"
            />
          </label>

          <label className="grid gap-[22px]">
            <span className="font-['Poppins'] text-[16px] font-medium text-black">
              Message
            </span>
            <textarea
              className="h-[120px] rounded-[10px] border border-[#9F9F9F] px-6 py-5 outline-none"
              placeholder="Hi! I'd like to ask about..."
            />
          </label>

          <button
            type="submit"
            className="h-[55px] w-[237px] rounded-[5px] bg-[#B88E2F] font-['Poppins'] text-[16px] text-white transition hover:bg-[#9F7928]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
import Container from "@/components/common/Container";
import { contactStyles, formStyles, layoutStyles } from "@/styles/styles";

export default function Contact() {
  return (
    <section className={layoutStyles.pageSection}>
      <Container size="narrow">
        <div className="text-center">
          <h2 className={contactStyles.title}>Get In Touch With Us</h2>

          <p className={contactStyles.description}>
            For more information about our product and services, please feel free
            to drop us an email. Our staff will always be there to help you out.
            Do not hesitate!
          </p>
        </div>

        <div className={contactStyles.contentGrid}>
          <div className={contactStyles.infoWrapper}>
            <div>
              <h3 className={contactStyles.infoTitle}>Address</h3>
              <p className={`mt-1 max-w-[212px] ${contactStyles.infoText}`}>
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <h3 className={contactStyles.infoTitle}>Phone</h3>
              <p className={`mt-1 ${contactStyles.infoText}`}>
                Mobile: +(84) 546-6789
              </p>
              <p className={contactStyles.infoText}>
                Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <h3 className={contactStyles.infoTitle}>Working Time</h3>
              <p className={`mt-1 ${contactStyles.infoText}`}>
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className={contactStyles.infoText}>
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <form className="grid gap-9">
            <label className={formStyles.group}>
              <span className={formStyles.label}>Your name</span>
              <input className={formStyles.input} placeholder="Abc" />
            </label>

            <label className={formStyles.group}>
              <span className={formStyles.label}>Email address</span>
              <input
                type="email"
                className={formStyles.input}
                placeholder="Abc@def.com"
              />
            </label>

            <label className={formStyles.group}>
              <span className={formStyles.label}>Subject</span>
              <input
                className={formStyles.input}
                placeholder="This is optional"
              />
            </label>

            <label className={formStyles.group}>
              <span className={formStyles.label}>Message</span>
              <textarea
                className={formStyles.textarea}
                placeholder="Hi! I'd like to ask about..."
              />
            </label>

            <button type="submit" className={formStyles.submit}>
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
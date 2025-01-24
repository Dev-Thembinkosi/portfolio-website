import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center">
          <h2>Let&apos;s create something amazing together</h2>
          <p>
            Ready to bring your next project to life? Let&apos;s connect and
            discuss how i can help you achieve your goals.
          </p>
          <button>
            <span>Contact Me</span>
            <ArrowUpRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

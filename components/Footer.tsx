export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-high w-full border-t border-outline-variant py-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop gap-6">
        <div className="text-center md:text-left">
          <div className="font-headline-sm font-bold text-primary mb-2">
            SHIV ENTERPRISES
          </div>
          <div className="font-body-sm text-on-surface mb-1">
            Safety • Security • Trust — With SHIV ENTERPRISES
          </div>
          <div className="font-body-sm text-on-surface opacity-70">
            © {currentYear} SHIV ENTERPRISES. Security &amp; Power Solutions for over 25 years.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <a
            className="text-secondary font-body-sm hover:text-primary hover:underline transition-all opacity-100 hover:opacity-80"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-secondary font-body-sm hover:text-primary hover:underline transition-all opacity-100 hover:opacity-80"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-secondary font-body-sm hover:text-primary hover:underline transition-all opacity-100 hover:opacity-80"
            href="#"
          >
            Contact Support
          </a>
          <a
            className="text-secondary font-body-sm hover:text-primary hover:underline transition-all opacity-100 hover:opacity-80"
            href="#"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}

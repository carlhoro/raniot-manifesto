import { CONTACT_SECTION } from "@/core/lib/constants/constants";

export function Contact() {
    return (
      <section id="contacto" className="w-full px-6 py-10 lg:px-24 lg:py-10 lg:max-w-7xl mx-auto" >
        <div className="">
            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                {CONTACT_SECTION.headercaption}
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mt-6 mb-8 text-balance leading-snug">
                {CONTACT_SECTION.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-7xl">
                {CONTACT_SECTION.caption}
            </p>
            <a
                href="https://www.linkedin.com/in/carlos-andres-hoyos-rodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-3 max-w-7xl">

                <div className="grid grid-cols-1">
                    <div className="col-start-1 row-start-1 grid grid-flow-col grid-rows-2 gap-2">
                        <div className="row-span-2 grid place-content-center p-4">
                            <img
                                src="/logo/QR.jpeg"
                                alt="LinkedIn"
                                className="w-0 h-0 sm:w-30 sm:h-30 md:w-50 md:h-50  lg:w-64 lg:h-64"
                            /> 
                        </div>
                        <div className="row-span-2 grid place-content-center">
                            <div className="p-4">
                                <img
                                    src="/logo/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-20 h-20 sm:w-12 sm:h-12 md:w-20 lg:h-30 lg:w-30 md:h-20 mt-4 hover hover:scale-105"
                                />  
                            </div>
                            <div className="p-4 w-sm">
                            <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-3xl tracking-wide text-gray-400">
                                {CONTACT_SECTION.linkButton}
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <footer className="mt-24 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Carlos Hoyos · RANIOT
            </p>
            <p>
              {CONTACT_SECTION.footer}
            </p>
          </div>
        </footer>
      </section>
    );
  }  
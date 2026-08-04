"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.373.696 4.586 1.9 6.447L4 29l7.744-1.86A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.984 16.86c-.297.83-1.474 1.556-2.29 1.72-.586.117-1.35.211-3.93-.847-3.302-1.363-5.428-4.71-5.594-4.928-.16-.219-1.34-1.782-1.34-3.4 0-1.617.848-2.412 1.148-2.741.297-.328.65-.41.867-.41.219 0 .437.002.628.012.201.01.472-.076.738.563.297.71.99 2.44 1.076 2.617.086.176.144.383.028.617-.117.234-.176.383-.348.586-.176.203-.363.453-.52.61-.176.176-.36.367-.156.719.203.352.906 1.492 1.943 2.418 1.336 1.192 2.462 1.56 2.813 1.734.351.176.556.148.762-.09.207-.238.879-1.023 1.113-1.375.235-.352.469-.293.79-.176.32.117 2.03.957 2.377 1.13.348.176.58.263.664.41.086.148.086.848-.211 1.68Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const items = [
  {
    key: "whatsapp",
    label: "Falar no WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: WhatsAppIcon,
    className: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
  },
  {
    key: "instagram",
    label: "Seguir no Instagram",
    href: siteConfig.contact.instagram,
    icon: InstagramIcon,
    className:
      "text-white bg-[radial-gradient(circle_at_30%_110%,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)]",
  },
];

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {items.map(({ key, label, href, icon: Icon, className }, i) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-ink/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/25 sm:h-14 sm:w-14 ${className}`}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}

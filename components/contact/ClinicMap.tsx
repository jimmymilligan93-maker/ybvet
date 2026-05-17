import { ExternalLink } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { CLINIC_MAP } from "@/lib/maps";

type ClinicMapProps = {
  className?: string;
};

export default function ClinicMap({ className = "" }: ClinicMapProps) {
  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          aspectRatio: "16 / 9",
          minHeight: 280,
          border: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <iframe
          title={`Map — ${CLINIC.fullName}, ${CLINIC.address}`}
          src={CLINIC_MAP.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href={CLINIC_MAP.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Get directions <ExternalLink size={16} aria-hidden />
        </a>
        <a
          href={CLINIC_MAP.openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--primary)" }}
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

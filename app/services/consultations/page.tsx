import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: ConsultationsPage } = createServicePage("consultations");
export { generateMetadata };
export default ConsultationsPage;

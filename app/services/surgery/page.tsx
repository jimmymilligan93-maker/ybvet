import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: SurgeryPage } = createServicePage("surgery");
export { generateMetadata };
export default SurgeryPage;

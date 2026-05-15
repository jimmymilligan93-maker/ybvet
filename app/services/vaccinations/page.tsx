import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: VaccinationsPage } = createServicePage("vaccinations");
export { generateMetadata };
export default VaccinationsPage;

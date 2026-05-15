import { createServicePage } from "@/lib/create-service-page";

const { generateMetadata, default: DermatologyPage } = createServicePage("dermatology");
export { generateMetadata };
export default DermatologyPage;

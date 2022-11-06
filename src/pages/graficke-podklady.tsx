import Seo from "@ui/Seo";
import type { NextPage } from "next";

const BrandIdentityPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Page title"
        description="Page description"
        noIndex={false}
        noFollow={false}
      />
      {/* Page Content... */}
    </>
  );
};

export default BrandIdentityPage;

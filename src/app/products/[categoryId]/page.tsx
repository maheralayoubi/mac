import { Metadata } from "next";
import CategoryPage from "@/components/pages/products/category/index";

// services
import { getCategoryById } from "@/services/category";

// baseUrl
import { baseUrl } from "@/utils/baseUrl";
import { notFound } from "next/navigation";

interface IPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

// metadata
export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {

  const { categoryId } = await params;
  const data = getCategoryById(categoryId);

  if (!data) {
    return {
      title: "Category Not Found",
    };
  } else {
    return {
      title: data?.title,
      // description: data?.metaDescription,
      // keywords: "",

      openGraph: {
        type: "article",
        url: `${baseUrl}/products/${data?.id}`,
        title: data?.title,
        // description: data?.metaDescription,
        siteName: "機械工具買取ハディズ",
        images: [{ url: data?.imageSrc }],
      },

      twitter: {
        card: "summary_large_image",
        title: data?.title,
        // description: data?.metaDescription,
        images: data?.imageSrc,
      },

      alternates: {
        canonical: `${baseUrl}/products/${data?.id}`,
      },
    };
  }
}

const page = async ({ params }: IPageProps) => {

  const { categoryId } = await params;
  const categoryData = getCategoryById(categoryId);

  if (!categoryData) {
    return notFound()
  }

  return <CategoryPage categoryData={categoryData} />;
};

export default page;

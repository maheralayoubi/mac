import { MetadataRoute } from 'next';

// blogs data
import blogsData from "@/content/blogs/blogs.json";

// baseUrl
import { baseUrl } from '@/utils/baseUrl';


export default function sitemap(): MetadataRoute.Sitemap {
    // Static URLs
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
<<<<<<< HEAD
            url: `${baseUrl}/satei`,
=======
            url: `${baseUrl}/owen-ihe-wase`,
>>>>>>> 312c5a7969d21a7705b302b56dbbbc95e21be4c8
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    // Dynamic Blog URLs
    const dynamicBlogUrls: MetadataRoute.Sitemap = blogsData.map((blog) => ({
        url: `${baseUrl}/blogs/${encodeURIComponent(blog.title)}`,
        lastModified: new Date().toISOString(), // Use actual lastModified if available
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    return [
        ...staticUrls,
        ...dynamicBlogUrls,
    ];
}

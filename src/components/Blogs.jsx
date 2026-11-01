import Image from 'next/image';
import Link from 'next/link';

const blogs = [
    {
        id: 1,
        title: "Budget Friendly Wedding Gift Ideas That Look Premium",
        image: "/blog-wedding.png",
        link: "#"
    },
    {
        id: 2,
        title: "Trending Bulk Gift Items for 2025",
        image: "/blog-hampers.png",
        link: "#"
    },
    {
        id: 3,
        title: "Bestselling Diwali Gift Hamper Ideas You Can Order Online Today",
        image: "/blog-diwali.png",
        link: "#"
    },
    {
        id: 4,
        title: "How Startups Are Using Corporate Gift Hampers to Build Brand Loyalty",
        image: "/blog-corporate.png",
        link: "#"
    }
];

export default function Blogs() {
    return (
        <section className="py-16 bg-ivory">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <p className="text-muted uppercase tracking-widest text-sm mb-2">Unveiling Spiritual Wisdom</p>
                        <h2 className="text-3xl md:text-4xl font-serif text-espresso">Our Blogs</h2>
                    </div>
                    <Link href="#" className="bg-maroon text-ivory px-6 py-3 rounded text-sm font-medium hover:bg-maroon-dark transition-colors">
                        MORE BLOGS
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col group">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay Logo Watermark style */}
                                <div className="absolute top-2 right-2 text-white/50 text-[10px]">bawaskar</div>
                            </div>
                            <h3 className="text-lg font-serif text-espresso leading-tight mb-3 group-hover:text-maroon transition-colors">
                                {blog.title}
                            </h3>
                            <Link href={blog.link} className="text-sm text-muted underline decoration-sand underline-offset-4 hover:text-maroon transition-colors">
                                READ MORE
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

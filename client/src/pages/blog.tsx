import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Spiritual Cleansing: Why Everyone Needs It",
    excerpt: "Life accumulates spiritual dirt from negative experiences, toxic relationships, and cursed environments. Learn why regular spiritual cleansing is essential for wellbeing.",
    category: "Spiritual Health",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "5 Signs You're Under Spiritual Attack",
    excerpt: "Recognize the warning signs that indicate you may be experiencing spiritual interference and what you can do about it.",
    category: "Protection",
    date: "2024-01-10",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The Power of Ancestral Wisdom in Modern Times",
    excerpt: "How ancient healing practices remain relevant and powerful in addressing today's spiritual challenges.",
    category: "Ancestral Wisdom",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Breaking Spiritual Blockages to Financial Success",
    excerpt: "Discover how spiritual obstacles prevent prosperity and the traditional methods used to remove them.",
    category: "Prosperity",
    date: "2023-12-28",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Protecting Your Home and Business from Negative Energy",
    excerpt: "Spaces carry energy. Learn how to identify and cleanse negative vibrations from your environment.",
    category: "Cleansing",
    date: "2023-12-20",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Love and Relationships: The Spiritual Dimension",
    excerpt: "Understanding how spiritual forces affect relationships and how to restore harmony through ancestral healing.",
    category: "Relationships",
    date: "2023-12-15",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="heading-blog">
            Spiritual Insights & Guidance
          </h1>
          <p className="text-xl text-muted-foreground">
            Ancient wisdom and practical guidance for your spiritual journey
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="heading-featured">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover-elevate transition-all cursor-pointer border-primary" data-testid={`featured-post-${post.id}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">Featured</Badge>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl font-serif">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="ghost" data-testid={`button-read-${post.id}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover-elevate transition-all cursor-pointer" data-testid={`post-${post.id}`}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg font-serif">{post.title}</CardTitle>
                  <CardDescription className="text-xs flex flex-col gap-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" data-testid={`button-read-more-${post.id}`}>
                    Read More
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Healing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Move beyond reading—experience the transformation
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-book-consultation-blog">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

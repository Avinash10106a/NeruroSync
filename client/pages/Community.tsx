import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageSquare, Send, Edit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Post type
interface Post {
  id: number;
  content: string;
  title?: string;
  category: "success_story" | "tip" | "motivation" | "question";
  author_name: string;
  created_date: string;
  likes: number;
}

const categoryColors: Record<Post["category"], string> = {
  success_story: "bg-green-100 text-green-800",
  tip: "bg-blue-100 text-blue-800",
  motivation: "bg-yellow-100 text-yellow-800",
  question: "bg-purple-100 text-purple-800",
};

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  // Mock load posts
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          content: "This is my first motivation post!",
          category: "motivation",
          author_name: "Avinash",
          created_date: new Date().toISOString(),
          likes: 2,
        },
        {
          id: 2,
          content: "Drink 2 liters of water daily 🚰",
          category: "tip",
          author_name: "Rohit",
          created_date: new Date().toISOString(),
          likes: 4,
        },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: Post = {
      id: posts.length + 1,
      content: newPost,
      category: "motivation",
      author_name: "You",
      created_date: new Date().toISOString(),
      likes: 0,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const toggleLike = (postId: number) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes - 1 } : p));
    } else {
      newLikedPosts.add(postId);
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
    }
    setLikedPosts(newLikedPosts);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        {/* Mental Health Banner */}
<div className="relative mb-10">
  <div className="rounded-2xl overflow-hidden shadow-md bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white p-8 md:p-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      Together for Mental Wellness 💚
    </h2>
    <p className="text-lg max-w-2xl mx-auto opacity-90">
      Share your journey, support others, and discover tips for a healthier
      mind and lifestyle. Remember, small steps bring big changes.
    </p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <span className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm">
        🌱 Growth
      </span>
      <span className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm">
        🤝 Support
      </span>
      <span className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm">
        💡 Inspiration
      </span>
      <span className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm">
        💬 Conversation
      </span>
    </div>
  </div>
</div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Wellness Community
          </h1>
          <p className="text-gray-600 text-lg">
            Share your journey, find support, and grow together
          </p>
        </div>

        {/* Post Form */}
        <Card className="card-shadow border-0 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit className="w-5 h-5 text-teal-600" />
              Share Your Thoughts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Textarea
                placeholder="What's on your mind? Share a win, a tip, or ask a question..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="h-24 rounded-2xl"
              />
              <div className="text-right">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-6">
          <AnimatePresence>
            {isLoading ? (
              <p className="text-center text-gray-500">Loading posts...</p>
            ) : (
              posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="card-shadow border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-teal-200 rounded-full flex items-center justify-center font-semibold text-teal-800">
                          {post.author_name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {post.author_name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(post.created_date).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      {post.title && (
                        <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                      )}
                      <p className="text-gray-700 whitespace-pre-wrap mb-4">
                        {post.content}
                      </p>
                      <Badge className={categoryColors[post.category]}>
                        {post.category.replace("_", " ")}
                      </Badge>
                      <div className="border-t mt-4 pt-2 flex items-center gap-1 md:gap-4 text-gray-600">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => toggleLike(post.id)}
                        >
                          <ThumbsUp
                            className={`w-4 h-4 ${
                              likedPosts.has(post.id)
                                ? "text-teal-500 fill-current"
                                : ""
                            }`}
                          />
                          <span className="hidden sm:inline">
                            {post.likes} Likes
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" />{" "}
                          <span className="hidden sm:inline">Comment</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

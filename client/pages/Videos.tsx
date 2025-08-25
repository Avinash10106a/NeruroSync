import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Play,
  Search,
  Filter,
  Clock,
  Heart,
  BookOpen,
  Star,
  TrendingUp,
  Users,
  Bookmark,
} from "lucide-react";

// Video categories
const videoCategories = [
  { name: "All", count: 247, icon: Play },
  { name: "Quick Tips", count: 89, icon: Clock },
  { name: "Meditation", count: 56, icon: Heart },
  { name: "Breathing", count: 34, icon: Heart },
];

// Videos (added YouTube IDs)
const featuredVideos = [
  {
    id: "O-6f5wQXSu8",
    title: "The 5-Minute Digital Detox",
    description: "Learn how to disconnect and recharge in just 5 minutes",
    duration: "5:23",
    views: "12.5K",
    instructor: "Dr. Sarah Chen",
    category: "Digital Detox",
    difficulty: "Beginner",
    rating: 4.9,
    featured: true,
    new: false,
    watched: false,
  },
  {
    id: "inpok4MKVLM",
    title: "Screen Time Mindfulness",
    description:
      "Transform your relationship with technology through awareness",
    duration: "8:45",
    views: "24.1K",
    instructor: "Mark Williams",
    category: "Quick Tips",
    difficulty: "Intermediate",
    rating: 4.8,
    featured: true,
    new: true,
    watched: true,
  },
  {
    id: "8_4O_T4p1Zc",
    title: "Box Breathing for Anxiety",
    description: "Master the 4-4-4-4 breathing technique for instant calm",
    duration: "6:12",
    views: "18.7K",
    instructor: "Lisa Park",
    category: "Breathing",
    difficulty: "Beginner",
    rating: 4.9,
    featured: false,
    new: false,
    watched: false,
  },
  {
    id: "vjRsoD_1J6g",
    title: "Morning Mindfulness Routine",
    description: "Start your day with intention and digital boundaries",
    duration: "10:15",
    views: "15.3K",
    instructor: "Michael Torres",
    category: "Meditation",
    difficulty: "Beginner",
    rating: 4.7,
    featured: false,
    new: false,
    watched: true,
  },
];

// Playlists
const playlists = [
  {
    id: 1,
    title: "Digital Wellness Fundamentals",
    description: "Essential practices for healthy tech use",
    videoCount: 12,
    totalDuration: "1h 23m",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Mindfulness Techniques",
    description: "Deep practices for experienced practitioners",
    videoCount: 8,
    totalDuration: "2h 15m",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Better Sleep Habits",
    description: "Relaxing practices to improve your sleep",
    videoCount: 10,
    totalDuration: "1h 40m",
    difficulty: "All Levels",
  },
];

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (videoId: string) => {
    setFavorites((prev) =>
      prev.includes(videoId)
        ? prev.filter((id) => id !== videoId)
        : [...prev, videoId]
    );
  };

  // Filter videos
  const filteredVideos = featuredVideos.filter((video) => {
    const matchesCategory =
      selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              Mindfulness Video Library
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert-guided videos to help you build healthier digital habits.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search videos, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {videoCategories.map((category) => (
              <Button
                key={category.name}
                variant={
                  selectedCategory === category.name ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
              >
                <category.icon className="h-4 w-4 mr-1" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Video Player */}
          {playingVideo && (
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tabs */}
          <Tabs defaultValue="videos">
            <TabsList>
              <TabsTrigger value="videos">All Videos</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
            </TabsList>

            <TabsContent value="videos">
              {/* All Videos */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md"
                  >
                    <div
                      className="relative"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="aspect-video object-cover"
                      />
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary">{video.duration}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-sm line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {video.instructor}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(video.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(video.id)
                              ? "text-red-500 fill-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="playlists">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {playlists.map((playlist) => (
                  <Card key={playlist.id}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {playlist.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {playlist.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {playlist.videoCount} videos • {playlist.totalDuration} •{" "}
                        {playlist.difficulty}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              {favorites.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="mx-auto mb-2" /> No favorites yet
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {featuredVideos
                    .filter((video) => favorites.includes(video.id))
                    .map((video) => (
                      <Card
                        key={video.id}
                        className="overflow-hidden cursor-pointer hover:shadow-md"
                        onClick={() => setPlayingVideo(video.id)}
                      >
                        <div className="relative">
                          <img
                            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            className="aspect-video object-cover"
                          />
                          <div className="absolute bottom-2 right-2">
                            <Badge variant="secondary">{video.duration}</Badge>
                          </div>
                        </div>
                        <CardContent className="p-3">
                          <h3 className="font-semibold text-sm line-clamp-2">
                            {video.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            {video.instructor}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar (Playback settings removed) */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="h-5 w-5 mr-2" /> Continue Watching
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {featuredVideos
                .filter((v) => v.watched)
                .slice(0, 3)
                .map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                      alt={video.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <span className="text-sm">{video.title}</span>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" /> Trending This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">#DigitalDetox</p>
              <p className="text-sm">#MindfulBreathing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <BookOpen className="h-5 w-5 mr-2" /> Your Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="w-full">
                <Bookmark className="mr-2 h-4 w-4" /> Watch Later
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import {
  CheckCircle2,
  Clock,
  FileText,
  Plus,
  Users,
  Calendar,
  Bell,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "./page-header";
// import { SidebarProvider } from "@/components/ui/sidebar";

export default function Overview() {
  const recentActivities = [
    {
      id: 1,
      type: "task_completed",
      title: "Completed 'Design System Updates'",
      description:
        "Finished updating the component library with new design tokens",
      time: "2 minutes ago",
      user: "You",
      priority: "high",
    },
    {
      id: 2,
      type: "page_created",
      title: "Created new page 'Product Roadmap'",
      description: "Added comprehensive roadmap for Q1 2024 planning",
      time: "15 minutes ago",
      user: "Sarah Chen",
      priority: "medium",
    },
    {
      id: 3,
      type: "task_assigned",
      title: "Assigned 'User Research Analysis'",
      description: "Task assigned to Marketing team for completion by Friday",
      time: "1 hour ago",
      user: "Mike Johnson",
      priority: "high",
    },
    {
      id: 4,
      type: "comment_added",
      title: "New comment on 'API Documentation'",
      description: "Alex added feedback on the authentication section",
      time: "2 hours ago",
      user: "Alex Rivera",
      priority: "low",
    },
    {
      id: 5,
      type: "task_overdue",
      title: "Task overdue: 'Database Migration'",
      description:
        "Critical task is now 1 day overdue and needs immediate attention",
      time: "3 hours ago",
      user: "System",
      priority: "urgent",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "task_completed":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "page_created":
        return <FileText className="w-4 h-4 text-blue-500" />;
      case "task_assigned":
        return <Users className="w-4 h-4 text-purple-500" />;
      case "comment_added":
        return <Bell className="w-4 h-4 text-orange-500" />;
      case "task_overdue":
        return <Clock className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-100 border-red-200";
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title="Dashboard"
        actions={
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Task
          </Button>
        }
      />

      <main className="flex-1 p-4 lg:p-6 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome back, John!
              </h1>
              <p className="text-white-200">
                {"Here's what's happening with your projects today."}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                New Module
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Modules
                </CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Tasks
                </CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">
                  +12 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">
                  +18 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Pages
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +1 from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Team Members
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  Active this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>
                    Stay updated with the latest changes and updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-3 text-white-500 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-gray-500 truncate">
                            {activity.title}
                          </p>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getPriorityColor(
                              activity.priority
                            )}`}
                          >
                            {activity.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-200 mb-2">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-white-500">
                          <Avatar className="w-4 h-4">
                            <AvatarImage
                              src="/placeholder.svg?height=16&width=16"
                              alt={activity.user}
                            />
                            <AvatarFallback>
                              {activity.user.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{activity.user}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Upcoming */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Task
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Module
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Create New Page
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Invite Team Member
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Database Migration</p>
                      <p className="text-xs text-gray-500">Due tomorrow</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        User Research Report
                      </p>
                      <p className="text-xs text-gray-500">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Design System Review
                      </p>
                      <p className="text-xs text-gray-500">Due in 5 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

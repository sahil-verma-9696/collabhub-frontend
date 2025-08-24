import Auth from "@/components/auth";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/userProfile";
import { useAppStore } from "@/context/GlobalContext";
import {
  CheckCircle,
  Users,
  MessageSquare,
  GitBranch,
  Zap,
  ArrowRight,
  Target,
  LogIn,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigator = useNavigate();
  const { user } = useAppStore()

  return (
    <>
      {showAuthModal && <Auth setShowAuthModal={setShowAuthModal} />}
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Target className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">
                    ProjectHub
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="#features"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Features
                  </Link>
                  {user ? <UserProfile /> : <Button
                    to={`/user/123`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer"
                    onClick={function () {
                      setShowAuthModal(true);
                    }}>
                    <LogIn />
                    Sign In
                  </Button>}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Manage Student Projects
                <span className="block text-blue-600">Like Never Before</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The ultimate collaboration platform for students. Manage tasks,
                track GitHub issues, discuss ideas, and chat in real-time - all in
                one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigator(`users/${user?._id}`)} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need for Team Success
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built specifically for student teams who want to collaborate
                effectively and deliver amazing projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Task Management */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Task Management
                </h3>
                <p className="text-gray-600">
                  Create, assign, and track tasks with deadlines. Keep everyone
                  accountable and projects on schedule.
                </p>
              </div>

              {/* GitHub Integration */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  GitHub Integration
                </h3>
                <p className="text-gray-600">
                  Sync with GitHub repositories, track issues, and manage pull
                  requests directly from your dashboard.
                </p>
              </div>

              {/* Real-time Chat */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-time Chat
                </h3>
                <p className="text-gray-600">
                  Instant messaging for quick discussions, file sharing, and
                  staying connected with your team.
                </p>
              </div>

              {/* Team Collaboration */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Team Collaboration
                </h3>
                <p className="text-gray-600">
                  Invite team members, assign roles, and collaborate seamlessly on
                  shared documents and resources.
                </p>
              </div>

              {/* Discussion Forums */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Discussion Forums
                </h3>
                <p className="text-gray-600">
                  Organized discussions for different topics, brainstorming
                  sessions, and project planning.
                </p>
              </div>

              {/* Project Analytics */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Project Analytics
                </h3>
                <p className="text-gray-600">
                  Track progress, monitor team performance, and get insights to
                  improve your project workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600">Students Using ProjectHub</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  5,000+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Team Projects?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using ProjectHub to
              collaborate better and achieve more.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100">
              Get Started for Free
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-400" />
                  <span className="ml-2 text-xl font-bold">ProjectHub</span>
                </div>
                <p className="text-gray-400">
                  Empowering students to collaborate and succeed in their
                  projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ProjectHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div></>
  );
}

import { useAppStore } from "@/context/GlobalContext"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, LogOut, Trophy, Target, Calendar, Mail, Shield } from "lucide-react"
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
  const navigate = useNavigate()

  const { user } = useAppStore()

  const handleLogout = async () => {
    const res = await fetch("http://localhost:8000/auth/logout", {
      credentials: "include"
    })
    const resData = await res.json()
    if(res.ok){
      navigate("/")
    }
    // Add your logout logic here
    console.log("Logging out...")
    // Example: clear user data, redirect, etc.
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="gap-2">
          <User className="w-4 h-4 text-black" />
          Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-orange-200">
              <AvatarImage src={user?.profile_picture || ""} alt={user?.name} />
              <AvatarFallback className="bg-orange-100 text-orange-700 text-2xl font-semibold">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-white capitalize">{user?.name}</h2>
              <div className="flex items-center gap-2 text-sm text-white-600 mt-1">
                <Mail className="w-4 h-4 text-white" />
                {user?.email}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  {user?.role}
                </Badge>
                <Badge variant={user?.status === "active" ? "default" : "secondary"} className="text-xs">
                  {user?.status}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Account Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Member since</span>
                <div className="flex items-center gap-1 text-gray-900">
                  <Calendar className="w-4 h-4" />
                  {new Date(user?.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Last active</span>
                <span className="text-gray-900">Today</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Streak</span>
                <div className="flex items-center gap-1 text-orange-600 font-medium">
                  <Target className="w-4 h-4" />7 days
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={handleLogout}
              className="gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UserProfile
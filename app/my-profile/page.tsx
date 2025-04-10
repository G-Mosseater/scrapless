"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { LogOut, Save } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signOutAction } from "../actions";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    avatar: "",
  });

  const supabase = createClient();

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, bio, avatar")
        .eq("id", user.id)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        console.error("Error fetching profile", error);
      }

      if (data) {
        setProfile({
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          bio: data.bio || "",
          avatar: data.avatar || "",
        });
      }
    }

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!userId) return;

    const { error } = await supabase.from("profiles").upsert({
      id: userId,
      first_name: profile.firstName,
      last_name: profile.lastName,
      bio: profile.bio,
      avatar: profile.avatar,
    });

    if (error) {
      console.error("Error saving profile", error);
    }

    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Lógica futura para borrar la cuenta si se desea
    console.log("Delete account clicked");
  };

  return (
    <div className=" pt-16 pb-32 px-4 min-h-svh  overflow-auto flex flex-col ">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="flex-1 flex items-center justify-center w-full">
        <Card className="w-full max-w-2xl border-none">
          <CardContent className="space-y-8 pt-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-40 w-40">
                <AvatarImage
                  src={profile.avatar}
                  alt={`${profile.firstName} ${profile.lastName}`}
                />
                <AvatarFallback>
                  {`${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <div className="w-full">
                  <Label htmlFor="avatar" className="text-sm">
                    Avatar URL
                  </Label>
                  <Input
                    id="avatar"
                    name="avatar"
                    value={profile.avatar}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              )}
            </div>

            <div className="">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                {isEditing ? (
                  <Input
                    id="firstName"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    className="h-10"
                  />
                ) : (
                  <div className="p-2 border rounded-md h-10 flex items-center">
                    {profile.firstName}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                {isEditing ? (
                  <Input
                    id="lastName"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    className="h-10"
                  />
                ) : (
                  <div className="p-2 border rounded-md h-10 flex items-center">
                    {profile.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 w-full">
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea
                  id="bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  rows={4}
                  className="min-h-[100px] resize-none"
                />
              ) : (
                <div className="p-2 border rounded-md min-h-[100px] whitespace-pre-wrap">
                  {profile.bio}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center w-full overflow-auto">
        {!isEditing ? (
          <div className="flex gap-4 justify-between">
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button onClick={signOutAction}>
              <LogOut />
            </Button>
          </div>
        ) : (
          <Button onClick={handleSave}>
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        )}
      </div>
    </div>
  );
}

'use client'

import { createClient } from '@/lib/supabase/client'

export type UserProfile = {
    id: string
    first_name: string
    last_name: string
    email: string
    bio?: string
    avatar?: string
    created_at?: string
}

// Get logged user profile
export async function getProfile(): Promise<UserProfile | null> {
    const supabase = createClient()

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) throw new Error("Not logged in")

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle()

    if (error) throw error
    if (!data) {
        console.log("Perfil no encontrado, quizás quieras crearlo...")
    }



    if (error) throw error

    return data
}

// Update profile
export async function updateProfile(profileData: Partial<UserProfile>) {
    const supabase = createClient()

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) throw new Error("Not logged in")

    const { error } = await supabase
        .from('profiles')
        .update(profileData)
        .eq('id', user.id)

    if (error) throw error
}

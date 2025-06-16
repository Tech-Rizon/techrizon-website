import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Get environment variables with fallbacks for development
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create Supabase client with error handling
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return !!(supabaseUrl && supabaseAnonKey &&
           !supabaseUrl.includes('placeholder') &&
           !supabaseAnonKey.includes('placeholder'))
}

// Types for our database tables
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  company?: string
  inquiry_type: string
  message: string
  status?: 'new' | 'in_progress' | 'resolved'
  created_at?: string
  updated_at?: string
}

export interface UserProfile {
  id?: string
  user_id?: string
  email: string
  full_name?: string
  company?: string
  role?: string
  avatar_url?: string
  created_at?: string
  updated_at?: string
}

// Database functions
export const submitContactForm = async (formData: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>): Promise<{ success: boolean; error?: string; data?: ContactSubmission }> => {
  if (!isSupabaseConfigured()) {
    // Return mock success for development
    console.log('Supabase not configured, simulating form submission:', formData)
    return {
      success: true,
      data: {
        ...formData,
        id: `mock-${Date.now()}`,
        created_at: new Date().toISOString()
      }
    }
  }

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        ...formData,
        status: 'new'
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return { success: false, error: 'Failed to submit form. Please try again.' }
  }
}

export const getUserProfile = async (userId: string): Promise<{ success: boolean; error?: string; data?: UserProfile }> => {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase not configured' }
  }

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Get user profile error:', error)
    return { success: false, error: 'Failed to fetch user profile' }
  }
}

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>): Promise<{ success: boolean; error?: string; data?: UserProfile }> => {
  if (!isSupabaseConfigured()) {
    return { success: false, error: 'Supabase not configured' }
  }

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Update user profile error:', error)
    return { success: false, error: 'Failed to update user profile' }
  }
}

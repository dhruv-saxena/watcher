import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../types/user';

// Passport serialization
passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  // In a real app, you would fetch the user from your database here
  done(null, { id } as User);
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // In a real app, you would:
      // 1. Check if user exists in your database
      // 2. If not, create a new user
      // 3. Return the user object
      const user = {
        id: profile.id,
        email: profile.emails?.[0]?.value,
        name: profile.displayName,
        picture: profile.photos?.[0]?.value
      };
      
      return done(null, user);
    } catch (error) {
      return done(error as Error);
    }
  }
));

export default passport; 
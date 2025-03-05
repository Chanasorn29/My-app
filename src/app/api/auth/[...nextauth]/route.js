import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  // คุณสามารถเพิ่มการตั้งค่าอื่น ๆ ได้ที่นี่ เช่น session, pages, callbacks
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

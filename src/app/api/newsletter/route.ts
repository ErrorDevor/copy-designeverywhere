import axios from "axios";

export const POST = async (req: Request) => {
   try {
      const json = await req.json();

      const email = json?.email?.toString();

      const key = process.env.NEWSLETTER_KEY;
      const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/new?key=${key}`;

      if (!email || !email.includes("@")) {
         return Response.json({ ok: false }, { status: 400 });
      }

      await axios.post(endpoint, { email });

      return Response.json({ ok: true, email });
   } catch (error: any) {
      return Response.json({ ok: false, message: error?.response?.data?.message }, { status: 400 });
   }
};

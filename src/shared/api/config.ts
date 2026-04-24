export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  fileUrl: process.env.NEXT_PUBLIC_FILE_URL!,
  revalidateMs: parseFloat(process.env.NEXT_PUBLIC_REVALIDATE_MS ?? "60"),
};

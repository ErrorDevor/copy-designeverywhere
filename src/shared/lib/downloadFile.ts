"use client";

export async function downloadFile(url: string | null | undefined) {
   if (!url) return;

   try {
      const response = await fetch(url);

      if (!response.ok) {
         throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;

      const filename =
         url.split("/").pop() || `File-${Date.now()}`;

      link.download = filename;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
   } catch (error) {
      console.error(error);
   }
}
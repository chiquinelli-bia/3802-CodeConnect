export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = "zzifj9iu";
  const uploadPreset = "codeconnect";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao fazer upload da imagem no Cloudinary.");
  }

  const data = await response.json();
  return data.secure_url;
}

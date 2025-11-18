export async function generateImage(baseImage: string, referenceImage: string) {
  // Use relative URL so it works in both dev and production
  const res = await fetch("/generate-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      baseImage,
      referenceImage,
    }),
  });

  return await res.json();
}

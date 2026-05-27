export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dxzskaxml/upload";
  const formData = new FormData();
  formData.append("upload_preset", "games_react");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      const errorResp = await resp.json();
      console.log(errorResp);
      throw errorResp;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

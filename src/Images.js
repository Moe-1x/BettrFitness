const publicUrl = (path) =>
  `${process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : ""}${path}`;

const Images = {
  aboutImage: publicUrl("./content/me.webp"),
  logo: publicUrl("./content/logo.svg"),
  check: publicUrl("./content/check.svg"),
};

export default Images;

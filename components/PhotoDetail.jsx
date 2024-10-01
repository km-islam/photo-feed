import { getDictionary } from "../app/[lang]/dictionaries";

const PhotoDetail = async ({ id, lang }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photo = await response.json();
  const dict = await getDictionary(lang);

  console.log(photo, dict);

  return <div>PhotoDetail</div>;
};

export default PhotoDetail;

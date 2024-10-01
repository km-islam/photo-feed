import PhotoDetail from "@/components/PhotoDetail";

const PhotoDetailsPage = ({ params: { id, lang } }) => {
  return <PhotoDetail id={id} lang={lang} />;
};

export default PhotoDetailsPage;

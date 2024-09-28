import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/lws_logo.png"}
        alt="Lws of the author"
        width={100}
        height={165}
        className="max-w-[100px] md:max-w-[165px]"
      />
    </Link>
  );
};

export default Logo;

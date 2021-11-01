import Link from "next/link";
import { Template } from "../../components/template";
const AboutPage = () => {
  return (
    <Template>
    <div>
      <h1> This is ABOUT/Me page </h1> <br />
      <Link href="/"> Go back to home</Link>
    </div>
  </Template>
  );
};

export default AboutPage;

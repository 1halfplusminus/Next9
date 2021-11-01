import Link from "next/link";
import { Template } from '../components/template';

const IndexPage = () => {
  return (
    <Template>
      <h1>
        Hello World
        <br />
        <Link href="about"> About </Link>
      </h1>
    </Template>
  );
};

export default IndexPage;

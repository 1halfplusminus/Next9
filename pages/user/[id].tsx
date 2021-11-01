import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Template } from "../../components/template";
const AboutPage = () => {
  const router = useRouter();
  const {id,...rest} = router.query;
  return (
    <Template>
    <div>
      <h1> User:  {id}</h1> 
      <br />
      {JSON.stringify(rest)}
      <br />
      <Link href="/"> Go back to home</Link>
    </div>
  </Template>
  );
};

export default AboutPage;

import Profile from "../Profile";
import { Link } from "react-router-dom";
export default function Gallery() {
  return (
    <>
      <div >
        <h1>Amazing scientists</h1>
        <br />
        <section className="sessao">
          <Profile />
          <Profile />
          <Profile />
        </section>
        <br />
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

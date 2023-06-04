import { Link } from "react-router-dom";

const Card = ({post}) => {
    return (
        <div className="card">
        <Link className="vermas" to={`/post/${post.id}`}>
          <span className= "title">{post.title}</span>
          <img src={post.img} alt="" className="imgMin" />
          <p className="desc">{post.desc}</p>
          <button className="cardButton">ver mas!</button>
        </Link>
        </div>
    )
}

export default Card
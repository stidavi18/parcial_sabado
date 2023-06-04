import Card from "../components/Card"
import { posts } from "../Data"

const Home = () => {
    return (
    <div className="contenedorPrin">
        <div className="contenedorSec">
            <div className="conetedorInfo">
                <img src={posts[1].img} alt="" className="imagenInicio" />
                <div className="ultimo">
                    <h3>Ultimo encuentro</h3>
                    <p className="despInicio">{posts[1].desc}</p>
                </div>
            </div>
            <div className="home">
                {posts.map(post=>(
                    <Card key={post.id} post={post}/>
                    ))}
            </div>
        </div>
     </div>           
    )
}

export default Home 
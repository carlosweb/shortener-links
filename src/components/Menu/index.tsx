import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <a href="">
                <BsYoutube size={30} color="#222" />
            </a>
            <a href="">
                <BsInstagram size={30} color="#222" />
            </a>
            <Link to="/links">
                <h4>Meus Links</h4>
            </Link>
        </>
    )
}
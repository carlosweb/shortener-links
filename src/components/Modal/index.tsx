import { FiX, FiClipboard } from 'react-icons/fi'

export default function Modal({ closeModal, content }) {

    const { link, long_url  } = content

   async function copyLink() {
        await navigator.clipboard.writeText(link)
    }

    return (
        <>
            <h1>Modal</h1>
            <h2>Link encurtado</h2>
            <button onClick={closeModal}>
                <FiX size={28} color="#222" />
            </button>
            <span>{long_url}</span>
            <button onClick={copyLink}>
                {link}
                <FiClipboard size={28} color="#222" />
            </button>
        </>
    )
}
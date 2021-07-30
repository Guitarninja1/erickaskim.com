const today = new Date();
const year = today.getFullYear();


export default function Footer() {
    return (
        <div className='footer'>
            <p>© Erick Askim {year}</p>
        </div>
    )
}
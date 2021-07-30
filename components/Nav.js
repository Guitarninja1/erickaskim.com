import Link from 'next/link'

export default function Nav() {
    return (
        <nav>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About Me</Link>
            <Link href='/contact'>Contact</Link> 
        </nav>
        
    )
}
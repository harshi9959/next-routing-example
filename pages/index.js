import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>home page</h1>
            <Link href='/blogproduct'>
            blog
            </Link>
            <Link href='/product'>
             products   
            </Link>
        </div>
    )
}

export default Home
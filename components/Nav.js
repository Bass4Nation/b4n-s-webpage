import Link from 'next/link'


const Nav = () =>{

    return (
        <>
        <section>
            <h3>Test</h3>
<section >
                    <section>
                        <Link href="/" passHref>Home</Link>
                    </section>    <section>
                        <Link href="/projects" passHref>Projects</Link>
                    </section>    <section>
                        <Link href="/aboutme" passHref>About me</Link>
                    </section>    <section>
                        <Link href="/contactme" passHref>Contact me</Link>
                    </section>
</section>
        </section>
        </>
    )
}
export default Nav;
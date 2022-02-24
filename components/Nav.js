import Link from 'next/link'
import '../styles/Nav.module.css'


const Nav = () =>{

    return (
        <>
        <section>
            <h3>Test</h3>
<section className="nav_section" >
                    <section className="nav_element">
                        <Link href="/" passHref>Home</Link>
                    </section>    <section>
                        <Link href="/projects" passHref>Projects</Link>
                    </section>    <section>
                        <Link href="/aboutme" passHref>About me</Link>
                    </section>    <section>
                        <Link href="/contactme" passHref>Contact me</Link>
                    </section>   <section>
                        <Link href="/firebase" passHref>Firebase</Link>
                    </section>
</section>
        </section>
        </>
    )
}
export default Nav;
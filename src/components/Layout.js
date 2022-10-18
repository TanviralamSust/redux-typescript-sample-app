import Navbar from "./common/Navbar";

export default function Layout({children}) {
    return(
        <>
            <Navbar></Navbar>
            <main>
                <div>
                    {children}
                </div>

            </main>
        </>
    )
}
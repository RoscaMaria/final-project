import Header from "./Header";


export default function Layout({children}) {
    return (
        <div>
            <Header />

            <div className="my-auto">
                {children}
            </div>
        </div>
    )
}
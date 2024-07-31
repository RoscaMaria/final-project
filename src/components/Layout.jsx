


import Footer from "./Footer2";
import Header from "./Header";
import "../components/Footer2.css";



export default function Layout({children}) {
    return (
        <div>
            <Header />
           
            
            <div className="my-auto">
                
                {children}
                
                
            </div>
            <Footer />
        </div>
    )
}
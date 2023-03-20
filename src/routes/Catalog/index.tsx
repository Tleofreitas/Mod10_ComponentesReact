import './styles.css';
import Card from "../../components/Card";
import Header from "../../components/Header";
import Invitation from "../../components/Invitation";
import Coments from "../../components/Coments";
import ComentsCard from '../../components/ComentsCard';
import Footer from "../../components/Footer";

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section id="dsct-catalog-main" className='dsct-container'>
                    <div className="dsct-invitation-container">
                        <Invitation />
                    </div>
                    <div className="dsct-catalog-cards-container">
                        <Card />
                        <Card />
                    </div>
                </section>
                <section id="dsct-comments-section">
                    <div className="dsct-coments-container">
                        <Coments />
                    </div>
                    <div className="dsct-comentsCard-container">
                        <ComentsCard />
                        <ComentsCard />
                        <ComentsCard />
                        <ComentsCard />
                        <ComentsCard />
                        <ComentsCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
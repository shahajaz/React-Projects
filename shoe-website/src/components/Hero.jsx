const HeroSection = () => {
    return <main className="hero-section">

        <div className="hero-content">
            <h1>Step into Style <span className="highlight">Discover Your Perfect Pair Today!</span></h1>
            <p>Find the perfect shoes to match your style and comfort needs.</p>

            <div className="hero-button">
                <button className="shop-btn">Shop Now</button>
                <button className="explore-btn">Explore More!</button>
            </div>
        </div>

        <div className="hero-image">
            <img src="/img/jordan.png"></img>
        </div>

    </main>
};
export default HeroSection;
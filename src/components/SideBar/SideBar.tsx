import './SideBar.scss';

export const SideBar = () => {
    return (
        <aside className="sidebar">
            <img src="./img/logo.svg" alt="logo" className="sidebar__logo" />

            <nav className="sidebar__nav">
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Home.svg" alt="home" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Generic.svg" alt="generic" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Jobs.svg" alt="jobs" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Person.svg" alt="person" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Heart.svg" alt="heart" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Cart.svg" alt="cart" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Cart.svg" alt="cart" className="sidebar__nav--link-img" />
                </a>
                <a href="#" className="sidebar__nav--link">
                    <img src="./img/Puzzle.svg" alt="puzzle" className="sidebar__nav--link-img" />
                </a>
            </nav>

            <img className="sidebar__arrow" src="./img/Arrows.svg" alt="exit" />
        </aside>
    )
}
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://img.freepik.com/premium-vector/human-character-logo-sign_607588-6768.jpg?size=626&ext=jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const ResturantCard = () => {
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src="data:image/jpeg;base64,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"
            />

            <h3>Meghana Foods</h3>
            <h4>Biryani, North Inidan, Asian</h4>
            <h4>4.4</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <ResturantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

function App() {
    return <AppLayout />
}

export default App

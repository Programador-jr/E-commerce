const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href=""><img src="public/img/logo.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Pesquisar Produto">
                    <button class="search-btn">Procurar</button>
                </div>
                <a href="#"><img src="public/img/user.png" alt=""></a>
                <a href="#"><img src="public/img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">feminino</a></li>
            <li class="link-item"><a href="#" class="link">masculino</a></li>
            <li class="link-item"><a href="#" class="link">infantil</a></li>
            <li class="link-item"><a href="#" class="link">acessórios</a></li>
        </ul>
    `;
}

createNav();
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href=""><img src="img/logo.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Pesquisar Produto">
                    <button class="search-btn">Procurar</button>
                </div>
                <a>
									<img src="img/user.png" id="user-img" alt="">
									<div class="login-logout-popup hide">
										<p class="account-info">Entre com o nome</p>
										<button class="btn" id="user-btn">Sair</button>
									</div>
								</a>
                <a href="#"><img src="img/cart.png" alt=""></a>
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


//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () =>{
	userPopup.classList.toggle('hide');
})

window.onload = () =>{
	let user = JSON.parse(sessionStorage.user || null);
	if (user != null){
		//means user is logged in
			popuptext.innerHTML = `Logado como ${user.name}`;
			actionBtn.innerHTML = 'Sair';
			actionBtn.addEventListener('click', () =>{
			sessionStorage.clear();
			location.reload();
	})
} else{
	//user is logged out
			popuptext.innerHTML = 'Fazer login'
			actionBtn.innerHTML = 'Entrar'
			actionBtn.addEventListener('click', () =>{
			location.href = '/login';
		})
	}
}
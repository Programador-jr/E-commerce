const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Masculino</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">moletons</a></li>
                <li><a href="#" class="footer-link">camisas</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">calças</a></li>
                <li><a href="#" class="footer-link">sapatos</a></li>
                <li><a href="#" class="footer-link">casual</a></li>
                <li><a href="#" class="footer-link">Formal</a></li>
                <li><a href="#" class="footer-link">Esportes</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Feminino</li>
                <li><a href="#" class="footer-link">Camisetas</a></li>
                <li><a href="#" class="footer-link">moletons</a></li>
                <li><a href="#" class="footer-link">camisas</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">calças</a></li>
                <li><a href="#" class="footer-link">sapatos</a></li>
                <li><a href="#" class="footer-link">casual</a></li>
                <li><a href="#" class="footer-link">Formal</a></li>
                <li><a href="#" class="footer-link">Esportes</a></li>
                <li><a href="#" class="footer-link">Assistir</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">sobre a empresa</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">e-mails de suporte - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">Telefone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">termos & serviços</a>
            <a href="#" class="social-link">página de privacidade</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Roupas, loja online da melhor roupa</p>
    `;
}

createFooter();
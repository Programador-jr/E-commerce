// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//forebase admin setup
let serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

//declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

app.listen(3000, () => {
    console.log('Executando na porta 3000.......');
})

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

//signup route
app.get('/signup', (req, res) =>{
	res.sendFile(path.join(staticPath, "signup.html"));
})

app.post('/signup', (req, res) => {
	let { name, email, password, number, tac, notification } = req.body;

	//form validations
	if(name.length < 3){										
		return res.json({'alert': 'O nome deve conter pelo menos 3 letras'});
		} else if(!email.length ){
            return res.json({'alert':'Digite seu e-mail'});
        } else if(password.length < 8){
            return res.json({'alert':'A senha deve ter pelo menos 8 letras'});
        } else if(!number.length){
            return res.json({'alert':'Insira seu número de telefone'});
        } else if(!Number(number) || number.length < 10){
            return res.json({'alert':'Número inválido, por favor insira um número válido'});
        } else if(!tac){
            return res.json({'alert':'Você deve concordar com nossos termos e condições'});
        } else{
		//store user in db
		db.collection('users').doc(email).get().then(user =>{
			if(user.exists){
				return res.json({'alert': 'Uma conta com este mesmo email ja existe'});
			} else{
				//encrypt the password before storing it.
				bcrypt.genSalt(10, (err, salt) =>{
					bcrypt.hash(password, salt, (err, hash) =>{
						req.body.password = hash;
						db.collection('users').doc(email).set(req.body).then(data =>{
							res.json({
								name: req.body.name,
								email: req.body.email,
								seller: req.body.seller,
							})
						})
					})
				})
			}
		})
	}
})			

//login route
app.get('/login', (req, res) =>{
	res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login', (req, res) =>{
	let{ email, password } = req.body;

	if(!email.length || !password.length){
		return res.json({'alert': 'Preencha todos os campos'})
	}

	db.collection('users').doc(email).get()
	.then(user =>{
		if(!user.exists){//is emai does not exists
		return res.json({'alert': 'Email incorreto'});
		} else{
			bcrypt.compare(password, user.data().password, (err, result) =>{
				if(result){
					let data = user.data();
					return res.json({
						name: data.name,
						email: data.email,
						seller: data.seller,
					})
				} else{
					return res.json({'alert': 'Senha incorreta'});
				}
			})
		}
	})
})

// Seller route

	app.get('/seller', (req, res) =>{
			 res.sendFile(path.join(staticPath, "seller.html"));
	})								

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

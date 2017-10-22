const jwt = require('jsonwebtoken');
const secret = "drtguug8*werty+uifghyu";
const users = require ('../models/users');

 
function authenticate(req,res,next){
	const authorizationHeader = req.headers['Authorization'];
	let token;
	if(authorizationHeader){
		token = authorizationHeader.split('')[2];
	}
	if(token){
jwt.verify(token,secret,(err,decoded) =>{
if(err){
	res.status(401).json({error:'Failed.authenticate'})
}else{
	new user({id:decoded.id}).fetch().then(user =>{
if(!user){
	res.status(404).json({error:'No such user'});
}else if(user){
req.userId = decoded;
next();
}
else{
		res.status(403).json({
			errors: 'No token provided'
		});
	}
});
}
});
}
}
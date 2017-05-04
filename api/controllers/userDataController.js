'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('UserDatas');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
       if (err) {
		     return res.json({message: 'Please Try Again',err}); 
		}else{
			 res.json(user);
		}
  });
};




exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  
  new_user.save(function(err, user) {
        if (err) {
		   
			 return res.json({message: 'User cannot be created',error:err});  
		}else{
			 res.json({message: 'User successfully created',user})
		}
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
  
        if (err) {
		    return res.json({message: 'Please Try Again/Check Url'}); 
		}else{
			 res.json(user);
		}
  });
};

exports.update_a_user = function(req, res) {

var id = req.params.userId;
	User.findOne({_id:id},function(err, user){
		
			if (err){
			return res.json({ message: 'Pleae check the url' });
			}
			else{
				  if(!user){
					  return res.json({ message: 'User not found' });
					  
				   }
				   else{
						  //get data to update 			   
						  if(req.body.name){ user.name = req.body.name}
						  if(req.body.address1){ user.address1 = req.body.address1}
						  if(req.body.address2){ user.address2 = req.body.address2}
						  if(req.body.city){ user.city = req.body.city}
						  if(req.body.zip){ 
							  if(req.body.zip == 'null')
							  {user.zip == ''}else{
							  user.zip = req.body.zip}
						  }
						  if(req.body.state){ user.state = req.body.state}
						  if(req.body.country){ user.country = req.body.country}
						  if(req.body.cellphone){ user.cellphone = req.body.cellphone}
						  if(req.body.phone){ user.phone = req.body.phone}
						  //save data
						  user.save(function(err, updateobject) {
								if (err){
								  //console.log(err);	
								  return res.json({ message: 'User cannot be updated,Please try again',err });
								 }else{
								  res.json({ message: 'User successfully updated',updateobject });
								 }
						  }); 	   
					   
					}
				
			}
	    
	});  
};



exports.delete_a_user = function(req, res) {


  User.remove({
    _id: req.params.userId
  }, function(err, user) {
       if (err) {
		    return res.json({message: 'Please Try Again/Check Url',error:err}); 
		}else{
			 res.json({ message: 'User successfully deleted' });
		}
  });
};



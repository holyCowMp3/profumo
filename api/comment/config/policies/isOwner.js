module.exports = async (ctx, next) => {
 const { role } =ctx.state.user;
 const { url } = ctx.request;

 const fieldName = url.match("/([^\/]+[^\/])/gm")[0];
 const fieldId= url.match("/([^\/]+[^\/])/gm")[1];

 const field = ctx.state.user[fieldName];

 if(role.type!== 'root' && field && !field.find(item => item._id.toString()=== fieldId)){
   return ctx.unauthorized('Hey, you are trying to do not very safety action - send the screenshot with this text for us to @markfieldman (TG), and mb we r response 4 u.')
 }

  await next();
};

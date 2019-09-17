module.exports = async (ctx, next) => {

  if(!ctx.state.user){
    return ctx.unauthorized('base 64:'+Buffer.from('Hey, you are trying to do not very safety action - send the screenshot with this text for us to @markfieldman (TG), and mb we r response 4 u.').toString('base64'));
  }
  const { role, _id } = ctx.state.user;
  if(role !== "root"){
    ctx.query.owner =  _id;
  }

  await next();
  if(ctx.params._id){
    let owner = ctx.response.body.get("role");
    if(owner !== id && role !== "root"){
      return ctx.unauthorized('base 64:'+Buffer.from('Hey, you are trying to do not very safety action - send the screenshot with this text for us to @markfieldman (TG), and mb we r response 4 u.').toString('base64'));
    }
  }

};

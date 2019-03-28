module.exports = async (ctx, next) => {
  const { role, id } = ctx.state.user;
  if(role !== "root"){
    ctx.query.owner =  id;
  }
  console.log(ctx.params.id);
  await next();
  if(ctx.params.id){
    let owner = ctx.response.body.get("owner");
    if(owner !== id && role !== "root"){
      return ctx.unauthorized('base 64:'+Buffer.from('Hey, you are trying to do not very safety action - send the screenshot with this text for us to @markfieldman (TG), and mb we r response 4 u.').toString('base64'));
    }
  }

};

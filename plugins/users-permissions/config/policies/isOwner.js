module.exports = async (ctx, next,args) => {
  const { id, role } = ctx.state.user;
  if(role !== "root"){
    ctx.query.owner =  id;
  }

  await next();
  if(ctx.params.id){
    let owner = ctx.response.body.get("owner");
    if(owner !== id && role !== "root"){
      return ctx.unauthorized("You are not allowed to perform this action.");
    }
  }
};

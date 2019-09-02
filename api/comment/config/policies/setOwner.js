module.exports = async (ctx, next) => {

  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  body.owner = _id.toString();


  await next();
};

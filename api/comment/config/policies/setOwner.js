module.exports = async (ctx, next) => {

  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  console.log(ctx.state.user);
  console.log(ctx.state.user.gender);
  console.log(gender);
  ctx.body.gender = gender?ctx.state.user.gender+'':'female';
  ctx.body.owner = _id.toString();
  ctx.body.name = name.toString();

  await next();
};

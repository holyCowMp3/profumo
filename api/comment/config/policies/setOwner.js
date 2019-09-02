module.exports = async (ctx, next) => {
  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  console.log(ctx.state.user);
  console.log(ctx.state.user.gender);
  console.log(gender);
  body.owner = _id.toString();
  body.name = name.toString();
  body.gender = gender?ctx.state.user.gender:'female';
  await next();
};

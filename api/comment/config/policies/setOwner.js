module.exports = async (ctx, next) => {
  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  body.gender = gender?ctx.state.user.gender+'':'female';
  body.owner = _id.toString();
  body.name = name.toString();

  await next();
};

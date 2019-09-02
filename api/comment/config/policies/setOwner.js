module.exports = async (ctx, next) => {
  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  console.log(ctx.state.user);
  body.owner = _id.toString();
  body.name = name.toString();
  body.gender = gender?gender.toString():'male';
  await next();
};

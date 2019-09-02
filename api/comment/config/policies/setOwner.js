module.exports = async (ctx, next) => {

  const { _id,name,gender } =ctx.state.user;
  const { body } = ctx.request;
  console.log(ctx.state.user);
  console.log(ctx.state.user.gender);
  console.log(gender);
  body.gender = await gender?ctx.state.user.gender+'':'female';
  body.owner = await _id.toString();
  body.name = await name.toString();
  console.log(body);
  ctx.request.body =  await body;


  await next();
};

module.exports = async (ctx, next) => {

  const {role, id} = ctx.state.user;

  const fieldId = ctx.params._id;

  if (typeof fieldId !== "undefined")
    await Comment.findOne({_id: fieldId, owner: id}).then(result => {
      if (!result && role.type !== "root")
        return ctx.unauthorized('base 64:' + Buffer.from('Hey, you are trying to do not very safety action - send the screenshot with this text for us to @markfieldman (TG), and mb we r response 4 u.').toString('base64'));
    });
  await next();
};

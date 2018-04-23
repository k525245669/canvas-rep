function getCtx(id) {
  var ctx =  document.getElementById(id).getContext('2d')
  ctx.textAlign = 'center'
  ctx.textBaseline = 'bottom'
  ctx.fillText(id, 75, 150)
  return ctx
}

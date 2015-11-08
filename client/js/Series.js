var Series = function(data){
  this.id = data.nebo_id
  this.name = data.name.replace('&', '&amp;')
}

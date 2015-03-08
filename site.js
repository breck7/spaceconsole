$(document).on('ready', function () {

	$('#spaceConsole').on('keyup', function () {
	  var space = new Space($("#spaceConsole").val())
	  $('#jsonConsole').val(space.toJSON(true, true))
	  $('#javascriptConsole').val(space.toJavascript())
	  $('#csvConsole').val(space.toCsv())
	  $('#xmlConsole').val(space.toXML(true))
	  window.space = space
	})

	$('#jsonConsole').on('keyup', function () {
	  var json = JSON.parse($("#jsonConsole").val())
	  var space = new Space(json)
	  $('#spaceConsole').val(space.toString())
	  $('#javascriptConsole').val(space.toJavascript())
	  $('#csvConsole').val(space.toCsv())
	  $('#xmlConsole').val(space.toXML(true))
	  window.space = space
	})

	$('#xmlConsole').on('keyup', function () {
	  var space = Space.fromXml($("#xmlConsole").val())
	  $('#spaceConsole').val(space.toString())
	  $('#jsonConsole').val(space.toJSON(true, true))
	  $('#javascriptConsole').val(space.toJavascript())
	  $('#csvConsole').val(space.toCsv())
	  window.space = space
	})

	$('#csvConsole').on('keyup', function () {
	  var space = Space.fromCsv($("#csvConsole").val())
	  $('#spaceConsole').val(space.toString())
	  $('#jsonConsole').val(space.toJSON(true, true))
	  $('#javascriptConsole').val(space.toJavascript())
	  $('#xmlConsole').val(space.toXML(true))
	  window.space = space
	})

	$('#spaceConsole').keyup()

})
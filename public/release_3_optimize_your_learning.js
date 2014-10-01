$.when(
  (function() {
  var dfd = $.Deferred();

  console.log("starting a timeout with 3 sec delay");
  setTimeout(function() {
    dfd.resolve("cinnamon ");
  }, 3000)

  return dfd.promise();
})(),

(function() {
  var dfd = $.Deferred();

  console.log("starting a timeout with 1.5 sec delay");
  setTimeout(function() {
    dfd.resolve("toast crunch");
  }, 1500)

  return dfd.promise();
})()
).then(function(a,b) {
  console.log(a + b);
});

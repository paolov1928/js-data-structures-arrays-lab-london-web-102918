// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
  drivers.push(name)
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}
function destructivelyRemoveLastDriver() {
  drivers.splice(-1)
}
function appendDriver(name) {
  let arr = []
  arr = drivers.slice()
  arr.push(name)
  return arr
}
function prependDriver(name) {
  let arr = []
  arr = drivers.slice()
  arr.unshift(name)
  return arr
}
function removeFirstDriver(name) {
  let arr = []
  arr = drivers.slice()
  arr.shift()
  return arr
}
function removeLastDriver(name) {
  let arr = []
  arr = drivers.slice()
  arr.splice(-1)
  return arr
}
